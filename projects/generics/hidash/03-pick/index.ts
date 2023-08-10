// Write your pick function here! ✨
// You'll need to export it so the tests can run it.
export function pick<Obj, Key extends keyof Obj>(container: Obj, key: Key) {
	return container[key];
}
