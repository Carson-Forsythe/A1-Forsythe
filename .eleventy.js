module.exports = function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_src/sass");
     eleventyConfig.addWatchTarget("./_src/imgs");
     eleventyConfig.addPassthroughCopy("./_src/imgs");
     return {
          dir: {
               input: "_src"
          }
     }
}