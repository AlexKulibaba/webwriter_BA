/*
Copies shoelace icons into static directory.
*/

const { existsSync, mkdirSync } = require('fs')
const fse = require('fs-extra')
const path = require('path')
const process = require("process")


const STATIC_PATH = path.normalize(process.argv[2] ?? "./static")
const ICONS_PATH = path.normalize("./node_modules/bootstrap-icons/icons/")
const CC_PATH = path.normalize("./node_modules/@wagnerflo/cc-icons/fonts/cc-icons-svg/")
const STATIC_ICONS_PATH = path.join(STATIC_PATH, "assets", "icons")

async function main() {
  !existsSync(STATIC_ICONS_PATH) && mkdirSync(STATIC_ICONS_PATH, {recursive: true})
  fse.copySync(ICONS_PATH, STATIC_ICONS_PATH)
  fse.copySync(CC_PATH, STATIC_ICONS_PATH)
}

main().catch((e) => {
  throw e
})