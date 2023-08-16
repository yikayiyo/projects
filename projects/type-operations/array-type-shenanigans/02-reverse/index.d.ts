export declare type Reverse<T extends any[]> = T extends [any, ...infer Rest]
	? [...Reverse<Rest>, T[0]]
	: T;
