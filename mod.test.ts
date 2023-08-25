import { assertEquals } from "https://deno.land/std@0.200.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.200.0/assert/assert_throws.ts";
import uniqueArray from "./mod.ts";
Deno.test("Equal 1", () => {
	assertEquals(uniqueArray([]), []);
});
Deno.test("Equal 2", () => {
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("Equal 3", () => {
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [{ type: { id: "_ETGENUS" } }]);
});
Deno.test("Equal 4", () => {
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
Deno.test("Throw 1", () => {
	assertThrows(() => {
		uniqueArray(64);
	});
});
Deno.test("Throw 2", () => {
	assertThrows(() => {
		uniqueArray(64n);
	});
});
Deno.test("Throw 3", () => {
	assertThrows(() => {
		uniqueArray(false);
	});
});
Deno.test("Throw 4", () => {
	assertThrows(() => {
		uniqueArray(undefined);
	});
});
Deno.test("Throw 5", () => {
	assertThrows(() => {
		uniqueArray(null);
	});
});
Deno.test("Throw 6", () => {
	assertThrows(() => {
		uniqueArray({ foo: "bar" });
	});
});
