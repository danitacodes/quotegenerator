const textQuote = document.getElementById('quote');
const authorQuote = document.getElementById('author');
const createBtn = document.getElementById('create');

//Creates function for the button to generate quotes

function getQuote(){
//gets data from api
fetch('https://api.quotable.io/random')
.then(response => response.json())
.then(data => {
    textQuote.textContent = data.content;
    authorQuote.textContent = data.author;
})
}

getQuote();
createBtn.addEventListener('click', () => {
    getQuote();
})
