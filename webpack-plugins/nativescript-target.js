module.exports = function nativescriptTarget(compiler) {
    console.log("------###-----> Loading nativescriptTarget");
    var options = this;
    var webpackLib = "webpack/lib";

    // Custom template plugin
    var NsJsonpTemplatePlugin = require("./NsJsonpTemplatePlugin");

    var FunctionModulePlugin = require(webpackLib + "/FunctionModulePlugin");
    var NodeSourcePlugin = require(webpackLib + "/node/NodeSourcePlugin");
    var LoaderTargetPlugin = require(webpackLib + "/LoaderTargetPlugin");

    compiler.apply(
        new NsJsonpTemplatePlugin(options.output),
        new FunctionModulePlugin(options.output),
        new NodeSourcePlugin(options.node),
        new LoaderTargetPlugin("web")
    );


    // var NodeTemplatePlugin = require(webpackLib + "/node/NodeTemplatePlugin");

    // compiler.apply(
    //     new NodeTemplatePlugin(false),
    //     new FunctionModulePlugin(options.output),
    //     new NodeSourcePlugin(options.node),
    //     new LoaderTargetPlugin("web")
    // );
}