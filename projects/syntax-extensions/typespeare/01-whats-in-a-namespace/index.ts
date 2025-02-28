import { schemesInOrder } from "./poetry";
export function verifyProse(prose: string[]) {
	return schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
}
