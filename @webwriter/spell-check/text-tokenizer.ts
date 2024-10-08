import {
  EditorState,
  Plugin,
  TextSelection,
  Transaction,
} from "prosemirror-state";

type Token = {
  type: "word" | "punctuation" | "space";
  value: string;
  position: number;
};

export function tokenizeText(text: string): Token[] {
  const tokens: Token[] = [];
  // Updated regex to treat contractions and possessives as single words
  const regex = /(\w+(?:['’-]\w+)*|[^\w\s]|\s+)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const value = match[0];
    const position = match.index;
    let type: "word" | "punctuation" | "space";

    if (/^\w+(?:[']\w+)?$/.test(value)) {
      type = "word";
    } else if (/^\s+$/.test(value)) {
      type = "space";
    } else {
      type = "punctuation";
    }

    tokens.push({ type, value, position });
  }

  return tokens;
}

type DiffToken = {
  type: "insert" | "delete" | "unchanged";
  token: Token;
};

export function diffTokens(
  originalTokens: Token[],
  correctedTokens: Token[]
): DiffToken[] {
  const m = originalTokens.length;
  const n = correctedTokens.length;
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (originalTokens[i - 1].value === correctedTokens[j - 1].value) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the diff
  const diff: DiffToken[] = [];
  let i = m,
    j = n;
  while (i > 0 || j > 0) {
    if (
      i > 0 &&
      j > 0 &&
      originalTokens[i - 1].value === correctedTokens[j - 1].value
    ) {
      diff.unshift({ type: "unchanged", token: originalTokens[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({ type: "insert", token: correctedTokens[j - 1] });
      j--;
    } else {
      diff.unshift({ type: "delete", token: originalTokens[i - 1] });
      i--;
    }
  }

  const compressedDiff = compressDiffTokens(diff);

  return compressedDiff;
}

function compressDiffTokens(diff: DiffToken[]): DiffToken[] {
  const compressedDiff: DiffToken[] = [];
  let lastToken: DiffToken | null = null;

  for (const token of diff) {
    if (lastToken && lastToken.type === token.type) {
      lastToken.token.value += token.token.value;
    } else {
      compressedDiff.push(token);
      lastToken = token;
    }
  }

  return compressedDiff;
}

type Suggestion = {
  type: "replace" | "insert" | "delete";
  original: Token;
  corrected: Token;
};

export function matchDiffs(diff: DiffToken[]): Suggestion[] {
  const suggestions: Suggestion[] = [];
  let i = 0;
  while (i < diff.length) {
    const token = diff[i];
    if (token.type === "delete") {
      if (i + 1 < diff.length && diff[i + 1].type === "insert") {
        suggestions.push({
          type: "replace",
          original: token.token,
          corrected: diff[i + 1].token,
        });
        i += 2;
      } else {
        suggestions.push({
          type: "delete",
          original: token.token,
          corrected: token.token,
        });
        i++;
      }
    } else if (token.type === "insert") {
      suggestions.push({
        type: "insert",
        original: token.token,
        corrected: token.token,
      });
      i++;
    } else {
      i++;
    }
  }
  return suggestions;
}

export function applyGrammarSuggestions(
  editorState: EditorState,
  suggestions: Suggestion[]
): Transaction {
  let tr = editorState.tr;

  // Sort suggestions in reverse order to avoid position shifts
  const sortedSuggestions = [...suggestions].sort(
    (a, b) => b.original.position - a.original.position
  );

  for (const suggestion of sortedSuggestions) {
    const from = suggestion.original.position + 1;
    const to = from + suggestion.original.value.length;

    switch (suggestion.type) {
      case "replace":
        tr = tr
          // .removeMark(from, to, editorState.schema.marks.grammar)
          .addMark(
            from,
            to,
            editorState.schema.marks.grammar.create({
              corrected: suggestion.corrected.value,
            })
          );

        break;
      case "insert":
        tr = tr.addMark(
          from,
          from + 1,
          editorState.schema.marks.grammar.create({
            corrected: suggestion.corrected.value,
          })
        );

      case "delete":
        tr = tr.addMark(
          from,
          to,
          editorState.schema.marks.grammar.create({ corrected: "" })
        );
        break;
    }
  }

  return tr;
}
