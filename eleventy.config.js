import myPlugin from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/img");

  eleventyConfig.addPlugin(myPlugin);

  return {
    dir: {
      input: "code",
      output: "docs",
    },
  };
}
