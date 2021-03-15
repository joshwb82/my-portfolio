
/* ============================================
  FUNCTION to setup the Hamburger navigation 
============================================== */

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

function toggleMenu(){
  if(!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    showMenu = true;
  } else{
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}


menuBtn.addEventListener('click', toggleMenu);



/* Function to close mobile menu when clicking on contact on ABout and project page */

const contactNav = document.querySelector('#contactLink');

function contactClosemenu(){
  showMenu = false;
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  menuNav.classList.remove('open');
  navItems.forEach(item => item.classList.remove('open'));

}

if (!document.getElementsByClassName('home').length){
  contactNav.addEventListener('click', contactClosemenu);
}

/* ********************************************** */


/* ============================================
  FUNCTION to setup the Contact popup 
============================================== */

const popup = document.querySelector('#myModal');
const openPopup = document.querySelector('#myBtn');
const closePopup = document.getElementsByClassName("close")[0];


// Function to open popup
// --------------------------
function openModal() {
  popup.style.display = "flex";
  popup.style.visibility = "visible";

  // Close burger menu if open
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  menuNav.classList.remove('open');
  navItems.forEach(item => item.classList.remove('open'));
  showMenu = false;
}

// Function to close popup when clicking X
// ----------------------------------------------
function closeModal() { 
  popup.style.display = "none";
  popup.style.visibility = "hidden";
}

// Check that it is the Home page
if (document.getElementsByClassName('home').length){

  openPopup.addEventListener('click', openModal);
  closePopup.addEventListener('click', closeModal);

}

// Function to close popup when clicking on the viewport window
// -----------------------------------------------------
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
    popup.style.visibility = "hidden";
  }
}


/* ********************************************** */



/* ======================================================
  FUNCTION to setup the Fixed navigation functionality
========================================================== */

const headerScroll = document.querySelector('header');
const rec = headerScroll.getBoundingClientRect();
const topDistance = Math.abs(rec.top);

function fixedMenu(scroll){

  // In the case that the scroll is greater than 300 add some classes
  if(scroll > 300){
    headerScroll.classList.add('fixed-header');
  } else{
    headerScroll.classList.remove('fixed-header');
  }
}


window.onscroll = () => {
  const scroll = window.scrollY;
  
  fixedMenu(scroll);
}


/* ********************************************** */




/* ======================================================
  FUNCTION to check if logo bar is in viewport
========================================================== */

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


function switchSocial(){

  var logos = document.querySelector('.logos');
  var social = document.querySelector('.social-icons');
  if (isInViewport(logos)) {
    social.classList.add('fixed-bottom');
  } else{
    social.classList.remove('fixed-bottom');
  }

}


window.addEventListener('scroll', switchSocial);

/* ********************************************** */



/* ======================================================
  FUNCTION for smooth scrolling to footer
========================================================== */

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }

  });

});


/* ********************************************** */


