const quote = document.getElementById('quote');
const author = document.getElementById('author');


const api_url = 'https://api.quotable.io/random';

async function getQuote(url) {
    const respone = await fetch(url);
    let data = await respone.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

function copyQuote(){
    const quoteText = quote.innerText;
    const authorText = author.innerText;
    const text = quoteText + ' - ' + authorText;
    navigator.clipboard.writeText(text);
    alert('Quote copied to clipboard');
}

