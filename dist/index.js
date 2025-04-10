"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.style = void 0;
const ANSI_1 = require("./modules/ANSI");
const style = (styles, text) => {
    if (typeof styles === 'string') {
        return `${ANSI_1.ANSI[styles] || ANSI_1.ANSI[styles]}${text}${ANSI_1.ANSI.RESET}`;
    }
    else if (Array.isArray(styles)) {
        return styles.reduce((acc, style) => {
            return `${acc}${ANSI_1.ANSI[style] || ANSI_1.ANSI[style]}`;
        }, '') + text + ANSI_1.ANSI.RESET;
    }
    return text;
};
exports.style = style;
//# sourceMappingURL=index.js.map