"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var addons_1 = require("@storybook/addons");
var constants_1 = require("./constants");
var containers_1 = require("./containers");
addons_1.addons.register(constants_1.ADDON_ID, function (api) {
    addons_1.addons.add(constants_1.ADDON_ID, {
        title: 'Themes',
        type: addons_1.types.TOOL,
        match: function (_a) {
            var viewMode = _a.viewMode;
            return viewMode === 'story';
        },
        render: function () { return react_1.default.createElement(containers_1.ThemeSelector, { api: api }); },
    });
});
