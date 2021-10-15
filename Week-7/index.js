// const quotes = ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Keep your face always toward the sunshine - and shadows will fall behind you.", "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.", "The beauty of a woman is not in the clothes she wears, the figure that she carries or the way she combs her hair.", "Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.", "Beauty is power; a smile is its sword.", "Inner beauty should be the most important part of improving one's self."]
// let quotecount = 0;
//
//
// document.getElementById("newquote").addEventListener("click", buttonClicked);
//
// function buttonClicked(){
//   console.log(quotes[quotecount]);
//   document.getElementById("qtext").innerHTML = quotes[quotecount];
//   if(quotecount>=6){
//     quotecount = 0;
//   }
//   else{
//     quotecount++;
//   }
// }
//
//
// function getImage() {
//   let randomInt = Math.floor(Math.random() * 100);
//
//   document.body.style.backgroundImage = "url('https://source.unsplash.com/random?sig="+randomInt+"')";
// };


/*
  THINGS I LEARNT IN THIS PROJECT
  - React
  - Using JSON outputs from APIs
  - CSS centering is hard, so hard (I seem to re-learn this in every project)


  KNOWN ISSUES TO FIX
  - the quote is currently centred based on the image / full window size with scroll. I want it to be centered based on the window that you can see, without scrolling. Dont want it to be sticky necessarily, because then the new quote button may not be seen.
  - background image still allows for white space. I thought cover was meant to fix this, but doesn't seem to. https://css-tricks.com/perfect-full-page-background-image/
  - Responsiveness isn't implemented well. When screen size is small, the quote box appears at the top of the screen, not the middle.
*/

// Thank you to Kostas, from whom I took these quotes (https://codepen.io/kkoutoup/pen/zxmGLE)
const QUOTES = [
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author:"Francis of Assisi"
  },
  {
    quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"
  },
  {
    quote:"It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius"
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author:"Thomas A. Edison"
  },
  {
    quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author:"Confucius"
  },
  {
    quote:"Don't watch the clock; do what it does. Keep going.",
    author:"Sam Levenson"
  },
  {
    quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author:"Ayn Rand"
  },
  {
    quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author:"Ayn Rand"
  },
  {
    quote:"Expect problems and eat them for breakfast.",
    author:"Alfred A. Montapert"
  },
  {
    quote:"Start where you are. Use what you have. Do what you can.",
    author:"Arthur Ashe"
  },
  {
    quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author:"Samuel Beckett"
  },
  {
    quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
  },
  {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:"Albert Einstein"
  },
  {
    quote:"Always remember that you are absolutely unique. Just like everyone else.",
    author:"Margaret Mead"
  },
  {
    quote:"Do not take life too seriously. You will never get out of it alive.",
    author:"Elbert Hubbard"
  },
  {
    quote:"People who think they know everything are a great annoyance to those of us who do.",
    author:"Isaac Asimov"
  },
  {
    quote:"Procrastination is the art of keeping up with yesterday.",
    author:"Don Marquis"
  },
  {
    quote:"Get your facts first, then you can distort them as you please.",
    author:"Mark Twain"
  },
  {
    quote:"A day without sunshine is like, you know, night.",
    author:"Steve Martin"
  },
  {
    quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
    author:"Ellen DeGeneres"
  },
  {
    quote:"Don't sweat the petty things and don't pet the sweaty things.",
    author:"George Carlin"
  },
  {
    quote:"Always do whatever's next.",
    author:"George Carlin"
  },
  {
    quote:"Atheism is a non-prophet organization.",
    author:"George Carlin"
  },
  {
    quote:"Hapiness is not something ready made. It comes from your own actions.",
    author:"Dalai Lama"
  },
];

// Unsplash requires a unique URL to refresh. See this comment:
// https://github.com/unsplash/unsplash-source-js/issues/9
function getImage() {
  let randomInt = Math.floor(Math.random() * 100);

  document.body.style.backgroundImage = "url('https://source.unsplash.com/random?sig="+randomInt+"')";
};

function getQuote() {
  getImage();
  const randomInt = Math.floor(Math.random() * (QUOTES.length - 1));
  return QUOTES[randomInt];
}

getQuote();
