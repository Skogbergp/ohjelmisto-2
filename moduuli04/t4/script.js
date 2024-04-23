const form = document.querySelector('form');
const resultDiv = document.createElement("div")
resultDiv.id = "results"
document.body.appendChild(resultDiv)
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    showresult();
});

async function showresult() {
    const search_term = document.querySelector('#query').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search_term}`);

    const data = await response.json();
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = ""

    console.log(data);
    for (let i = 0; i < data.length; i++) {


        console.log(i);
        const h2 = document.createElement('h2');
        h2.textContent = data[i].show.name;

        const a = document.createElement("a");
        a.href = data[i].show.url
        a.target = "_blank"
        a.textContent = data[i].show.url


        const img = document.createElement("img")
        img.src =  data[i].show.image !== null ? data[i].show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
        img.alt = data[i].show.name;

        const summaryElement = document.createElement("div");
        summaryElement.innerHTML = data[i].show.summary

        const article = document.createElement("article")
        article.appendChild(h2)
        article.appendChild(a)
        article.appendChild(img)
        article.appendChild(summaryElement)

        resultDiv.appendChild(article)
    }

}

