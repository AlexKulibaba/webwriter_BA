import {ReactiveController, ReactiveControllerHost} from "lit"

import { RootStore } from "../model"
import { save } from "@tauri-apps/api/dialog";

export class NotificationController implements ReactiveController {

  host: ReactiveControllerHost
	store: RootStore

  constructor(host: ReactiveControllerHost, store: RootStore) {
		this.store = store;
    (this.host = host).addController(this)
  }


  hostConnected() {
		window.onerror = e => this.handleEvent(e, {throwOnly: true, isOnError: true})
		window.onunhandledrejection = e => this.handleEvent(e, {throwOnly: true})
		const defaultWarn = console.warn
		const defaultError = console.error
		console.warn = (message, ...params) => {
      this.handleEvent(message, {warn: defaultWarn, warning: true}, ...params)
		}
		console.error = (message, ...params) => {
      this.handleEvent(message, {error: defaultError}, ...params)
		}
  }

	handleEvent = (e: any, {warn=console.warn, error=console.error, warning=false, throwOnly=false, isOnError=false} = {}, ...params: any[]) => {	
    let err: Error
		if(e.type === "unhandledrejection") {
      err = (e as PromiseRejectionEvent).reason
		}
		else if(e instanceof Error) {
			err = e
		}
		else {
			err = new Error(e)
		}
		const notify = (m: string) => this.notify(m, warning? "warning": "danger")
		const log = (m: string) => warning? warn(m, ...params): error(m, ...params)
		const ignoreList = warning? this.warningsToIgnore: this.errorsToIgnore
		if(ignoreList.some(s => err.message?.startsWith(s))) {
			return isOnError
		}
		else if(!throwOnly) {
		notify(err.message)
		log(e)
		}
	}

  notify(message: string, variant: "danger" | "warning" = "danger") {
    return this.store.ui.enqueueNotification({variant, message})
  }

	errorsToIgnore = [
		"TypeError: Cannot set properties of null (setting 'tabIndex')",
		"ResizeObserver loop limit exceeded",
		"UserCancelled",
		"TypeError: Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element'.",
		"You are trying to re-register the",
		"Uncaught TypeError: Failed to execute 'unobserve' on 'ResizeObserver'",
    "Option values cannot include a space. All spaces have been replaced with underscores.",
    "Uncaught TypeError: Cannot read properties of null (reading 'anchorNode')"
	]

	warningsToIgnore = [
		"ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
    "The `requestUpdate` method should no longer return a Promise but does so on `ww-app`. Use `updateComplete` instead. See https://lit.dev/msg/request-update-promise for more information.",
    "TextSelection endpoint not pointing into a node with inline content",
    "Ignored scripts due to flag.",
    "The main 'lit-element' module entrypoint is deprecated.",
    "Element sl-button scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update. See https://lit.dev/msg/change-in-update for more information.",
	"[TAURI] Couldn't find callback id",
	]
}