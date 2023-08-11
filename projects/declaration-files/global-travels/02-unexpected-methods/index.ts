// Write your types here! ✨
declare global {
	interface String {
		alternating: () => string;
		unsmoosh: () => [string, string];
	}
	interface Array<T> {
		smoosh: () => T;
	}
}
export function logMessage(): string {
	const encodedMessage =
		"wjheiwcehljearv'assfcarvioprtiptrei?msitt-irvienigssa!";

	const alternating = encodedMessage.alternating();
	const [question, answer] = alternating.unsmoosh();

	console.log(question);
	console.log(` - ${answer}`);

	return [question, answer].smoosh();
}
