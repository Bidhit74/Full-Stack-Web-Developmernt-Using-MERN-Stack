const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const btn = document.querySelector("button");

const handleColorChanger = () => {
  let coordinate1 = Math.floor(Math.random() * 255);
  let coordinate2 = Math.floor(Math.random() * 255);
  let coordinate3 = Math.floor(Math.random() * 255);
  h1.innerText = `rgb(${coordinate1}, ${coordinate2}, ${coordinate3})`;
  btn.style.backgroundColor = `rgb(${coordinate1}, ${coordinate2}, ${coordinate3})`;
  div.style.backgroundColor = `rgb(${coordinate1}, ${coordinate2}, ${coordinate3})`;
};

// btn.addEventListener("click", handleColorChanger);

// concept of this
btn.addEventListener("click", function () {
  console.log(this);
  this.style.color = "red";
});
