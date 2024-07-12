async function helper() {
    let options = {
        method: "POST",
        body: JSON.stringify({
            title: "Bidhit",
            body: "bar3",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };

    let content = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
    );
    let response = content.json();
    return response;
}
