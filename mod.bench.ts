import uniqueArray from "./mod.ts";
Deno.bench({
	name: "main",
	fn: () => {
		uniqueArray([
			{ foo: "bar" },
			{ foo: "bar" },
			{ bar: "gaz" },
			{ bar: "gaz" }
		]);
	}
});
