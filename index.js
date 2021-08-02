const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuotes = document.getElementById('newQuotes');
const share = document.getElementById('share');

let realData = "";
let quotesData = ""

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`
    window.open(tweetPost)
}

const getNewQuotes = () => {
    let randNum = Math.floor(Math.random() * 100);
    quotesData = (realData[randNum]);
    // console.log(randNum)
    quotes.innerText = `${quotesData.text}`;
    (quotesData.author) == null
        ? (author.innerText = "unKnown")
        : (author.innerText = `${quotesData.author}`);
};
//Event Listener
newQuotes.addEventListener('click', getNewQuotes);
share.addEventListener('click', tweetNow)



const getQuotes = async () => {
    const API = "https://type.fit/api/quotes";
    try {
        let data = await fetch(API)
        realData = await data.json();
        getNewQuotes();
        // console.log(realData)
    }
    catch (ereor) { }
};

getQuotes();