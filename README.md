# Unique Array (Deno)

![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Repository](https://img.shields.io/badge/Repository-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub Repository")](https://github.com/hugoalh-studio/unique-array-deno)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/unique-array-deno?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/unique-array-deno/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/unique-array-deno?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/unique-array-deno/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/unique-array-deno?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/unique-array-deno/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/unique-array-deno?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/unique-array-deno/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/unique-array-deno?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/unique-array-deno/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/unique-array-deno?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/unique-array-deno)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/unique-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/unique-array-deno/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/unique-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/unique-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |

## 📝 Description

A Deno module to return unique array elements without any duplicated elements by ignore their reference points.

> **🔗 Other Edition:**
>
> - [NodeJS](https://github.com/hugoalh-studio/unique-array-nodejs)

## 📚 Documentation

### Getting Started

- Deno >= v1.34.0

```ts
import uniqueArray from "<URL>";// Default Import
```

| **Domain / Registry** | **URL** |
|:-:|:--|
| [Deno Land](https://deno.land/x/unique_array) | `https://deno.land/x/unique_array[@<Tag>]/mod.ts` |
| DenoPKG | `https://denopkg.com/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts` |
| GitHub Raw | `https://raw.githubusercontent.com/hugoalh-studio/unique-array-deno/<Tag>/mod.ts` |
| Nest Land | *Todo* |
| Pax | `https://pax.deno.dev/hugoalh-studio/unique-array-deno[@<Tag>]/mod.ts` |

> **⚠ Important:**
>
> - These domains/registries are not well supported to import this package:
>   - ESM>CDN (https://esm.sh)
>   - jsDelivr (https://cdn.jsdelivr.net)
>   - JSPM (https://dev.jspm.io)
>   - Skypack (https://cdn.pika.dev, https://cdn.skypack.dev)
>   - UNPKG (https://unpkg.com)
> - Using domain/registry GitHub Raw must provide a tag; For alternative, use domain/registry Pax.

### API

#### Function

```ts
uniqueArray<T>(item: T[]): T[];
```

### Example

```js
uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
//=> [{ foo: "bar" }, { bar: "gaz" }]
```
