const numKey = document.querySelectorAll(".num");
const userInput = document.getElementById("user-input");

numKey.forEach((el) => {
    el.addEventListener("click", () => {
        userInput.value += el.textContent;
    });
});
