// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPuncuation: Cipher
) {
	return (text: string) => {
		let target = "";
		for (const character of text) {
			if (character.match(/[aeiou]/i)) {
				target += onVowel(character);
			} else if (character.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
				target += onConsonant(character);
			} else {
				target += onPuncuation(character);
			}
		}
		return target;
	};
}
