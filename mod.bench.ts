import uniqueArray from "./mod.ts";
Deno.bench({
	name: "0",
	fn: () => {
		uniqueArray([
			{ foo: "bar" },
			{ foo: "bar" },
			{ bar: "gaz" }
		]);
	}
});
