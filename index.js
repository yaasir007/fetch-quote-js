const quoteBtn = document.querySelector('.quote__btn');
const quoteContent = document.querySelector('.quote__content');
const quoteContent = document.querySelector('.quote__content');



const fetchQuote = () => {
  fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data =>

  )
}

window.addEventListener('DOMContentLoaded', () => {
  fetchQuote()
})
