import { assertEquals } from "https://deno.land/std@0.198.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.198.0/assert/assert_throws.ts";
import uniqueArray from "./mod.ts";
Deno.test("PASS", () => {
	assertEquals(uniqueArray([]), []);
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [{ type: { id: "_ETGENUS" } }]);
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
Deno.test("THROW", () => {
	assertThrows(() => {
		uniqueArray(64);
	});
	assertThrows(() => {
		uniqueArray(64n);
	});
	assertThrows(() => {
		uniqueArray(false);
	});
	assertThrows(() => {
		uniqueArray(undefined);
	});
	assertThrows(() => {
		uniqueArray(null);
	});
	assertThrows(() => {
		uniqueArray({ foo: "bar" });
	});
});
