function backTop(){
  document.documentElement.scrollTop = 0; //Takes the user to the top of the SPA (Single Page Application)
}

document.getElementById("top").onclick = backTop(); //Calls the backTop function when clicked.

function changeButtons(){ //The following function changes whats in the buttons depending on screen size from words to icons.
  if(window.innerWidth >= 1000){ //Desktop Resolution
    document.getElementById("home").innerHTML = "<img class='icon' src='images/home-icon.png' alt='Home Button'> Home";
    document.getElementById("Test1").innerHTML = "<img class='icon' src='images/test1-icon.png' alt='Bookings Button'> Treatments";
    document.getElementById("location").innerHTML = "<img class='icon' src='images/location-icon.png' alt='Location Button'> Find Us";
    document.getElementById("gallery").innerHTML = "<img class='icon' src='images/gallery-icon.png' alt='Gallery Button'> Gallery";
    document.getElementById("top").innerHTML = "<img class='icon' src='images/up-icon.png' alt='Back to top'> Back to Top";
  }
  else if(window.innerWidth < 1000){ //Anyhting smaller than a desktop
    document.getElementById("home").innerHTML = "<img class='icon' src='images/home-icon.png' alt='Home Button'>";
    document.getElementById("Test1").innerHTML = "<img class='icon' src='images/test1-icon.png' alt='Bookings Button'>";
    document.getElementById("location").innerHTML = "<img class='icon' src='images/location-icon.png' alt='Location Button'>";
    document.getElementById("gallery").innerHTML = "<img class='icon' src='images/gallery-icon.png' alt='Gallery Button'>";
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

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("mySidebar").style.paddingRight = "1%";
  document.getElementById("side-wrapper").style.display = "none";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.paddingRight = "0%";
  document.getElementById("side-wrapper").style.display = "block";
}
