

// Get the scroll to top button:

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0; 
} 



// Scroll down navigation code

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  	const navbarHeight = 100;

  	const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  	if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  	else navbar.classList.remove("fixed-top");
  });