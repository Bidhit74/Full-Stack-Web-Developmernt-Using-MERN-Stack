function add(a, b) {
  return a + b;
}

// exports.sub = function (a, b) {
//   // Named exports
//   return a - b;
// };
const sub = function (a, b) {
  // Named exports
  return a - b;
};

// exports.add = add; // Named exports
// Default exports in single file use only one time
module.exports = {
  add,
  sub,
};
