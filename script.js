const promise = fetch(
    "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=eiWi3hQwF9Dii13N7EXcP5CR7T0nCkxE",
    { method: "GET" }
)
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        const dataList = JSON.parse(data);

        console.log(dataList.results);
        let html = "";

        for (let i = 0; i < dataList.results.length; i = i + 1) {
            console.log(dataList.results[i].title);
            html = html + "<p>" + dataList.results[i].title + "</p>";
        }

        // document.getElementById("output").innerHTML = data;
        document.getElementById("output").innerHTML = html;
    });
