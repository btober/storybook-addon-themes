"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useTheme(store) {
    var selected = store.get('theme');
    var _a = react_1.useState(selected), theme = _a[0], setTheme = _a[1];
    react_1.useEffect(function () {
        return store.subscribe(function (key, value) {
            if (key === 'theme') {
                setTheme(value);
            }
        });
    }, []);
    return theme;
}
exports.useTheme = useTheme;
