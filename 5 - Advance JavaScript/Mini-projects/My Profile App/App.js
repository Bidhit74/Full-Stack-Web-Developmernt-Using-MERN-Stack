let btn = document.querySelector(".btn1");
let btn1 = document.querySelector(".btn3");
let box = document.querySelector(".open-box");

btn.addEventListener("click", () => {
    box.style.visibility = "visible";
});
btn1.addEventListener("click", () => {
    box.style.transition = " all 0.2s ease-out";
    box.style.visibility = "hidden";
});
