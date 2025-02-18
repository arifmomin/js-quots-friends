import {friendshipQuotes} from "./Quots.js";

const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');
const button = document.querySelector('button');
function quotsRun () {
    const randomNumber = Math.floor(Math.random()* friendshipQuotes.length );
    quotes.textContent = friendshipQuotes[randomNumber].quote;
    author.textContent = friendshipQuotes[randomNumber].author;
}
quotsRun();
button.addEventListener('click', (quotsRun))

