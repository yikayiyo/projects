// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (character: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let target = "";
		for (let c of text) {
			target += cipher(c);
		}
		return target;
	};
}
