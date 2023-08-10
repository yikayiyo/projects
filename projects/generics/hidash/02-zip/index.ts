// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export function zip<T, U>(a: T[], b: U[]) {
	let res: (T | U)[] = [];
	let minLength = Math.min(a.length, b.length);
	for (let i = 0; i < minLength; i++) {
		res.push(a[i], b[i]);
	}
	if (a.length > b.length) {
		res = res.concat(a.slice(minLength));
	} else {
		res = res.concat(b.slice(minLength));
	}
	return res;
}
