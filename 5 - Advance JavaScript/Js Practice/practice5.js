// 5 - Buid a countdown timer that starts when a button is clicked and updates the display in real-time.
const timer = document.querySelector("div");
const button = document.querySelectorAll("button");
let interval;
button.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        if (e.target.id === "start") {
            let count = 0;
            interval = setInterval(() => {
                timer.textContent = count;
                count++;
            }, 1000);
        } else if (e.target.id === "pause") {
            clearInterval(interval);
        }
    });
});
