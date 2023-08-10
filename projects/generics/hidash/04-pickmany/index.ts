// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.
export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
	let res = [];
	for (let key of keys) {
		res.push(container[key]);
	}
	return res;
}
