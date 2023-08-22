import uniqueArray from "./mod.ts";
Deno.bench("Main", () => {
	uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
