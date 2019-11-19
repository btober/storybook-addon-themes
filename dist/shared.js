"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var defaultOptions = {
    list: []
};
function getConfigFromApi(api) {
    var data = api.getCurrentStoryData();
    return getConfig(data && data.parameters && data.parameters[constants_1.PARAM_KEY]);
}
exports.getConfigFromApi = getConfigFromApi;
function getConfig(parameters) {
    var options = parameters instanceof Array
        ? { list: parameters }
        : parameters;
    return __assign({}, defaultOptions, options);
}
exports.getConfig = getConfig;
function getSelectedTheme(list, currentSelectedValue) {
    if (!list.length) {
        return 'none';
    }
    if (currentSelectedValue === 'none') {
        return currentSelectedValue;
    }
    if (currentSelectedValue && list.find(function (i) { return i.name === currentSelectedValue; })) {
        return currentSelectedValue;
    }
    if (list.find(function (i) { return i.default; })) {
        return list.find(function (i) { return i.default; }).name;
    }
    return 'none';
}
exports.getSelectedTheme = getSelectedTheme;
;
