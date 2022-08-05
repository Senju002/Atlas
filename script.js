// Start Reveal Effect

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// End Revel Effect

// Start Burger Navbar
let hamburger = document.getElementsByClassName("hamburger")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// End Burger Navbar

// Start TypeWriter Effect
var i = 0;
var txt = "When you look at the stars and the galaxy, you feel that you are not just from any particular piece of land, but from the solar system.”";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
// End TypeWriter Effect
