const quoteContent = document.querySelector('.quote__content');
const quoteAuthor = document.querySelector('.quote__author');
const quoteBtn = document.querySelector('.quote__btn');

quoteContent.innerText = "Loading...";

const fetchQuote = () => {
  fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then((data) => {
    quoteContent.innerText = data.content;
    quoteAuthor.innerText = data.author;
  })
  .catch((error) => {
    quoteContent.innerText = "Error Found While Loading";
    quoteAuthor.innerText = " ";
  })
}

window.addEventListener('DOMContentLoaded', () => {
  fetchQuote();
})

quoteBtn.addEventListener('click', () => {
  fetchQuote();
})
