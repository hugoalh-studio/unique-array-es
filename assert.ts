import { uniqueArray } from "./mod.ts";
/**
 * Determine whether the array is contain unique elements.
 * @param {unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayUnique(item: unknown[]): boolean {
	return (item.length === uniqueArray(item).length);
}
export default isArrayUnique;
