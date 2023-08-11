// Refactor here! ✨

const favors = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(favors);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return favors.slice(0, max);
}

export function logFavoriteAnimals() {
	favors.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
