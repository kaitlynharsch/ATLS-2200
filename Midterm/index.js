let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["Sunday.jpg", "Monday.jpg", "Tuesday.jpg", "Wednesday.jpg", "Thursday.jpg", "Friday.jpg", "Saturday.jpg"];
let prevday;


for(i=0;i<document.getElementsByClassName("day").length; i++){
  // console.log(meals[i]);
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i]+ "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click',setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];

  // document.getElementById("one").addEventListener("click", setActiveButton, false);
  // document.getElementById("two").addEventListener("click", setActiveButton, false);
}

document.getElementById('Sunday').classList.toggle('active');
// document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "' >"


function setActive(e){
  // console.log('clicked');

  prevday = document.getElementsByClassName("active")[0].id;
  if (prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday+"menu").style.display = "none";
  }


  // console.log("previous meal: " + prevmeal);
  // prevmeal.classList.toggle("active");

  // console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    // console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }
  else{
    console.log("div clicked");
    e.target.classList.toggle("active")
  }

day = document.getElementsByClassName('active')[0].id;
console.log(day);
document.getElementById(day+"menu").style.display = "block";
console.log(document.getElementById('image').innerHTML);
document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg' >";


}

// function setActiveButton(){
//   e.target.classList.toggle("active");
//
//
// }
