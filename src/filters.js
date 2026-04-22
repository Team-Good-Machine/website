import Nunjucks from "nunjucks";

import { markdownParser } from "./markdown-it.js";

const { SafeString } = Nunjucks.runtime;

/**
 * Convert a string of text into Markdown
 *
 * @param {string} string - Markdown
 * @param {string} value - If 'inline', HTML rendered without paragraph tags
 * @returns {string} HTML
 */
export const markdown = (string, value) => {
  if (!string) {
    return new SafeString("");
  }

  return new SafeString(
    value === "inline"
      ? markdownParser.renderInline(string)
      : markdownParser.render(string),
  );
};
