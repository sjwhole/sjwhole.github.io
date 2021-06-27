const quotes = [
  {
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman",
  },
  {
    quote: "Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley",
  },
  {
    quote:
      "Change the way you look at things and the things you look at change.",
    author: "Wayne Dyer",
  },
  {
    quote:
      "If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
    author: "Barack Obama",
  },
  {
    quote: "If you have always done it that way, it is probably wrong.",
    author: "Charles Kettering",
  },
  {
    quote:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard",
  },
];

const quoteEle = document.querySelector("#quote");

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuote() {
  let randomQuote = getQuote();
  quoteEle.querySelector("span:first-child").innerText = randomQuote.quote;
  quoteEle.querySelector(
    "span:last-child"
  ).innerText = `-${randomQuote.author}-`;
}

setQuote();
