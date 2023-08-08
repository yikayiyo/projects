// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.
function shallowEquality(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

export function deepEquality(a: string[][], b: string[][]) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		let tmp1 = a[i];
		let tmp2 = b[i];
		if (!shallowEquality(tmp1, tmp2)) return false;
	}
	return true;
}
