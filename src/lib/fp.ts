export const compose = (...fns: Function[]) =>
	fns.reduce((f, g) => (...args: any) => f(g(...args)));

export const pipe = (...fns: Function[]) => compose(...fns.reverse());

export const map = (fn: any) => (x: Array<any>) => x.map(fn);
