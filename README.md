# Unique Array (Deno)

[![License](https://img.shields.io/badge/License-MIT-808080?style=flat-square "License")](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/unique-array-deno) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/unique-array-deno?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/unique-array-deno/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/unique-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |

A Deno module to return unique array elements without any duplicated elements by ignore their reference points.

> **🔗 Other Edition:**
>
> - [NodeJS](https://github.com/hugoalh-studio/unique-array-nodejs)

## 📓 Documentation

### Getting Started

- Deno >= v1.34.0

```ts
import uniqueArray from "<URL>";// Default Import
```

| **Domain / Registry** | **URL** |
|:-:|:--|
| [Deno Land](https://deno.land/x/unique_array) | `https://deno.land/x/unique_array[@<Tag>]/mod.ts` |
| DenoPKG | `https://denopkg.com/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts` |
| GitHub Raw **\*** | `https://raw.githubusercontent.com/hugoalh-studio/unique-array-deno/<Tag>/mod.ts` |
| Pax | `https://pax.deno.dev/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts` |

**\*:** Must provide a tag.

### API

```ts
function uniqueArray<T>(item: T[]): T[];
```

### Example

- ```ts
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
