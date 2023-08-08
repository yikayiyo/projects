// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
type Code = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};
export function createCodeCracker(code: Code) {
	return (text: string) => {
		const { attempts, makeGuess, validateGuess } = code;
		for (let i = 0; i < attempts; i++) {
			const res = makeGuess(text, i);
			if (validateGuess(res)) {
				return res;
			}
		}
		return;
	};
}
