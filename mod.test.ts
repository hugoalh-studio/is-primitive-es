import { assertEquals } from "STD/assert/assert_equals.ts";
import { isPrimitive } from "./mod.ts";
Deno.test("False Array", { permissions: "none" }, () => {
	assertEquals(isPrimitive([]), false);
});
Deno.test("False Header", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Headers()), false);
});
Deno.test("False Map", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Map()), false);
});
Deno.test("False Object", { permissions: "none" }, () => {
	assertEquals(isPrimitive({}), false);
});
Deno.test("False Set", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Set()), false);
});
Deno.test("True BigInt", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123n), true);
});
Deno.test("True Boolean", { permissions: "none" }, () => {
	assertEquals(isPrimitive(true), true);
});
Deno.test("True Number", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123.456), true);
});
Deno.test("True String", { permissions: "none" }, () => {
	assertEquals(isPrimitive("qwerty"), true);
});
Deno.test("True Symbol", { permissions: "none" }, () => {
	assertEquals(isPrimitive(Symbol("test")), true);
});
