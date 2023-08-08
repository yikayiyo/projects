// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) return undefined;
	let res = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			res.push(undefined);
		} else {
			let tmp = [];
			for (let j = 0; j < a[i].length; j++) {
				if (a[i][j] !== b[i][j]) tmp.push(undefined);
				else tmp.push(a[i][j]);
			}
			res.push(tmp);
		}
	}
	return res;
}
