// 4 - Create an unordered list. Allow users to add and remove list items dynamically using buttons.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const parentBtn = document.querySelector(".parentBtn");
let li;

parentBtn.addEventListener("click", (e) => {
    if (e.target.id === "btn1") {
        if (input.value.trim() === "") {
            alert("Input cannot be empty");
        } else {
            li = document.createElement("li");
            li.textContent = input.value;
            ul.appendChild(li);
            input.value = "";
        }
    } else if (e.target.id === "btn2") {
        if (ul.lastChild) {
            ul.removeChild(ul.lastChild);
        } else {
            alert("No items to remove");
        }
    }
});
