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
    citation: 1955
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    source: "C.S. Lewis"
  },
  {
    quote: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
    source: "Wayne Dyer"
  },
  {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    source: "Dalai Lama"
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    source: "Maya Angelou"
  }
];

// Generates a random number, returns a quote from array
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

getRandomQuote();


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  let quoteObj = getRandomQuote();
  let newHTML = '';
  if (quoteObj.quote && quoteObj.source && quoteObj.citation && quoteObj.year) {
    newHTML += `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}<span class="citation">${quoteObj.citation}</span><span class="year">${quoteObj.year}</span></p>`;
  }
  if (quoteObj.quote && quoteObj.source && quoteObj.citation) {
    newHTML += `<p class="source">${quoteObj.source}</p><p class="source">${quoteObj.source}<span class="citation">${quoteObj.citation}</span></p>`;
  }
  if (quoteObj.citation) {

  }
  console.log(newHTML);
};


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.