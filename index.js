const quoteContent = document.querySelector('.quote__content');
const quoteAuthor = document.querySelector('.quote__author');
const quoteBtn = document.querySelector('.quote__btn');

quoteContent.innerText = "Loading...";

const fetchQuote = () => {
  fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then((data) => {
    quoteContent.innerText = data[0].text;
    quoteAuthor.innerText = data[0].author;
  })
  .catch((error) => {
    quoteContent.innerText = "Error Found While Loading";
    quoteAuthor.innerText = " ";
  })
}

window.addEventListener('DOMContentLoaded', () => {
  fetchQuote();
})

let count = 1;
quoteBtn.addEventListener('click', () => {
  fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then((data) => {
    quoteContent.innerText = data[count].text;
    quoteAuthor.innerText = data[count].author;
  })
  .catch((error) => {
    quoteContent.innerText = "Error Found While Loading";
    quoteAuthor.innerText = " ";
  })

  count++;
})
