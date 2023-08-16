export declare type WordReplace<
	Text extends string,
	Original extends string,
	Replacement extends string
> = Text extends `${infer Prefix}${Original}${infer Suffix}`
	? `${Prefix}${Replacement}${WordReplace<Suffix, Original, Replacement>}`
	: Text;
