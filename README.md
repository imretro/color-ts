# @imretro/color

[![npm](https://img.shields.io/npm/v/@imretro/color)](https://www.npmjs.com/package/@imretro/color)
[![CI](https://github.com/imretro/color-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/imretro/color-ts/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/imretro/color-ts/branch/main/graph/badge.svg?token=TxSTqGZcPq)](https://codecov.io/gh/imretro/color-ts)

Color util library

This library provides some simple utilities for representing colors.

## Example

```typescript
import { Grayscale, RGBA } from '@imretro/color';

const black = new Grayscale(0);
console.log(black.r, black.g, black.b, black.a); // 0 0 0 255

const transparentGreen = new RGBA(0, 255, 0, 127);
console.log(transparentGreen.hex); // #00FF00
console.log(`${Math.round(transparentGreen.opacity * 100)}%`); // 50%
```
