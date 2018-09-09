# libsiren

Library of JavaScript functions for validating SIREN & SIRET numbers of french entreprises.

## Download

### Manual

Download the raw content directly from [GitHub](https://raw.githubusercontent.com/aminnairi/libsiren/master/libsiren.js) (right-click & save as `libsiren.js`).

### Curl

```shell
$ curl -OL https://raw.githubusercontent.com/aminnairi/libsiren/master/libsiren.js
```

## Usage

### Web

```html
<!doctype html>
<html>
  <body>
    <script src='./libsiren.js'></script>
    <script>
    const { isValidSiren, isValidSiret } = libsiren

    console.log(isValidSiren(123456789))
    console.log(isValidSiret(12345678901234))
    </script>
  </body>
</html>
```

### Node

#### CommonJS

```javascript
const { isValidSiren, isValidSiret } = require('./libsiren.js')

console.log(isValidSiren(123456789))
console.log(isValidSiret(12345678901234))
```

#### ESModule

```javascript
import { isValidSiren, isValidSiret } from './libsiren.js'

console.log(isValidSiren(123456789))
console.log(isValidSiret(12345678901234))
```

## Examples

```javascript
isValidSiren(123456789)
isValidSiren('123 456 789')

isValidSiret(12345678901234)
isValidSiret('123 456 789 01234')
```