({
    baseUrl: "../",
    name: "almond",
    out: "../dist/converse-no-jquery-backbone.min.js",
    include: ["converse"],
    exclude: [
        "jquery",
        "jquery-private",
        "backbone",
        "lodash",
        "underscore",
        "tpl",
    ],
    wrap: {
        startFile: "start.frag",
        endFile: "end-no-jquery-backbone.frag"
    },
    mainConfigFile: "config.js"
})
