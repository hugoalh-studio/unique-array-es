import { uniqueArray } from "./mod.ts";
Deno.bench("Empty", { permissions: "none" }, () => {
	uniqueArray([]);
});
Deno.bench("Case 1", { permissions: "none" }, () => {
	uniqueArray([{}, {}, {}, {}, {}, {}]);
});
Deno.bench("Case 2", { permissions: "none" }, () => {
	uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]);
});
Deno.bench("Case 3", { permissions: "none" }, () => {
	uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.bench("Case 4", { permissions: "none" }, () => {
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
Deno.bench("Case 5", { permissions: "none" }, () => {
	uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2])
	]);
});
Deno.bench("Case 6", { permissions: "none" }, () => {
	uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2, 3])
	]);
});
