const evt = new Event("MyEvent");
const btn = document.querySelector("button");

btn.addEventListener("MyEvent", (e) => {
    console.log(e);
    console.log("MyEvent run hua");
});

btn.dispatchEvent(evt);
