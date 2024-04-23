import { isPrimitive } from "./mod.ts";
Deno.bench("False 1", { permissions: "none" }, () => {
	isPrimitive([]);
});
Deno.bench("False 2", { permissions: "none" }, () => {
	isPrimitive(new Headers());
});
Deno.bench("False 3", { permissions: "none" }, () => {
	isPrimitive(new Map());
});
Deno.bench("False 4", { permissions: "none" }, () => {
	isPrimitive({});
});
Deno.bench("False 5", { permissions: "none" }, () => {
	isPrimitive(new Set());
});
Deno.bench("True 1", { permissions: "none" }, () => {
	isPrimitive(123n);
});
Deno.bench("True 2", { permissions: "none" }, () => {
	isPrimitive(true);
});
Deno.bench("True 3", { permissions: "none" }, () => {
	isPrimitive(123.456);
});
Deno.bench("True 4", { permissions: "none" }, () => {
	isPrimitive("qwerty");
});
Deno.bench("True 5", { permissions: "none" }, () => {
	isPrimitive(Symbol("test"));
});
