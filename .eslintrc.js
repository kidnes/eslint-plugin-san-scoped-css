"use strict"

// const version = require("./package.json").version

module.exports = {
    parserOptions: {
        sourceType: "script",
        ecmaVersion: 2018,
    },
    plugins: ["internal-rules"],
    extends: [
        "plugin:@mysticatea/es2015",
        "plugin:@mysticatea/+node",
        "plugin:@mysticatea/+eslint-plugin",
    ],
    rules: {
        "require-jsdoc": "error",
        "no-warning-comments": "warn",
        "no-lonely-if": "off",
        "@mysticatea/ts/ban-ts-ignore": "off",
    }
}
