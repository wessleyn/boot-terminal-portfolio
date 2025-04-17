module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
 
    return {
        dir: {
            input: "src",
        }
    }
}