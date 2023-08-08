import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
export type Character = {
	name: string;
	powers: string[];
	side: string;
};

export function announceCharacter(raw: string): Character {
	let character: Character = JSON.parse(raw);
	console.log(`I am ${character.name}.`);
	console.log(`My powers are: ${character.powers.join(", ")}.`);
	console.log(`I am ${character.side}.`);
	return character;
}
