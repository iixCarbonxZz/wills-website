var bool = true;

function backTop(){
  document.documentElement.scrollTop = 0; //Takes the user to the top of the SPA (Single Page Application)
}

document.getElementById("top").onclick = backTop; //Calls the backTop function when clicked.

document.getElementById("dark").onclick = function(){ //The following function changes the css of the page to creat light and dark modes. I might change this code later on but I spent several hours looking for a simpler way to do this.
  if(bool == false){ //Light Mode
    var backs = document.getElementsByClassName("back-color");
    var backs2 = document.getElementsByClassName("back-color2");

    document.getElementById("dark").innerHTML = "<img class='icon' src='images/night-icon.png' alt='Night Mode'> Dark Mode";
    document.documentElement.style.backgroundColor = "#E6E6E7";

    for(i=0;i < backs.length; i++){
      backs[i].style.backgroundColor = "#E6E6E7";
      backs[i].style.color = "#000000";
    }
    for(i=0;i < backs2.length; i++){
      backs2[i].style.filter = "invert(100%)";
    }
    bool = true;
  }
  else if(bool == true){ //Dark Mode
    var backs = document.getElementsByClassName("back-color");
    var backs2 = document.getElementsByClassName("back-color2");

    document.getElementById("dark").innerHTML = "<img class='icon' src='images/day-icon.png' alt='Light Mode'> Light Mode";
    document.documentElement.style.backgroundColor = "#12151C";

    for(i=0;i < backs.length; i++){
      backs[i].style.backgroundColor = "#181C25";
      backs[i].style.color = "#FFFFFF";
    }
    for(i=0;i < backs2.length; i++){
      backs2[i].style.filter = "invert(0%)";
    }
    bool = false;
  }
}

window.onload = function(){
if(bool == false){ //Light Mode
    var backs = document.getElementsByClassName("back-color");
    var backs2 = document.getElementsByClassName("back-color2");

    document.getElementById("dark").innerHTML = "<img class='icon' src='images/night-icon.png' alt='Night Mode'> Dark Mode";
    document.documentElement.style.backgroundColor = "#E6E6E7";

    for(i=0;i < backs.length; i++){
      backs[i].style.backgroundColor = "#E6E6E7";
      backs[i].style.color = "#000000";
    }
    for(i=0;i < backs2.length; i++){
      backs2[i].style.filter = "invert(100%)";
    }
    bool = true;
  }
  else if(bool == true){ //Dark Mode
    var backs = document.getElementsByClassName("back-color");
    var backs2 = document.getElementsByClassName("back-color2");

    document.getElementById("dark").innerHTML = "<img class='icon' src='images/day-icon.png' alt='Light Mode'> Light Mode";
    document.documentElement.style.backgroundColor = "#12151C";

    for(i=0;i < backs.length; i++){
      backs[i].style.backgroundColor = "#181C25";
      backs[i].style.color = "#FFFFFF";
    }
    for(i=0;i < backs2.length; i++){
      backs2[i].style.filter = "invert(0%)";
    }
    bool = false;
  }

}

function changeButtons(){ //The following function changes whats in the buttons depending on screen size from words to icons.
  if(window.innerWidth >= 1000){ //Desktop Resolution
    document.getElementById("home").innerHTML = "<img class='icon' src='images/home-icon.png' alt='Home Button'> Home";
    document.getElementById("Test1").innerHTML = "<img class='icon' src='images/test1-icon.png' alt='Bookings Button'> Bookings";
    document.getElementById("location").innerHTML = "<img class='icon' src='images/location-icon.png' alt='Location Button'> Locations";
    document.getElementById("gallery").innerHTML = "<img class='icon' src='images/gallery-icon.png' alt='Gallery Button'> Gallery";
    if(bool){
      document.getElementById("dark").innerHTML = "<img class='icon' src='images/day-icon.png' alt='Light mode'> Light Mode";
    }
    else{
      document.getElementById("dark").innerHTML = "<img class='icon' src='images/night-icon.png' alt='Night Mode'> Dark Mode";
    }
    document.getElementById("top").innerHTML = "<img class='icon' src='images/up-icon.png' alt='Back to top'> Back to Top";
  }
  else if(window.innerWidth < 1000){ //Anyhting smaller than a desktop
    document.getElementById("home").innerHTML = "<img class='icon' src='images/home-icon.png' alt='Home Button'>";
    document.getElementById("Test1").innerHTML = "<img class='icon' src='images/test1-icon.png' alt='Bookings Button'>";
    document.getElementById("location").innerHTML = "<img class='icon' src='images/location-icon.png' alt='Location Button'>";
    document.getElementById("gallery").innerHTML = "<img class='icon' src='images/gallery-icon.png' alt='Gallery Button'>";
    if(bool){
      document.getElementById("dark").innerHTML = "<img class='icon' src='images/day-icon.png' alt='Light mode'>";
    }
    else{
      document.getElementById("dark").innerHTML = "<img class='icon' src='images/night-icon.png' alt='Night Mode'>";
    }
    document.getElementById("top").innerHTML = "<img class='icon' src='images/up-icon.png' alt='Back to top'>";
  }
}
document.addEventListener("DOMContentLoaded", changeButtons); //When the page loads runs the changeButtons function.
window.onresize = changeButtons; //When they resize the window it runs the changeButtons function.

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}
