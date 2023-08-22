import { assertEquals } from "https://deno.land/std@0.199.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.199.0/assert/assert_throws.ts";
import uniqueArray from "./mod.ts";
Deno.test({
	name: "P-1",
	fn: () => {
		assertEquals(uniqueArray([]), []);
	}
});
Deno.test({
	name: "P-2",
	fn: () => {
		assertEquals(uniqueArray([
			{ foo: "bar" },
			{ foo: "bar" },
			{ bar: "gaz" },
			{ bar: "gaz" }
		]), [
			{ foo: "bar" },
			{ bar: "gaz" }
		]);
	}
});
Deno.test({
	name: "P-3",
	fn: () => {
		assertEquals(uniqueArray([
			{ type: { id: "_ETGENUS" } },
			{ type: { id: "_ETGENUS" } }
		]), [{ type: { id: "_ETGENUS" } }]);
	}
});
Deno.test({
	name: "P-4",
	fn: () => {
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
	}
});
Deno.test({
	name: "F-1",
	fn: () => {
		assertThrows(() => {
			uniqueArray(64);
		});
	}
});
Deno.test({
	name: "F-2",
	fn: () => {
		assertThrows(() => {
			uniqueArray(64n);
		});
	}
});
Deno.test({
	name: "F-3",
	fn: () => {
		assertThrows(() => {
			uniqueArray(false);
		});
	}
});
Deno.test({
	name: "F-4",
	fn: () => {
		assertThrows(() => {
			uniqueArray(undefined);
		});
	}
});
Deno.test({
	name: "F-5",
	fn: () => {
		assertThrows(() => {
			uniqueArray(null);
		});
	}
});
Deno.test({
	name: "F-6",
	fn: () => {
		assertThrows(() => {
			uniqueArray({ foo: "bar" });
		});
	}
});
