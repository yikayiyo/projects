export declare type SplitOn<
	Text extends string,
	On extends string
> = Text extends `${infer Head}${On}${infer Tail}`
	? [Head, ...SplitOn<Tail, On>]
	: [Text];
