import { assertEquals } from "STD/assert/assert_equals.ts";
import { isPrimitive } from "./mod.ts";
Deno.test("False 1", { permissions: "none" }, () => {
	assertEquals(isPrimitive({}), false);
});
Deno.test("False 2", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Headers()), false);
});
Deno.test("True 1", { permissions: "none" }, () => {
	assertEquals(isPrimitive(true), true);
});
Deno.test("True 2", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123n), true);
});
