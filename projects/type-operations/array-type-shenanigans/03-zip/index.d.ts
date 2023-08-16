export declare type Zip<T extends any[], U extends any[]> = T extends [
	infer F,
	...infer R
]
	? U extends [infer G, ...infer S]
		? [F, G, ...Zip<R, S>]
		: [F, ...R]
	: U extends [infer G, ...infer S]
	? [G, ...S]
	: [];
