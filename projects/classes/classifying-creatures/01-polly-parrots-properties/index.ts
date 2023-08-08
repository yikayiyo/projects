// Write your Parrot class here! ✨
// You'll need to export it so the tests can run it.
export class Parrot {
	#name: string;
	#phrases: string[];
	constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${name} wants a cracker!`];
	}
	announce() {
		return `Squawk! I'm ${this.#name}!`;
	}
	learn(sth: string) {
		this.#phrases.push(sth);
	}
	speak() {
		return this.#phrases[Math.floor(Math.random() * this.#phrases.length)];
	}
}
