// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
export type Restaurant = {
	city: string;
	name: string;
};

export type groupRestaurants = {
	[key: string]: string[];
};

export function groupRestaurants(restaurants: Restaurant[]): groupRestaurants {
	let target: groupRestaurants = {};
	for (let res of restaurants) {
		if (target[res.city]) {
			target[res.city].push(res.name);
		} else {
			target[res.city] = [res.name];
		}
	}
	return target;
}
