import { equal } from "https://deno.land/std@0.222.1/assert/equal.ts";
/**
 * Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {unknown} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 * @example
 * uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
 * //=> [{ foo: "bar" }, { bar: "gaz" }]
 */
export function uniqueArray<T>(item: T[]): T[] {
	const result: T[] = [];
	for (const itemElement of new Set<T>(item).values()) {
		if (
			result.length === 0 ||
			!result.some((resultElement: T): boolean => {
				return equal(itemElement, resultElement);
			})
		) {
			result.push(itemElement);
		}
	}
	return result;
}
export default uniqueArray;
