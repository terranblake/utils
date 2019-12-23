"use strict";
var _this = this;
exports.__esModule = true;
var _moment = require("moment");
var moment_range_1 = require("moment-range");
var moment = moment_range_1.extendMoment(_moment);
exports.quarters = [
    // quarter 1 usually spans January 1-March 31;
    [moment("2019-01-01T00:00:00.000").year(1990), moment("2019-03-31T23:59:59.999").year(1990)],
    // quarter 2 usually spans April 1-June 30;
    [moment("2019-04-01T00:00:00.000").year(1990), moment("2019-06-30T23:59:59.999").year(1990)],
    // quarter 3 usually spans July 1-September 30;
    [moment("2019-07-01T00:00:00.000").year(1990), moment("2019-09-30T23:59:59.999").year(1990)],
    // quarter 4 usually spans October 1-December 31
    [moment("2019-10-01T00:00:00.000").year(1990), moment("2019-12-31T23:59:59.999").year(1990)],
];
exports.getMostIntersectedRange = function (inputRange, ranges) {
    var overlaps = {};
    for (var r in ranges) {
        var _a = ranges[r], start = _a[0], end = _a[1];
        var indexRange = moment.range([start.year(inputRange.start.year()), end.year(inputRange.end.year())]);
        if (indexRange.overlaps(inputRange)) {
            var intersection = indexRange.intersect(inputRange);
            overlaps[Number(r) + 1] = Math.abs(intersection.start.diff(intersection.end, 'days'));
        }
    }
    var result = Object.keys(overlaps).reduce(function (acc, curr) {
        // handle first undefined
        if (!overlaps[acc]) {
            return curr;
        }
        return overlaps[curr] > overlaps[acc] ? curr : acc;
    }, -1);
    return result;
};
exports.getDateType = function (value) {
    if (!value.startDate) {
        return 'instant';
    }
    var monthsInRange = Math.abs(moment(value.startDate).diff(moment(value.endDate), 'months'));
    if (monthsInRange < 2) {
        return 'month';
    }
    if (monthsInRange < 5) {
        return 'quarter';
    }
    return 'year';
};
exports.getYearReported = function (value, dateType) {
    if (!dateType) {
        dateType = _this.getDateType(value);
    }
    if (dateType === 'instant') {
        return moment(value).year();
    }
    var startDate = value.startDate, endDate = value.endDate;
    startDate = moment(startDate);
    endDate = moment(endDate);
    // start and end date are in the same year
    var differentYears = startDate.year() !== endDate.year();
    if (!differentYears) {
        return startDate.year();
    }
    // get start date months to end of year
    var startYear = moment().year(startDate.year()).endOf('year');
    var daysInStartYear = startYear.diff(startDate, 'days');
    // get end date months to beginning of year
    var endYear = moment().year(endDate.year()).startOf('year');
    var daysInEndYear = endDate.diff(endYear, 'days');
    // return the year of whichever one had the
    // most days from the range
    return daysInStartYear > daysInEndYear
        ? startDate.year()
        : endDate.year();
};
exports.getQuarterReported = function (value, dateType) {
    if (!dateType) {
        dateType = _this.getDateType(value);
    }
    if (dateType === 'instant') {
        return moment(value).quarter();
    }
    if (dateType === 'year') {
        return moment(value.startDate).quarter();
    }
    var reportedRange = moment.range([moment(value.startDate), moment(value.endDate)]);
    return Number(_this.getMostIntersectedRange(reportedRange, exports.quarters));
};
