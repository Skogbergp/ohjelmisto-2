async function randomJoke(){
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const joke = await response.json()
    console.log(joke.value)
}
randomJoke()