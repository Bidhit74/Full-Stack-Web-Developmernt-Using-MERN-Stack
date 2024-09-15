// Event Delegation : - Jab aap event listener se kai saare different elements ke events ko handle kar sakte
//event listener ko parent per lagao aur unke id, class ya fir tag ko basis par differetiate karke different task karao

let parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
    if (e.target.id === "play") {
        console.log("Play song");
    } else if (e.target.id === "pause") {
        console.log("Pause song");
    }
});
