import { assertEquals } from "STD/assert/assert_equals.ts";
import { isPrimitive } from "./mod.ts";
Deno.test("False 1", { permissions: "none" }, () => {
	assertEquals(isPrimitive([]), false);
});
Deno.test("False 2", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Headers()), false);
});
Deno.test("False 3", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Map()), false);
});
Deno.test("False 4", { permissions: "none" }, () => {
	assertEquals(isPrimitive({}), false);
});
Deno.test("False 5", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Set()), false);
});
Deno.test("True 1", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123n), true);
});
Deno.test("True 2", { permissions: "none" }, () => {
	assertEquals(isPrimitive(true), true);
});
Deno.test("True 3", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123.456), true);
});
Deno.test("True 4", { permissions: "none" }, () => {
	assertEquals(isPrimitive("qwerty"), true);
});
Deno.test("True 5", { permissions: "none" }, () => {
	assertEquals(isPrimitive(Symbol("test")), true);
});
