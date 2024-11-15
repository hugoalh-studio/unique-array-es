import { deepStrictEqual } from "node:assert";
/**
 * Determine whether the items are deep strict equal.
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean} Determine result.
 */
function isEqual(a: unknown, b: unknown): boolean {
	try {
		deepStrictEqual(a, b);
		return true;
	} catch {
		return false;
	}
}
/**
 * Return unique array elements without any duplicated elements by ignore their reference points.
 * @template {unknown} T
 * @param {T[]} item Array that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 * @example
 * ```ts
 * uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
 * //=> [{ foo: "bar" }, { bar: "gaz" }]
 * ```
 */
export function uniqueArray<T>(item: T[]): T[] {
	const result: T[] = [];
	for (const itemElement of new Set<T>(item).values()) {
		if (
			result.length === 0 ||
			!result.some((resultElement: T): boolean => {
				return isEqual(itemElement, resultElement);
			})
		) {
			result.push(itemElement);
		}
	}
	return result;
}
export default uniqueArray;
