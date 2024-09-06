let h1 = document.querySelector("h1");

function colorChange(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
// colorChange("red", 1000);
// colorChange("blue", 2000);
// colorChange("green", 3000);

// That is callback hell == callback nested
colorChange("red", 1000, () => {
    colorChange("blue", 1000, () => {
        colorChange("green", 1000, () => {
            colorChange("blue", 1000, () => {
                colorChange("red", 1000, () => {
                    colorChange("red", 1000);
                });
            });
        });
    });
});
