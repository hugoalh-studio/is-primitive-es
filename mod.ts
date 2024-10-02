/**
 * Type of the primitive.
 */
export type Primitive = bigint | boolean | number | string | symbol | null | undefined;
/**
 * Determine whether the item is a primitive.
 * @param {unknown} item Item that need to determine.
 * @returns {item is Primitive} Determine result.
 * @example Example 1
 * ```ts
 * isPrimitive({});
 * //=> false
 * ```
 * @example Example 2
 * ```ts
 * isPrimitive(new Headers());
 * //=> false
 * ```
 * @example Example 3
 * ```ts
 * isPrimitive(true);
 * //=> true
 * ```
 * @example Example 4
 * ```ts
 * isPrimitive(123n);
 * //=> true
 * ```
 */
export function isPrimitive(item: unknown): item is Primitive {
	switch (typeof item) {
		case "bigint":
		case "boolean":
		case "number":
		case "string":
		case "symbol":
		case "undefined":
			return true;
		case "object":
			return (item === null);
		default:
			return false;
	}
}
export default isPrimitive;
