import MarkdownIt from "markdown-it";
import markdownItAttribution from "markdown-it-attribution";
import markdownItAttrs from "markdown-it-attrs";
import markdownItDeflist from "markdown-it-deflist";
import markdownItImageFigures from "markdown-it-image-figures";

/**
 * Configure markdown-it
 *
 * @see {@link https://markdown-it.github.io/markdown-it/}
 * @returns {MarkdownIt} markdown-it instance
 */
export function md() {
  const opts = {
    breaks: true,
    html: true,
    linkify: false,
    typographer: true,
  };

  const md = new MarkdownIt(opts)
    .use(markdownItAttribution, {
      marker: "--",
    })
    .use(markdownItAttrs)
    .use(markdownItDeflist)
    .use(markdownItImageFigures, {
      figcaption: true,
    });

  return md;
}
