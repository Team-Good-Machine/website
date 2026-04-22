import { HtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import { md } from "./src/markdown-it.js";

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Libraries
  eleventyConfig.setLibrary("md", md());

  // Global data
  eleventyConfig.addGlobalData("baseUrl", "https://goodmachine.team");

  // Pass through
  eleventyConfig.addPassthroughCopy("./app/assets");
  eleventyConfig.addPassthroughCopy("./app/images");

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "app",
      layouts: "_layouts",
    },
  };
}
