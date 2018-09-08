# libsiren

Library of JavaScript functions for validating SIREN & SIRET Numbers of french entreprises.

## Installation

### Web

Download the file [`libsiren.js`](./libsiren.js).

### Node

NPM | Yarn
---|---
`npm install @aminnairi/libsiren` | `yarn add @aminnairi/libsiren`

## Import

### Web

```html
<!doctype html>
<html>
  <body>
    <script src='./libsiren.js'></script>
  </body>
</html>
```

### CommonJS

```javascript
const { isValidSiren } = require('@aminnairi/libsiren')
```

### ESModule

```javascript
import { isValidSiren } from '@aminnairi/libsiren'
```

## Usage

```javascript
isValidSiren(123456789)
isValidSiren('123 456 789')
```

## Examples

```javascript
console.log(isValidSiren(424576965))      // true
console.log(isValidSiren('424 576 965'))  // true
console.log(isValidSiren('424 576 966'))  // false
```