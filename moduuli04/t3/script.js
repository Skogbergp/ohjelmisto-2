const form = document.querySelector('form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  fetchcall();
});

async function fetchcall() {
  const search_term = document.querySelector('#query').value;
  const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search_term}`);
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {


    console.log(i);
    const h2 = document.createElement('h2');
    h2.textContent = data[i].show.name;

    const a = document.createElement("a");
    a.innerHTML = `<a href = ${data[i].show.url} ></a>`

    const article = document.createElement("article")
    article.appendChild(h2)
    article.appendChild(a)

    document.body.appendChild(article)
  }

}

