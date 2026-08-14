const btn = document.querySelector("button");
const inp = document.querySelector("input");
const form = document.querySelector("form");

btn.addEventListener("click", (e) => {
  console.log(e);
});

inp.addEventListener("keydown", function (e) {
  // console.log(e);
  // console.log(e.target.value);
  console.log("Key = ", e.key);
  console.log("Code = ", e.code);
  console.log("Key is pressed");
});
inp.addEventListener("keyup", function (e) {
  console.log(e);
});

form.addEventListener("submit", function (e) {
  // e.preventDefault = true;
  e.preventDefault();
  console.log("Form is submit");
});
