// 3. Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.

//Note : Jab bhi form ke sath kaam karo to yah baad ko yaad rakhna chahiye ki submit hone per form page ko reload kar deta hai, aur hame khayaal rakhna hai ki pages reload naa ho , nahi to agar page reload hua to JavaScript nahi chalegi, kuyki Js chal paye es se palhe hi page reload ho chuka hoga : esiliye hame form ki default property stop karna parega

const input = document.querySelector("#search");
const form = document.querySelector("form");
const btn = document.querySelector("#btn");
const display = document.querySelector("h5");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === "") {
        display.style.color = "red";
        display.textContent = "input field not fill.";
    } else {
        display.textContent = "";
    }
});
