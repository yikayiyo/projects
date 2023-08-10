// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: T[][]): T[] {
	let result: T[] = [];
	for (let arr of items) {
		for (let item of arr) {
			if (result.includes(item)) continue;
			result.push(item);
		}
	}
	return result;
}

function uniqueVerson2<T>(...items: T[][]) {
	let result = new Set<T>();
	for (let arr of items) {
		for (let item of arr) {
			result.add(item);
		}
	}
	return Array.from(result);
}
