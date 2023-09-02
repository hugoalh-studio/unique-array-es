import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
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
