"use strict";
exports.__esModule = true;
var logger_1 = require("./logger");
function signum(decimals) {
    decimals = Number(decimals);
    if (!decimals || !isNaN(decimals)) {
        throw new Error("cannot get signum (+/-) from invalid input " + decimals);
    }
    var sign = String(decimals.slice(0, 1));
    sign = sign === '-'
        ? '-'
        : Number(decimals) !== 0
            ? '+'
            : '-';
    return sign;
}
function magnitude(value, decimals, sign) {
    // if the value ends in a zero, then it has already been
    // rounded and doesn't need to be adjusted
    if (Number(String(value).slice(value.length - 1)) === 0) {
        return Number(value);
    }
    if (decimals && !['+', '-'].includes(sign)) {
        logger_1["default"].error("cannot normalize[" + value + "] without +/- sign[" + sign + "] in decimals[" + decimals + "]");
        return value;
    }
    var places = decimals.slice(1);
    var scalar = sign === '-'
        ? Math.pow(10, Number(places))
        : places !== ''
            ? Math.pow(10, Number(-1 * Number(places)))
            : 1;
    return Number(value) * scalar;
}
exports["default"] = { signum: signum, magnitude: magnitude };