import { assertEquals } from "https://deno.land/std@0.198.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.198.0/assert/assert_throws.ts";
import uniqueArray from "./mod.ts";
Deno.test("0", () => {
	assertEquals(uniqueArray([]), []);
});
Deno.test("1", () => {
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("2", () => {
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [{ type: { id: "_ETGENUS" } }]);
});
Deno.test("3", () => {
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
		},
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
		},
	]);
});
Deno.test("4", () => {
	assertThrows(() => {
		uniqueArray(64);
	});
});
Deno.test("5", () => {
	assertThrows(() => {
		uniqueArray(64n);
	});
});
Deno.test("6", () => {
	assertThrows(() => {
		uniqueArray(false);
	});
});
Deno.test("7", () => {
	assertThrows(() => {
		uniqueArray(undefined);
	});
});
Deno.test("8", () => {
	assertThrows(() => {
		uniqueArray(null);
	});
});
Deno.test("9", () => {
	assertThrows(() => {
		uniqueArray({ foo: "bar" });
	});
});
