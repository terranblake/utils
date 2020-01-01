"use strict";
exports.__esModule = true;
var formatLogs = function (args) {
    return args.join(' ');
};
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var formatted = formatLogs(args);
    console.log(formatted);
}
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var formatted = formatLogs(args);
    console.warn(formatted);
}
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var formatted = formatLogs(args);
    console.error(formatted);
}
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var formatted = formatLogs(args);
    console.debug(formatted);
}
exports["default"] = { info: info, warn: warn, error: error, debug: debug };
