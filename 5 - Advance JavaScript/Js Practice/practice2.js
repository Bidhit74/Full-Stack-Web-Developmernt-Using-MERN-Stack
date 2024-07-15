// 2. Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // img1.src =
    //     "https://images.unsplash.com/photo-1716277420481-581a5380c225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D";
    // img2.src =
    //     "https://images.unsplash.com/photo-1715584083775-30132089b98d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D";

    // Or
    let src1 = img1.src;
    let src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
});
