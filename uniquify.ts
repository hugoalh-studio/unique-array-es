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
 * @param {readonly (readonly T[])[]} items Arrays that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 * @example
 * ```ts
 * uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
 * //=> [{ foo: "bar" }, { bar: "gaz" }]
 * ```
 */
export function uniqueArray<T>(...items: readonly (readonly T[])[]): T[] {
	const result: T[] = [];
	for (const itemElement of new Set<T>(items.flat()).values()) {
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
