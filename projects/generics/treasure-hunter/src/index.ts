// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.
export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (datum: Content) => datum is Fake,
	isReal: (datum: Content) => datum is Real
) {
	let real: Real[] = [];
	let fake: Fake[] = [];
	let scrap: Content[] = [];

	function helper(item: typeof buried) {
		const res = collectTreasure(item, isFake, isReal);
		fake.push(...res.fake);
		real.push(...res.real);
		scrap.push(...res.scrap);
	}

	if (Array.isArray(buried)) {
		for (const item of buried) {
			helper(item);
		}
	} else {
		switch (buried.type) {
			case "catacomb":
				helper(buried.inside);
				break;
			case "tunnels":
				buried.entrances.forEach(helper);
				break;
			case "treasure":
				if (isFake(buried.content)) {
					fake.push(buried.content);
				} else if (isReal(buried.content)) {
					real.push(buried.content);
				} else {
					scrap.push(buried.content);
				}
				break;
		}
	}
	return {
		real,
		fake,
		scrap,
	};
}

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export type Catacomb<T> = {
	type: "catacomb";
	inside: Buried<T>;
};
export type TunnelSystem<T> = {
	type: "tunnels";
	entrances: Buried<T>[];
};

export type Treasure<T> = {
	type: "treasure";
	content: T;
};
