import { uniqueArray } from "./mod.ts";
Deno.bench("Empty", { permissions: "none" }, () => {
	uniqueArray([]);
});
Deno.bench("6 Elements 1 Uniques", { permissions: "none" }, () => {
	uniqueArray([{}, {}, {}, {}, {}, {}]);
});
Deno.bench("2 Elements 1 Uniques 1", { permissions: "none" }, () => {
	uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]);
});
Deno.bench("3 Elements 2 Uniques", { permissions: "none" }, () => {
	uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.bench("2 Elements 2 Uniques 1", { permissions: "none" }, () => {
	uniqueArray([
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
Deno.bench("2 Elements 2 Uniques 2", { permissions: "none" }, () => {
	uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2])
	]);
});
Deno.bench("2 Elements 1 Uniques 2", { permissions: "none" }, () => {
	uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2, 3])
	]);
});
