<!-- omit in toc -->
# axis-overlay

[![axis-overlay](https://github.com/FantasticFiasco/axis-js/actions/workflows/axis-maintenance.yml/badge.svg)](https://github.com/FantasticFiasco/axis-js/actions/workflows/axis-maintenance.yml)
[![npm version](https://img.shields.io/npm/v/axis-maintenance.svg)](https://www.npmjs.com/package/axis-maintenance)
[![SemVer compatible](https://img.shields.io/badge/%E2%9C%85-SemVer%20compatible-blue)](https://semver.org/)

A Node.js library written in TypeScript capable of running maintenance operations on cameras from [Axis Communication](http://www.axis.com).

<!-- omit in toc -->
## Table of contents

- [Super simple to use](#super-simple-to-use)
- [Installation](#installation)
- [API](#api)
  - [`Overlay`](#overlay)

---

## Super simple to use

```typescript
const connection = new Connection(Protocol.Http, '192.168.1.102', 80, 'root', '32naJzkJdZ!7*HK&Dz');
const overlay = new Overlay(connection);

// Get the current text of the Dynamic Text Overlay
const text = await overlay.getDynamicTextOverlay();

// Set the text of the Dynamic Text Overlay
await overlay.setDynamicTextOverlay('Hello World');
```

## Installation

```sh
npm install axis-overlay
# or
yarn add axis-overlay
```

## API

### `Overlay`

The `Overlay` class is the main class in the package. With it, you can run
overlay operations on a camera. Currently, only [Dynamic Text
Overlay](https://www.axis.com/vapix-library/subjects/t10175981/section/t10007638/display?section=t10007638-t10003585)
operations are supported.
