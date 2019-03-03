/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

// Array of quote objects
const quotes = [
  {
    quote: "If opportunity doesn't knock, build a door.",
    source: "Milton Berle",
    citation: "Interview",
    year: 1955,
    tags: ["Inspirational", "Motivational", "Change"]
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    source: "C.S. Lewis",
    tags: ["Inspirational", "Motivational", "Change"]
  },
  {
    quote: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
    source: "Wayne Dyer",
    tags: ["Inspirational", "Motivational", "Change"]
  },
  {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    source: "Dalai Lama",
    tags: ["Inspirational", "Motivational", "Change"]
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    source: "Maya Angelou",
    tags: ["Inspirational", "Motivational", "Change"]
  }
];

// Random Number Function
function createRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Generates a random number, returns a quote from array
function getRandomQuote() {
  return quotes[createRandomNumber(quotes.length)];
};

function changeBackgroundColor() {
  const body = document.body;
  body.style.backgroundColor = `rgb(${createRandomNumber(255)}, ${createRandomNumber(255)}, ${createRandomNumber(255)})`;
}

// Builds HTML String
function printQuote() {

  let quoteObj = getRandomQuote();
  let newHTML = `<p class="quote">${quoteObj.quote}</p>`;

  newHTML += `<p class="source">${quoteObj.source}`;
  if (quoteObj.citation) {
    newHTML += `<span class="citation">${quoteObj.citation}</span>`;
  }

  if (quoteObj.year) {
    newHTML += `<span class="year">${quoteObj.year}</span>`;
  }

  newHTML += `</p>`;

  if (quoteObj.tags) {
    newHTML += `<p class="tags">`;
    newHTML += quoteObj.tags.join(', ');
    newHTML += `</p>`;
  }

  console.log(newHTML);

  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = newHTML;
  changeBackgroundColor();
};

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.