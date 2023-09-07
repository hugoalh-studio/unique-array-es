# Unique Array (Deno)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/unique-array-deno?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/unique-array-deno)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/unique-array-deno) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/unique-array-deno?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/unique-array-deno/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/unique-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |

A Deno module to return unique array elements without any duplicated elements by ignore their reference points.

> **🔗 Other Edition:**
>
> - [NodeJS](https://github.com/hugoalh-studio/unique-array-nodejs)

## 🎯 Target

- Deno >= v1.34.0

## 📥 Import

> **ℹ️ Notice:** Although it is recommended to import with default module path `mod.ts` in general, it is also able to import with submodule path (if available), but do not import that submodule if either:
>
> - It's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`).
> - It is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`).
> - It's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
> These elements are not considered part of the public API, thus no stability is guaranteed for them.

- **[Deno Land](https://deno.land/x/unique_array):**
  ```
  https://deno.land/x/unique_array[@<Tag>]/mod.ts
  ```
- **DenoPKG:**
  ```
  https://denopkg.com/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts
  ```
- **GitHub Raw *\[Require Tag\]*:**
  ```
  https://raw.githubusercontent.com/hugoalh-studio/unique-array-deno/<Tag>/mod.ts
  ```
- **Pax:**
  ```
  https://pax.deno.dev/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts
  ```

## API

- ```ts
  function uniqueArray<T>(item: T[]): T[];
  ```

### Example

- ```ts
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
