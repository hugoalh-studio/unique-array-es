import uniqueArray from "./mod.ts";
Deno.bench("Empty", () => {
	uniqueArray([]);
});
Deno.bench("1 Unique 1 Duplicate", () => {
	uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]);
});
Deno.bench("2 Unique 1 Duplicate", () => {
	uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.bench("2 Unique 0 Duplicate", () => {
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
		},
	]);
});
