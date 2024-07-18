// 6. - Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.
const prog = document.querySelector(".progress-bar");
let count = 0;

let int = setInterval(() => {
    if (count == 100) {
        document.querySelector("h4").style.opacity = 1;
        clearInterval(int);
    }
    count = count + 1;
    prog.style.width = count + "%";
}, 100);
