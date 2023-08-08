// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.
export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};
export type Cleaner = (dirt: number, timer?: number) => number;
export type Supplier = (expense: number) => Stock;
export type Recipe = (
	obj: Stock
) => { succeeded: false } | { succeeded: true; newStock: Stock };

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	let kitchen = {
		announce: () => {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean: (time?: number) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense: number) => {
			if (expense <= budget) {
				let { breads, fruits, sauces, vegetables } = supplier(expense);
				budget -= expense;
				stock.breads += breads;
				stock.fruits += fruits;
				stock.sauces += sauces;
				stock.vegetables += vegetables;
				return true;
			} else {
				return false;
			}
		},
		prepare: (recipe: Recipe) => {
			if (dirt >= 100) {
				return false;
			}
			const result = recipe(stock);
			dirt += 1;
			if (result.succeeded) {
				stock = result.newStock;
			}
			return result.succeeded;
		},
	};
	return kitchen;
}
