import uniqueArray from "./mod.ts";
Deno.bench({
	name: "1",
	fn: () => {
		uniqueArray([
			{ foo: "bar" },
			{ foo: "bar" },
			{ bar: "gaz" }
		]);
	}
});
