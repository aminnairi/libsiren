# libsiren

Library of JavaScript functions for validating SIREN & SIRET numbers of french entreprises.

## Usage

### Node

```shell
$ # NPM users
$ npm install @aminnairi/libsiren
$ # Yarn users
$ yarn add @aminnairi/libsiren
```

```javascript
// ESModule
import { isValidSiren, isValidSiret } from '@aminnairi/libsiren'
// CommonJS
const { isValidSiren, isValidSiret } = require('@aminnairi/libsiren')


isValidSiren(123456789)
isValidSiret(12345678901234)
```

### Web

Download the raw content of [`libsiren.js`](./libsiren.js)

```html
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>Test Page For libsiren</title>
  </head>
  <body>
    <script src='./libsiren.js'></script>
    <script>
    const { isValidSiren, isValidSiret } = libsiren

    isValidSiren(123456789)
    isValidSiret(12345678901234)
    </script>
  </body>
</html>
```

## Examples

```javascript
isValidSiren(123456789)
isValidSiren('123 456 789')

isValidSiret(12345678901234)
isValidSiret('123 456 789 01234')
```