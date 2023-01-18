# signup-flow-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It is SF form for signup-flow-app. This will be updated under the developing

<!-- [**Live Demo**](https://ming0955.github.io/SF-form/) -->

## Installation:

```bash
npm install signup-flow-package --save-dev
```

or

```bash
yarn add -D signup-flow-package
```

## Usage :

Add `SF_Form` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SF_Form } from 'signup-flow-package'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <SF_Form />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <SF_Form value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/signup-flow-package
[npm-image]: https://img.shields.io/npm/v/signup-flow-package
[github-license]: https://img.shields.io/github/license/gapon2401/signup-flow-package
[github-license-url]: https://github.com/gapon2401/signup-flow-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/signup-flow-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/signup-flow-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/signup-flow-package
