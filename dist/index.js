var n = Object.defineProperty; var i = Object.getOwnPropertyDescriptor; var g = Object.getOwnPropertyNames; var o = Object.prototype.hasOwnProperty; var a = (b, m) => { for (var r in m) n(b, r, { get: m[r], enumerable: !0 }); }, y = (b, m, r, x) => { if (m && typeof m == "object" || typeof m == "function") for (let t of g(m)) !o.call(b, t) && t !== r && n(b, t, { get: () => m[t], enumerable: !(x = i(m, t)) || x.enumerable }); return b; }; var l = b => y(n({}, "__esModule", { value: !0 }), b); var S = {}; a(S, { style: () => p }); module.exports = l(S); var e = { bold: "\x1B[1m", dim: "\x1B[2m", italic: "\x1B[3m", underline: "\x1B[4m", blink: "\x1B[5m", inverse: "\x1B[7m", hidden: "\x1B[8m", strikethrough: "\x1B[9m", black: "\x1B[30m", gray: "\x1B[90m", red: "\x1B[31m", green: "\x1B[32m", yellow: "\x1B[33m", blue: "\x1B[34m", magenta: "\x1B[35m", cyan: "\x1B[36m", white: "\x1B[37m", bgBlack: "\x1B[40m", bgGray: "\x1B[100m", bgRed: "\x1B[41m", bgGreen: "\x1B[42m", bgYellow: "\x1B[43m", bgBlue: "\x1B[44m", bgMagenta: "\x1B[45m", bgCyan: "\x1B[46m", bgWhite: "\x1B[47m", RESET: "\x1B[0m" }; var p = (b, m) => typeof b == "string" ? `${e[b] || e[b]}${m}${e.RESET}` : Array.isArray(b) ? b.reduce((r, x) => `${r}${e[x] || e[x]}`, "") + m + e.RESET : m; 0 && (module.exports = { style });
