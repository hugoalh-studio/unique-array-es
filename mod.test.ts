import { assertEquals } from "STD/assert/assert-equals";
import { uniqueArray } from "./mod.ts";
Deno.test("Empty", { permissions: "none" }, () => {
	assertEquals(uniqueArray([]), []);
});
Deno.test("6 Elements 1 Uniques", { permissions: "none" }, () => {
	assertEquals(uniqueArray([{}, {}, {}, {}, {}, {}]), [{}]);
});
Deno.test("2 Elements 1 Uniques 1", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [
		{ type: { id: "_ETGENUS" } }
	]);
});
Deno.test("3 Elements 2 Uniques", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("2 Elements 2 Uniques 1", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		{
			id: "_1p7ZED73OF98VbT1SzSkjn",
			type: { id: "_ETGENUS" },
			name: "Thuja",
			friendlyId: "g-thuja",
		},
		{
			id: "_567qzghxZmeQ9pw3q09bd3",
			type: { id: "_ETGENUS" },
			name: "Pinus",
			friendlyId: "g-pinus",
		}
	]), [
		{
			id: "_1p7ZED73OF98VbT1SzSkjn",
			type: { id: "_ETGENUS" },
			name: "Thuja",
			friendlyId: "g-thuja",
		},
		{
			id: "_567qzghxZmeQ9pw3q09bd3",
			type: { id: "_ETGENUS" },
			name: "Pinus",
			friendlyId: "g-pinus",
		}
	]);
});
Deno.test("2 Elements 2 Uniques 2", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2])
	]), [
		new Set([1, 2, 3]),
		new Set([1, 2])
	]);
});
Deno.test("2 Elements 1 Uniques 2", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2, 3])
	]), [
		new Set([1, 2, 3])
	]);
});
