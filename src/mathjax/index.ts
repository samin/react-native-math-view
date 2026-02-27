//  fix https://github.com/mathjax/MathJax-src/issues/818
import { version } from 'mathjax-full/package.json';
//  @ts-ignore
(globalThis as any).PACKAGE_VERSION = version;

export * from './Config';
export * from './MathjaxFactory';
export { default } from './MathjaxFactory';