// Write your classes here! ✨
// You'll need to export them so the tests can run them.
export interface ConsumedHorror {
	evil: boolean;
	name: string;
	power: number;
}
export abstract class Horror {
	abstract readonly name: string;
	#consumed: ConsumedHorror[] = [];
	protected abstract getPowerFrom(opponent: ConsumedHorror): number;
	protected abstract isEvil(): boolean;

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror): void {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower() {
		let res = 0;
		this.#consumed.forEach((item) => (res += this.getPowerFrom(item)));
		res += this.#consumed.length;
		return res;
	}
}

export class Demon extends Horror {
	readonly name = "Demon";

	protected getPowerFrom(opponent: ConsumedHorror): number {
		if (opponent.evil) {
			return opponent.power / 2;
		} else {
			return opponent.power * 2;
		}
	}
	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;
	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}
	getPowerFrom(opponent: ConsumedHorror) {
		if (this.#evil === opponent.evil) {
			return 2 * opponent.power;
		} else {
			return opponent.power;
		}
	}
	protected isEvil(): boolean {
		return this.#evil;
	}
}
