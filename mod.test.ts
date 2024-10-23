import { assertEquals } from "STD/assert/equals";
import { isPrimitive } from "./mod.ts";
Deno.test("Array", { permissions: "none" }, () => {
	assertEquals(isPrimitive([]), false);
});
Deno.test("Big Integer", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123n), true);
});
Deno.test("Boolean", { permissions: "none" }, () => {
	assertEquals(isPrimitive(true), true);
});
Deno.test("Headers", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Headers()), false);
});
Deno.test("Map", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Map()), false);
});
Deno.test("Number", { permissions: "none" }, () => {
	assertEquals(isPrimitive(123.456), true);
});
Deno.test("Plain Object", { permissions: "none" }, () => {
	assertEquals(isPrimitive({}), false);
});
Deno.test("Set", { permissions: "none" }, () => {
	assertEquals(isPrimitive(new Set()), false);
});
Deno.test("String", { permissions: "none" }, () => {
	assertEquals(isPrimitive("qwerty"), true);
});
Deno.test("Symbol", { permissions: "none" }, () => {
	assertEquals(isPrimitive(Symbol("test")), true);
});
