const quotes = ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Keep your face always toward the sunshine - and shadows will fall behind you.", "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.", "The beauty of a woman is not in the clothes she wears, the figure that she carries or the way she combs her hair.", "Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.", "Beauty is power; a smile is its sword.", "Inner beauty should be the most important part of improving one's self."]
let quotecount = 0;


document.getElementById("newquote").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log(quotes[quotecount]);
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  let randomInt = Math.floor(Math.random() * 100);

  document.body.style.backgroundImage = "url('https://source.unsplash.com/random?sig="+randomInt+"')";

  if(quotecount>=6){
    quotecount = 0;
  }
  else{
    quotecount++;
  }
}
