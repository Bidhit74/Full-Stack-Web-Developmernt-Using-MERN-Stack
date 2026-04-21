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
        if (index > 2 && index != 7 && index != 9) {
            userInput.value += el.textContent;
        }
        if (el.textContent === "=") {
            userInput.value = calculate(userInput.value).toFixed(2);
        }
    });
});

function calculate(expr) {
    const tokens = expr.match(/(\d+|\+|\-|\*|\/)/g);
    // First handle * and /
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "*" || tokens[i] === "/") {
            const prev = Number(tokens[i - 1]);
            const next = Number(tokens[i + 1]);

            const result = tokens[i] === "*" ? prev * next : prev / next;

            tokens.splice(i - 1, 3, result);
            i--;
        }
    }

    // Then handle + and -
    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const num = Number(tokens[i + 1]);

        if (operator === "+") result += num;
        if (operator === "-") result -= num;
    }

    return result;
}
