let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let h1 = document.querySelector("#num");
let num = 0;

btn1.addEventListener("click", () => {
    num--;
    h1.textContent = num;
});
btn2.addEventListener("click", () => {
    num++;
    h1.textContent = num;
});
