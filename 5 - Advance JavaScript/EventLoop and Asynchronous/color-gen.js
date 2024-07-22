let btn = document.querySelector("button");
let head = document.querySelector("h1");
let div = document.querySelector(".div2");

function colorChenger() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let black = Math.floor(Math.random() * 255);
    let rgb = `rgb(${red}, ${green}, ${black})`;
    return rgb;
}

btn.addEventListener("click", function () {
    head.innerText = colorChenger();
    btn.style.color = colorChenger();
    btn.style.cursor = "pointer";
    div.style.backgroundColor = colorChenger();
});
