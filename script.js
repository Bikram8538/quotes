import {quotes} from './quotes.js';
function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `— ${quote.author}`;
}

document.addEventListener('DOMContentLoaded', displayQuote);
