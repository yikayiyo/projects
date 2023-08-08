// Write your types and function below! ✨
// You'll need to export them so the tests can run it.

const artifacts = {
	"Black Garnet": {
		type: "magic",
	},
	"Castle TypeScript": {
		type: "fortress",
	},
	"Cosmic Key": {
		type: "device",
	},
	"Power Sword": {
		type: "sword",
	},
	Starseed: {
		type: "magic",
	},
	"Sword of the Ancients": {
		type: "sword",
	},
};

export type PossibleType = "magic" | "fortress" | "device" | "sword";

export type ArtifactName =
	| "Black Garnet"
	| "Castle TypeScript"
	| "Cosmic Key"
	| "Power Sword"
	| "Starseed"
	| "Sword of the Ancients";

export function getArtifactType(artifactName: ArtifactName) {
	return artifacts[artifactName].type as PossibleType;
}
