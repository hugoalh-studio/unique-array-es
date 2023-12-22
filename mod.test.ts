import { assertEquals } from "https://deno.land/std@0.210.0/assert/assert_equals.ts";
import { uniqueArray } from "./mod.ts";
Deno.test("Empty", { permissions: "none" }, () => {
	assertEquals(uniqueArray([]), []);
});
Deno.test("1 Unique 1 Duplicate", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [{ type: { id: "_ETGENUS" } }]);
});
Deno.test("2 Unique 1 Duplicate", { permissions: "none" }, () => {
	assertEquals(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("2 Unique 0 Duplicate", { permissions: "none" }, () => {
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
