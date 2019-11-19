"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var memoizerific_1 = __importDefault(require("memoizerific"));
var core_events_1 = require("@storybook/core-events");
var components_1 = require("@storybook/components");
var constants_1 = require("../constants");
var components_2 = require("../components");
var shared_1 = require("../shared");
var iframeId = 'storybook-preview-iframe';
var createThemeSelectorItem = memoizerific_1.default(1000)(function (id, title, color, hasSwatch, change, active) { return ({
    id: id,
    title: title,
    onClick: function () {
        change({ selected: id, expanded: false });
    },
    value: id,
    right: hasSwatch ? react_1.default.createElement(components_2.ColorIcon, { background: color }) : undefined,
    active: active,
}); });
var getDisplayableState = memoizerific_1.default(10)(function (props, state, change) {
    var list = shared_1.getConfigFromApi(props.api).list;
    var selectedThemeName = shared_1.getSelectedTheme(list, state.selected);
    var availableThemeSelectorItems = [];
    var selectedTheme;
    //    if (selectedThemeName !== 'none') {
    //      availableThemeSelectorItems.push(
    //        createThemeSelectorItem('none', 'Clear theme', 'transparent', null, change, false)
    //      );
    //    }
    if (list.length) {
        availableThemeSelectorItems = availableThemeSelectorItems.concat(list.map(function (_a) {
            var color = _a.color, name = _a.name;
            return createThemeSelectorItem(name, name, color, true, change, name === selectedThemeName);
        }));
        selectedTheme = list.find(function (theme) { return theme.name === selectedThemeName; });
    }
    return {
        items: availableThemeSelectorItems,
        selectedTheme: selectedTheme,
        themes: list,
    };
});
var ThemeSelector = /** @class */ (function (_super) {
    __extends(ThemeSelector, _super);
    function ThemeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            decorator: false,
            items: [],
            selected: null,
            expanded: false,
        };
        _this.setStories = function () { return _this.setState({ selected: null }); };
        _this.setTheme = function (theme) { return _this.setState({ selected: theme }); };
        _this.setDecorator = function () { return _this.setState({ decorator: true }); };
        _this.change = function (args) {
            var selected = args.selected;
            var api = _this.props.api;
            var decorator = _this.state.decorator;
            _this.setState(args);
            if (decorator) {
                api.emit(constants_1.CHANGE, selected);
            }
        };
        return _this;
    }
    ThemeSelector.prototype.componentDidMount = function () {
        var api = this.props.api;
        api.on(core_events_1.SET_STORIES, this.setStories);
        api.on(constants_1.THEME, this.setTheme);
        api.on(constants_1.DECORATOR, this.setDecorator);
    };
    ThemeSelector.prototype.componentWillUnmount = function () {
        var api = this.props.api;
        api.off(core_events_1.SET_STORIES, this.setStories);
        api.off(constants_1.THEME, this.setTheme);
        api.off(constants_1.DECORATOR, this.setDecorator);
    };
    ThemeSelector.prototype.render = function () {
        var _this = this;
        var _a = this.state, decorator = _a.decorator, expanded = _a.expanded;
        var _b = getDisplayableState(this.props, this.state, this.change), items = _b.items, selectedTheme = _b.selectedTheme, themes = _b.themes;
        return items.length ? (react_1.default.createElement(react_1.Fragment, null,
            !decorator && (react_1.default.createElement(components_2.ThemeStory, { iframeId: iframeId, selectedTheme: selectedTheme, themes: themes })),
            react_1.default.createElement(components_1.WithTooltip, { placement: "top", trigger: "click", tooltipShown: expanded, onVisibilityChange: function (newVisibility) {
                    return _this.setState({ expanded: newVisibility });
                }, tooltip: react_1.default.createElement(components_1.TooltipLinkList, { links: items }), closeOnClick: true },
                react_1.default.createElement(components_1.IconButton, { key: "theme", active: selectedTheme, title: "Change the theme of the preview" },
                    react_1.default.createElement(components_1.Icons, { icon: "photo" }))))) : null;
    };
    return ThemeSelector;
}(react_1.Component));
exports.ThemeSelector = ThemeSelector;
