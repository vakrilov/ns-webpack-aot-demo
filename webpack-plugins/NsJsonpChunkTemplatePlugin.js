/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var ConcatSource = require("webpack-sources").ConcatSource;
var Template = require("webpack/lib/Template");

function JsonpChunkTemplatePlugin() { }
module.exports = JsonpChunkTemplatePlugin;

JsonpChunkTemplatePlugin.prototype.apply = function (chunkTemplate) {

	//JSONP version
	chunkTemplate.plugin("render", function (modules, chunk) {
		var jsonpFunction = this.outputOptions.jsonpFunction;
		var source = new ConcatSource();
		source.add(jsonpFunction + "(" + JSON.stringify(chunk.ids) + ",");
		source.add(modules);
		var entries = [chunk.entryModule].filter(Boolean).map(function (m) {
			return m.id;
		});
		if (entries.length > 0) {
			source.add("," + JSON.stringify(entries));
		}
		source.add(")");
		return source;
	});
	chunkTemplate.plugin("hash", function (hash) {
		hash.update("JsonpChunkTemplatePlugin");
		hash.update("3");
		hash.update(this.outputOptions.jsonpFunction + "");
		hash.update(this.outputOptions.library + "");
	});

	// NODE version
	// chunkTemplate.plugin("render", function(modules, chunk) {
	// 	var source = new ConcatSource();
	// 	source.add("exports.ids = " + JSON.stringify(chunk.ids) + ";\nexports.modules = ");
	// 	source.add(modules);
	// 	source.add(";");
	// 	return source;
	// });
	// chunkTemplate.plugin("hash", function(hash) {
	// 	hash.update("node");
	// 	hash.update("3");
	// });

};
