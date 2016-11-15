function fixRelativeImports(fileName, source) {
    console.log(" ----- Applying aot fix for: " + fileName)
    // console.log(" ----- SOURCE START -----: ")
    // console.log(source)
    // console.log(" ----- SOURCE  END -----: ")

    var result = source;
    result = result.replace(/(\.\.\/)?platform\'/g, 'platform\'');
    result = result.replace(/(\.\.\/)?ui\/frame\'/g, 'ui/frame\'');
    result = result.replace(/(\.\.\/)?ui\/page\'/g, 'ui/page\'');

    if (source !== result) {
        console.log(" --!-- Imports fixed for: " + fileName)
    }

    return result;
}


module.exports = function(source, map) {
  this.cacheable();
  var resultSource = fixRelativeImports(this.resource, source);
  this.callback(null, resultSource, map);
};