const form = document.querySelector('form');
const input = form.querySelector('input').value;
console.log(input);
document.addEventListener('submit', query);

const form = document.querySelector('#queryForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const input = document.getElementById('query').value;

  fetch(`https://api.tvmaze.com/search/shows?q=${input}`).
      then(response => response.json()).
      then(data => {
        console.log(data);
      })
      error

});