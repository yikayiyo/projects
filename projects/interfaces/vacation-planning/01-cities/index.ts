// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
export interface City {
	coordinates: {
		north: number[];
		west: number[];
	};
	name: string;
	catchphrase?: string;
}

export function describeCity(city: City) {
	let res = `${city.name}, New York`;
	if (city.catchphrase) {
		res += `\n* "${city.catchphrase}"`;
	}
	res += `\n* Located at ${describeUnit(
		city.coordinates.north[0]
	)}°${describeUnit(city.coordinates.north[1])}'${describeUnit(
		city.coordinates.north[2]
	)}"N ${describeUnit(city.coordinates.west[0])}°${describeUnit(
		city.coordinates.west[1]
	)}'${describeUnit(city.coordinates.west[2])}"W`;
	return res;
}

function describeUnit(unit: number) {
	return unit.toString().padStart(2, "0");
}
