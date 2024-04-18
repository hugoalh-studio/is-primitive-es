import { isPrimitive } from "./mod.ts";
Deno.bench("False Array", { permissions: "none" }, () => {
	isPrimitive([]);
});
Deno.bench("False Header", { permissions: "none" }, () => {
	isPrimitive(new Headers());
});
Deno.bench("False Map", { permissions: "none" }, () => {
	isPrimitive(new Map());
});
Deno.bench("False Object", { permissions: "none" }, () => {
	isPrimitive({});
});
Deno.bench("False Set", { permissions: "none" }, () => {
	isPrimitive(new Set());
});
Deno.bench("True BigInt", { permissions: "none" }, () => {
	isPrimitive(123n);
});
Deno.bench("True Boolean", { permissions: "none" }, () => {
	isPrimitive(true);
});
Deno.bench("True Number", { permissions: "none" }, () => {
	isPrimitive(123.456);
});
Deno.bench("True String", { permissions: "none" }, () => {
	isPrimitive("qwerty");
});
Deno.bench("True Symbol", { permissions: "none" }, () => {
	isPrimitive(Symbol("test"));
});
