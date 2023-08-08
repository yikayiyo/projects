// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
export type Landmark =
	| {
			type: "mountain";
			name: string;
			height: number;
	  }
	| {
			type: "park";
			name: string;
			acres: number;
	  }
	| {
			type: "lighthouse";
			name: string;
			height: number;
			lit: number;
	  }
	| {
			type: "lake";
			name: string;
			miles: number;
	  }
	| {
			type: "waterfall";
			name: string;
			height: number;
	  }
	| {
			type: "river";
			name: string;
			depth: number;
			length: number;
	  }
	| {
			type: "fort";
			name: string;
	  };

export function describeLandmark(landmark: Landmark): string {
	let result = `${landmark.name} is a ${landmark.type} in Upstate New York.`;
	let secondLine = "";
	switch (landmark.type) {
		case "fort":
			return result;
		case "lake":
			secondLine = `It covers ${landmark.miles} square miles of water.`;
			break;
		case "lighthouse":
			secondLine = `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "mountain":
			secondLine = `Its peak is ${landmark.height} feet high.`;
			break;
		case "park":
			secondLine = `It covers ${landmark.acres} square acres.`;
			break;
		case "river":
			secondLine = `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			secondLine = `It is ${landmark.height} feet high.`;
			break;
	}
	return result + "\n" + secondLine;
}
