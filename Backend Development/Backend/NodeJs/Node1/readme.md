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
