// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.
type Character = {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
};

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
} as const;

type Mutations = keyof typeof mutationsLibrary;

function createCharacter(name: string, mutations: Mutations[]) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

type Duel = {
	name: string;
	mutations: Mutations[];
};

export function duel(good: Duel, bad: Duel) {
	let goodC = createCharacter(good.name, good.mutations);
	let badC = createCharacter(bad.name, bad.mutations);
	let goodScore = goodC.power / badC.toughness;
	let badScore = badC.power / goodC.toughness;
	if (goodScore > badScore) {
		return ["hero", goodC] as const;
	} else {
		return ["villain", badC] as const;
	}
}
