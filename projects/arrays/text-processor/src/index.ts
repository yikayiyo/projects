// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};
export function alignTexts(
	texts: string[],
	{ align = "left", width }: AlignmentOptions
): string[][] {
	let res: string[][] = [];
	for (let text of texts) {
		const lines = splitLines(text, width);
		const aligned = alignLines(lines, { align, width });
		res.push(aligned);
	}
	return res;
}

function splitLines(text: string, width: number) {
	const lines: string[] = [];
	let line = "";

	for (const word of text.split(" ")) {
		if (line === "") {
			line = word;
		} else if (line.length + word.length < width) {
			line += ` ${word}`;
		} else {
			lines.push(line);
			line = word;
		}
	}

	lines.push(line);

	return lines;
}

function alignLines(
	lines: string[],
	{ align = "left", width }: AlignmentOptions
) {
	const aligned: string[] = [];

	for (const line of lines) {
		const remainingSpaces = width - line.length;
		let newLine = line;

		if (remainingSpaces) {
			switch (align) {
				case "left":
					for (let i = 0; i < remainingSpaces; i += 1) {
						newLine += " ";
					}
					break;

				case "middle":
					for (let i = 0; i < Math.ceil(remainingSpaces / 2); i += 1) {
						newLine += " ";
					}

					for (let i = 0; i < Math.floor(remainingSpaces / 2); i += 1) {
						newLine = " " + newLine;
					}

					break;

				case "right":
					for (let i = 0; i < remainingSpaces; i += 1) {
						newLine = " " + newLine;
					}
					break;
			}
		}

		aligned.push(newLine);
	}

	return aligned;
}
