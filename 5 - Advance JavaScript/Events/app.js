// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// div.addEventListener("click", function (e) {
//     console.log("Div is clicked");
// });

// ul.addEventListener("click", function (e) {
//     e.stopPropagation(); // Stping event bubbling
//     console.log("ul is clicked");
// });

// li.addEventListener("click", function (e) {
//     e.stopPropagation(); // Stping event bubbling
//     console.log("li is clicked");
// });

/* Building Todo List  */
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let newClass = document.querySelector(".Xbtn");

button.addEventListener("click", function (e) {
    let value = inp.value;
    let new1 = document.createElement("li");
    let btn = document.createElement("button");
    btn.classList.add("Xbtn");
    btn.textContent = "X";
    new1.textContent = value;
    ul.appendChild(new1);
    new1.appendChild(btn);
});

ul.addEventListener("click", function (e) {
    if (e.target.nodeName == "BUTTON") {
        e.target.parentElement.remove();
    }
});
