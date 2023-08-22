import { assertEquals } from "https://deno.land/std@0.199.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.199.0/assert/assert_throws.ts";
import uniqueArray from "./mod.ts";
Deno.test("Pass 1", () => {
	assertEquals(uniqueArray([]), []);
});
Deno.test("Pass 2", () => {
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("Pass 3", () => {
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [{ type: { id: "_ETGENUS" } }]);
});
Deno.test("Pass 4", () => {
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
Deno.test("Fail 1", () => {
	assertThrows(() => {
		uniqueArray(64);
	});
});
Deno.test("Fail 2", () => {
	assertThrows(() => {
		uniqueArray(64n);
	});
});
Deno.test("Fail 3", () => {
	assertThrows(() => {
		uniqueArray(false);
	});
});
Deno.test("Fail 4", () => {
	assertThrows(() => {
		uniqueArray(undefined);
	});
});
Deno.test("Fail 5", () => {
	assertThrows(() => {
		uniqueArray(null);
	});
});
Deno.test("Fail 6", () => {
	assertThrows(() => {
		uniqueArray({ foo: "bar" });
	});
});
