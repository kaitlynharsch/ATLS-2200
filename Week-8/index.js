// console.log("hello world");
// console.log(Math.random(3));
// console.log(Math.floor(Math.random()*3) );


// console.log(document.getElementsByClassName("options"));
// console.log(document.getElementsByClassName("options")[0].innerHTML);

const images = ["panda.JPG", "cat.JPG", "elephant.JPG",];
const title = ["panda", "cat", "elephant"];


for(i=0;i<document.getElementsByClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  // console.log(document.getElementsByClassName('options')[i].innerHTML);
  document.getElementsByClassName('options')[i].innerHTML += '<img src="assets/' + images[i] + ' ">';
//
  document.getElementsByClassName('options')[i].setAttribute("id", title[i]);
  document.getElementsByClassName('options')[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
