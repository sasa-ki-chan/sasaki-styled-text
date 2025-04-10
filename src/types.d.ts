declare type Styles = 
'bold' | 'dim' | 'italic' | 'blink' | 'underline' | 'inverse' | 'hidden' | 'strikethrough'  //style
| 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'gray' //color
| 'bgBlack' | 'bgGray' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray' //bgColot

| 'RESET';

declare type ANSITypes = {
  [key in Styles]: string;
} 