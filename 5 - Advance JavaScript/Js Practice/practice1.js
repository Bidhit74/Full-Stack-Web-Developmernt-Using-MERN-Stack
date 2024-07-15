// 1. Create an HTML page with a button. When the button is clicked, chenge the text of a paragraph element.

const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", () => {
    para.textContent =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio modi quaerat porro labore, voluptatibus";
});
