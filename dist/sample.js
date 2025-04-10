"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.style)('bold', 'Hello World!'));
console.log((0, index_1.style)(['bold', 'blue'], '[info]: ') + 'some info message');
console.log((0, index_1.style)(['bold', 'white', 'bgRed'], 'Some Error:') + ' ' + (0, index_1.style)('bold', 'Error!'));
//# sourceMappingURL=sample.js.map