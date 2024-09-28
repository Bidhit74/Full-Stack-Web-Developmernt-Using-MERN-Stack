const btn = document.querySelectorAll(".key");
const input = document.querySelector(".input_field");
const output = document.querySelector(".output");
const data_key = input.querySelector("[data-key]");
const gray = input.querySelector(".gray");

let input_field = "";
let keys = Array.from(btn);

keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        let name = e.target.innerText;
        if (name == "") {
            input_field = input_field.substring(0, input_field.length - 1);
            input.value = input_field;
        } else if (name == "AC") {
            input_field = "";
            output.innerText = "";
            input.value = input_field;
        } else if (name == "=") {
            input_field = eval(input_field);
            output.innerText = input_field;
        } else if (name == "sq") {
            input_field = input.value * input.value;
            output.innerText = input_field;
        } else {
            input_field += e.target.innerText;
            input.value = input_field;
        }
    });
});
