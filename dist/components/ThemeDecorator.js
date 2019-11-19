"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var addons_1 = __importDefault(require("@storybook/addons"));
var constants_1 = require("../constants");
var hooks_1 = require("../hooks");
var shared_1 = require("../shared");
exports.ThemeDecorator = function (props) {
    var children = props.children, config = props.config, store = props.store;
    var themeName = hooks_1.useTheme(store) || shared_1.getSelectedTheme(config.list);
    var theme = config.list.find(function (theme) { return theme.name === themeName; });
    var channel = addons_1.default.getChannel();
    channel.emit(constants_1.THEME, themeName);
    react_1.useEffect(function () {
        var callback = function (theme) { return store.set('theme', theme); };
        var channel = addons_1.default.getChannel();
        channel.on(constants_1.CHANGE, callback);
        return function () { return channel.removeListener(constants_1.CHANGE, callback); };
    }, [store]);
    var themeClasses = theme
        ? theme.class instanceof Array
            ? theme.class.join(' ')
            : theme.class
        : undefined;
    return (react_1.default.createElement("div", { className: themeClasses }, children));
};
