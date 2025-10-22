// eleventy.config.js
module.exports = function (eleventyConfig) {
  // Passthrough copy for common asset folders
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("assets");

  // Watch additional files during dev
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  // Simple shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Example collection for posts in "posts" folder
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
      return (b.date || 0) - (a.date || 0);
    });
  });

  // Minimal HTML minify transform for production builds
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return content
          .replace(/<!--[\s\S]*?-->/g, "")      // remove comments
          .replace(/\s{2,}/g, " ")             // collapse multiple spaces
          .replace(/>\s+</g, "><")             // remove whitespace between tags
          .trim();
      }
      return content;
    });
  }

  // BrowserSync tweak for live CSS reloads
  eleventyConfig.setBrowserSyncConfig({
    files: ["_site/css/**/*.css"],
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};