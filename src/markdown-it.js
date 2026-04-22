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
export const markdownParser = (() => {
  const options = {
    html: true,
    linkify: false,
    typographer: true,
  };

  const md = new MarkdownIt(options);

  // markdown-it-attribution still calls `md.utils.assign`, a helper that
  // was removed from markdown-it in v14+ (it uses Object.assign internally
  // now). Restore it before loading the plugin so it doesn’t crash.
  md.utils.assign = md.utils.assign || Object.assign;

  md.use(markdownItAttribution, {
    classNameContainer: "box-quote",
    classNameAttribution: "box-quote__caption",
    marker: "--",
  })
    .use(markdownItAttrs)
    .use(markdownItDeflist)
    .use(markdownItImageFigures, { figcaption: true });

  return md;
})();
