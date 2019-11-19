"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var addons_1 = __importStar(require("@storybook/addons"));
var constants_1 = require("./constants");
var components_1 = require("./components");
var store_1 = require("./store");
var shared_1 = require("./shared");
exports.store = new store_1.Store();
exports.withThemes = addons_1.makeDecorator({
    name: 'withThemes',
    parameterName: constants_1.PARAM_KEY,
    wrapper: function (getStory, context, _a) {
        var parameters = _a.parameters;
        var config = shared_1.getConfig(parameters);
        var channel = addons_1.default.getChannel();
        channel.emit(constants_1.DECORATOR);
        return (react_1.default.createElement(components_1.ThemeDecorator, { config: config, store: exports.store }, getStory(context)));
    }
});
if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}
