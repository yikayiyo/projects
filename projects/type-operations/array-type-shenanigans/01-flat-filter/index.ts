// Write your FilteredArrayItems type here! ✨
// You'll need to export it so the tests can run it.
export type FilteredArrayItems<T, Filter> = T extends (infer Item)[]
	? FilteredArrayItems<Item, Filter>
	: T extends Filter
	? T
	: never;
