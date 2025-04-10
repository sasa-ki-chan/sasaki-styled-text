import { ANSI } from './modules/ANSI';

export const style = (
  styles: Styles | Array<Styles>,
  text: string,
) => {
  if (typeof styles === 'string') {
    return `${ANSI[styles] || ANSI[styles]}${text}${ANSI.RESET}`;
  } else if (Array.isArray(styles)) {
    return styles.reduce((acc, style) => {
      return `${acc}${ANSI[style] || ANSI[style]}`;
    }, '') + text + ANSI.RESET;
  }
  return text;
}

