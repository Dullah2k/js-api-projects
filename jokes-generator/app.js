const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
const joke = document.getElementById("joke")
const btn = document.getElementById("button")

let getJoke = () => {
  fetch(url)
  .then(data => data.json())
  .then(item => {
    joke.textContent = `${item.joke}`
  })
}
btn.addEventListener("click", getJoke)
getJoke()
