const iText = document.getElementById("iText");
const addBtn = document.getElementById("addBtn");
const contentList = document.getElementById("contentList");

addBtn.addEventListener("click", handleBtn);

function handleBtn() {
    const value = iText.value.trim();
    const btn = document.createElement("button");
    if (value !== "") {
        const li = document.createElement("li");
        const div = document.createElement("div");
        li.textContent = iText.value;
        btn.textContent = "X";
        div.append(li, btn);
        contentList.appendChild(div);
        Object.assign(div.style, {
            display: "flex",
            gap: "20px",
            marginTop: "8px",
        });
        iText.value = "";
    }

    btn.addEventListener("click", handleDel);
}

function handleDel(e) {
    e.target.parentElement.remove();
}
