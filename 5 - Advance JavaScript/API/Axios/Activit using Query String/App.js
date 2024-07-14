let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

async function getUnivercity() {
    try {
        let response = await axios.get(url + inp.value);
        function college() {
            ul.textContent = "";
            for (let i = 0; i < response.data.length; i++) {
                let val = response.data[i];
                let li = document.createElement("li");
                li.textContent = val.name;
                console.log(val);
                ul.appendChild(li);
            }
        }
        return college();
    } catch (error) {
        return `Error - ${error}`;
    }
}

btn.addEventListener("click", async () => {
    await getUnivercity();
});
