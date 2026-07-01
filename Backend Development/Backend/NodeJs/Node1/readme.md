# Node Js

## Node Js Internals

### require()

```bash
const fs = require("fs");
fs.writeFile("./test.text", "Hello Bidhit", () => {});
```

- Es code me require jo hai Node ke internals Wrapper function se aa raha hai

`Wrapper Function`

```bash
function execute(exports, require, module, __filename, __dirname){
  const fs = require("fs");
  fs.writeFile("./test.text", "Hello Bidhit", () => {});
}
```

`require('fs)` - Node Built in module ko dhundega nahi hai file ki node mudule me dhundega nahi mila error throw
`require('./math')` - . laga hai isiliye current dir me math name ki file ko dhundega
`require('../math')` - .. Ek dir bahar jao aur perent me math name ki file ko dhundega

### exports

- In Node.js, exports is a special object used to export functions, variables, or classes from a module so they can be used in another file.

`Node.js internally wraps your file in a function similar to this:`

```bash

(function (exports, require, module, __filename, __dirname) {
  exports.add = (a, b) => a + b;
  exports.sub = (a, b) => a - b;
});
```

- So exports is not a keyword, it is a parameter passed to your module by Node.js.

```bash
exports.add = add; // Named exports
module.exports = { // Default exports in single file use only one time
  add, sub };
```

### Version - 4.12.10

- Major.Minor.patch
  `Patch` - some small change and code nahi fatega es version ke change karne me
  `Minor` - some changes with add new feture and code nahi fatega es version ke change karne me
  `Major` - Big(Breaking) changes with add and delete big feature and esme code fat sakta hai
