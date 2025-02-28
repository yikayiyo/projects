// Write your Zip type here! ✨
// You'll need to export it so the tests can run it.
export type Zip<T extends any[], U extends any[]> = T extends [
	infer F,
	...infer R
]
	? U extends [infer G, ...infer S]
		? [F, G, ...Zip<R, S>]
		: [F, ...R]
	: U extends [infer G, ...infer S]
	? [G, ...S]
	: [];
