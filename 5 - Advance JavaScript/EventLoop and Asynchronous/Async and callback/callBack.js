function getData(url, callback) {
    fetch(url)
        .then((raw) => raw.json())
        .then((data) => {
            callback(data);
        });
}

getData("https://randomuser.me/api/", (data) => {
    console.log(
        data.results[0].gender,
        data.results[0].email,
        data.results[0].name.first
    );
});
