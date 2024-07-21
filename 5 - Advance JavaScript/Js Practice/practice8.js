//8. - Build a character counter for a text area or input field, which updates in real-time as the user types and enforces a character limit.

let textArea = document.querySelector("textarea");
let h3 = document.querySelector("h3");

textArea.addEventListener("input", (e) => {
    console.log(textArea.value);
    h3.textContent = "Charactor Count = " + textArea.value.length;
});
