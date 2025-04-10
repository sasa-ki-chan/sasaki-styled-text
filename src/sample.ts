import { style } from './index';

console.log(style('bold', 'Hello World!'));
console.log(style(['bold', 'blue'], '[info]: ') + 'some info message');
console.log(style(['bold', 'white', 'bgRed'], 'Some Error:') + ' ' + style('bold', 'Error!'));