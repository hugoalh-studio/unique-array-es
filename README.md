# Unique Array (ES)

[**⚖️** MIT](./LICENSE.md)

[![Deno Land: unique_array](https://img.shields.io/badge/dynamic/json?label=unique_array&labelColor=000000&logo=deno&logoColor=ffffff&style=flat&url=https%3A%2F%2Fapiland.deno.dev%2Fv2%2Fmodules%2Funique_array&query=%24.latest_version "Deno Land: unique_array")](https://deno.land/x/unique_array)
[![GitHub: hugoalh-studio/unique-array-es](https://img.shields.io/github/v/release/hugoalh-studio/unique-array-es?label=hugoalh-studio/unique-array-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/unique-array-es")](https://github.com/hugoalh-studio/unique-array-es)
[![JSR: @hugoalh/unique-array](https://img.shields.io/jsr/v/@hugoalh/unique-array?label=JSR%20@hugoalh/unique-array&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/unique-array")](https://jsr.io/@hugoalh/unique-array)
[![NPM: @hugoalh/unique-array](https://img.shields.io/npm/v/@hugoalh/unique-array?label=@hugoalh/unique-array&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/unique-array")](https://www.npmjs.com/package/@hugoalh/unique-array)

An ES (JavaScript & TypeScript) module to return unique array elements without any duplicated elements by ignore their reference points.

## 🎯 Target

- Bun >= v1.1.0
- Cloudflare Workers
- Deno >= v1.42.0
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/unique-array[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/unique-array[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/unique-array[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/unique-array[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/unique-array";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/unique-array[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/unique-array[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/unique-array[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/unique-array[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/unique-array";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/unique-array[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script via:
    - Deno Land
      ```ts
      import ... from "https://deno.land/x/unique_array[@${Tag}]/mod.ts";
      ```
    - GitHub Raw (Require Tag)
      ```ts
      import ... from "https://raw.githubusercontent.com/hugoalh-studio/unique-array-es/${Tag}/mod.ts";
      ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.
> - It is recommended to import the module with tag for immutability.

## 🧩 API

- ```ts
  function uniqueArray<T>(item: T[]): T[];
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [Deno Land](https://deno.land/x/unique_array)
> - [JSR](https://jsr.io/@hugoalh/unique-array)

## ✍️ Example

- ```ts
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
