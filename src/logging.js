"use strict";
exports.__esModule = true;
var colors = require("colors");
colors.setTheme({
    // info (green, cyan, blue)
    infoPrimary: 'green',
    infoItem: 'cyan',
    // error (red, yellow, magenta)
    warnPrimary: 'orange',
    warnItem: 'yellow',
    // error (red, yellow, magenta)
    errorPrimary: 'red',
    errorItem: 'magenta'
});
var error = console.error.bind(console);
var warn = console.warn.bind(console);
var log = console.log.bind(console);
exports.logs = function logs(obj) {
    // TODO :: pass object to persistent logging tool
    // log({ caller: logs.caller, obj });
    switch (obj.name) {
        default:
            log((new Date()).toString(), "[server]", typeof obj === 'object' ?
                ("" + obj.name || '', "" + obj.message || '') :
                "" + obj);
    }
};
exports.warns = function warns(obj) {
    // TODO :: pass object to persistent logging tool
    // log({ caller: logs.caller, obj });
    switch (obj.name) {
        default:
            warn((new Date()).toString(), "[server]", typeof obj === 'object' ?
                ("" + obj.name || '', "" + obj.message || '') :
                "" + obj);
    }
};
exports.errors = function errors(obj) {
    switch (obj.name) {
        case 'TypeError':
        case 'MongoError':
        case 'ValidationError':
            error((new Date()).toString(), "[server]", "" + obj.name, "" + obj.message);
            break;
        default:
            error((new Date()).toString(), "[server]", typeof obj === 'object' ?
                ("" + obj.name || '', "" + obj.message || '') :
                "" + obj);
    }
};
