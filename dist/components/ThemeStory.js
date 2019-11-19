"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// @ts-ignore
var global_1 = require("global");
exports.ThemeStory = function (props) {
    var iframeId = props.iframeId, selectedTheme = props.selectedTheme, themes = props.themes;
    react_1.useEffect(function () {
        var _a;
        var iframe = global_1.document.getElementById(iframeId);
        if (!iframe) {
            return null;
        }
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        var body = iframeDocument.body;
        // Add selected theme class(es).
        if (selectedTheme) {
            if (typeof selectedTheme.class === 'string') {
                body.classList.add(selectedTheme.class);
            }
            else { // string[]
                (_a = body.classList).add.apply(_a, selectedTheme.class);
            }
        }
        return function () { return themes
            .filter(function (theme) { return theme.class; })
            .forEach(function (theme) {
            var _a;
            if (typeof theme.class === 'string') {
                body.classList.remove(theme.class);
            }
            else { // string[]
                (_a = body.classList).remove.apply(_a, theme.class);
            }
        }); };
    });
    return null;
};
