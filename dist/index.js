var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  style: () => style
});
module.exports = __toCommonJS(index_exports);

// src/modules/ANSI.ts
var ANSI = {
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  italic: "\x1B[3m",
  underline: "\x1B[4m",
  blink: "\x1B[5m",
  inverse: "\x1B[7m",
  hidden: "\x1B[8m",
  strikethrough: "\x1B[9m",
  // テキスト色
  black: "\x1B[30m",
  gray: "\x1B[90m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m",
  // 背景色
  bgBlack: "\x1B[40m",
  bgGray: "\x1B[100m",
  bgRed: "\x1B[41m",
  bgGreen: "\x1B[42m",
  bgYellow: "\x1B[43m",
  bgBlue: "\x1B[44m",
  bgMagenta: "\x1B[45m",
  bgCyan: "\x1B[46m",
  bgWhite: "\x1B[47m",
  RESET: "\x1B[0m"
};

// src/index.ts
var style = (styles, text) => {
  if (typeof styles === "string") {
    return `${ANSI[styles] || ANSI[styles]}${text}${ANSI.RESET}`;
  } else if (Array.isArray(styles)) {
    return styles.reduce((acc, style2) => {
      return `${acc}${ANSI[style2] || ANSI[style2]}`;
    }, "") + text + ANSI.RESET;
  }
  return text;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  style
});
