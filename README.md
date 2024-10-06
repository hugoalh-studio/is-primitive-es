# Is Primitive (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/is-primitive-es](https://img.shields.io/github/v/release/hugoalh-studio/is-primitive-es?label=hugoalh-studio/is-primitive-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/is-primitive-es")](https://github.com/hugoalh-studio/is-primitive-es)
[![JSR: @hugoalh/is-primitive](https://img.shields.io/jsr/v/@hugoalh/is-primitive?label=@hugoalh/is-primitive&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-primitive")](https://jsr.io/@hugoalh/is-primitive)
[![NPM: @hugoalh/is-primitive](https://img.shields.io/npm/v/@hugoalh/is-primitive?label=@hugoalh/is-primitive&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-primitive")](https://www.npmjs.com/package/@hugoalh/is-primitive)

An ES (JavaScript & TypeScript) module to determine whether the item is a primitive.

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh-studio/is-primitive-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/is-primitive[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/is-primitive[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Require Runtime Permissions

*This module does not require any runtime permission.*

## 🧩 APIs

- ```ts
  function isPrimitive(item: unknown): item is Primitive;
  ```
- ```ts
  type Primitive = bigint | boolean | number | string | symbol | null | undefined;
  ```

> [!NOTE]
> - For the prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
>   - [JSR](https://jsr.io/@hugoalh/is-primitive)

## ✍️ Examples

- ```ts
  isPrimitive({});
  //=> false
  ```
- ```ts
  isPrimitive(new Headers());
  //=> false
  ```
- ```ts
  isPrimitive(true);
  //=> true
  ```
- ```ts
  isPrimitive(123n);
  //=> true
  ```
