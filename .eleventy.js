module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("randomItem", (arr) => {
  arr.sort(() => {
    return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

