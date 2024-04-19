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
}