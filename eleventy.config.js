import fs from "node:fs/promises";

import { HtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import eleventyLightningCss from "@11tyrocks/eleventy-plugin-lightningcss";

import * as filters from "./src/filters.js";
import { markdownParser } from "./src/markdown-it.js";

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyLightningCss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Libraries
  eleventyConfig.setLibrary("md", markdownParser);

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventyConfig.addFilter(name, filter);
  }

  // Global data
  eleventyConfig.addGlobalData("baseUrl", "https://goodmachine.team");
  eleventyConfig.addGlobalData("layout", "article");

  // Pass through
  eleventyConfig.addPassthroughCopy("./app/assets");
  eleventyConfig.addPassthroughCopy({
    "./app/_data/app.json": "app.webmanifest",
  });
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  // Reset contents of output directory before each build
  eleventyConfig.on("eleventy.before", async ({ directories, runMode }) => {
    if (runMode === "build") {
      await fs.rm(directories.output, {
        force: true,
        recursive: true,
      });
    }
  });

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
