// setup colors in console
import 'colors';

export function log(typeColor: string, ...contents: any[]): void {
  console.log('[NestGram]'[typeColor], ...contents);
}

export function success(...contents: any[]): void {
  log('green', ...contents);
}

export function error(...texts: string[]): Error {
  return new Error(
    '[NestGram]'.bgRed + ' ' + texts.map((text: string): string => text.red).join(' '),
  );
}
