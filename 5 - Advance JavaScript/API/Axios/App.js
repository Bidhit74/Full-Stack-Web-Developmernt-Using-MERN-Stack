let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = " https://icanhazdadjoke.com/";
let id = document.getElementById("paraId");
let btn = document.querySelector("button");
let img = document.querySelector("img");

// async function getFetch() {
//     try {
//         let res = await axios.get(url);
//         let data = res.data.fact;
//         return data;
//         // console.log(res.data);
//     } catch (error) {
//         return `Invalid url - ${error}`;
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFetch();
//     id.textContent = fact;
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         let data = res.data.message;
//         return data;
//     } catch (error) {
//         return `Invalid url - ${error}`;
//     }
// }

// btn.addEventListener("click", async () => {
//     let urlImage = await getImage();
//     // img.src = urlImage;
//     // or
//     img.setAttribute("src", urlImage);
// });

// Sending Headers Axios

async function getFetch() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url3, config);
        let data = res.data;
        console.log(data.joke);
    } catch (error) {
        return `Invalid url - ${error}`;
    }
}
