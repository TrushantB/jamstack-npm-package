# jamstack-npm-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

This repo is the example of the article ["How to create and publish React Typescript npm package with demo and automated build"](https://medium.com/@iTrushant/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca).

You can clone it and step by step create your own NPM package and publish it.

It is simple React counter.

[**Live Demo**](https://trushantb.github.io/jamstack-npm-package/)

## Installation:

```bash
npm install jamstack-npm-package --save-dev
```

or

```bash
yarn add -D jamstack-npm-package
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'jamstack-npm-package'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/jamstack-npm-package
[npm-image]: https://img.shields.io/npm/v/jamstack-npm-package
[github-license]: https://img.shields.io/github/license/trushantb/jamstack-npm-package
[github-license-url]: https://github.com/trushantb/jamstack-npm-package/blob/master/LICENSE
[github-build]: https://github.com/trushantb/jamstack-npm-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/trushantb/jamstack-npm-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/jamstack-npm-package
