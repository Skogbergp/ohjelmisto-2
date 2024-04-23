const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    joke();
});

async function joke() {

    const search_term = document.querySelector('#query').value;
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search_term}`);

    const data = await response.json();

    for (let i in data.result) {
        const article = document.createElement("article")

        const p = document.createElement("p")

        p.textContent = data.result[i].value

        article.appendChild(p);
        document.body.appendChild(article)
    }
}

