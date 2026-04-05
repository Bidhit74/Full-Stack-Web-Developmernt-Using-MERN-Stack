const numKey = document.querySelectorAll(".num");
const userInput = document.getElementById("user-input");
const funcKey = document.querySelectorAll(".func");

numKey.forEach((el) => {
    el.addEventListener("click", () => {
        userInput.value += el.textContent;
    });
});

funcKey.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (el.textContent === "AC") {
            userInput.value = "";
        }
        if (index === 1) {
            userInput.value = userInput.value.slice(0, -1);
        }
        if (el.textContent === "Sq") {
            userInput.value *= userInput.value;
        }
        if (el.textContent === "%") {
            userInput.value = userInput.value / 100;
        }
    });
});
