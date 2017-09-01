/*
 Begin header scroll code
 Credit to Marius Craciunoiu - https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
 */

const header = document.querySelector("header");
let didScroll;
let lastScrollTop = 0;
let currentScrollTop = document.body.scrollTop;
const delta = 100;

function headerAnimation() {
  "use strict";

  currentScrollTop = document.body.scrollTop;

  if (Math.abs(lastScrollTop - currentScrollTop) <= delta) {
    return;
  }

  if (currentScrollTop > lastScrollTop) {
    header.classList.remove("navShown");
    header.classList.add("navHidden");
  }
  else {
      header.classList.remove("navHidden");
      header.classList.add("navShown");
  }

  lastScrollTop = currentScrollTop;
}

/*
 End header scroll code
 */

/*
 Begin mobile nav code
 */

const container = document.querySelector(".container");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuItem1 = document.querySelector(".mobileMenuItem1");
const mobileMenuItem2 = document.querySelector(".mobileMenuItem2");
const mobileMenuItem3 = document.querySelector(".mobileMenuItem3");
const mobileMenuItem4 = document.querySelector(".mobileMenuItem4");
const facebookMobileMenuIcon = document.querySelector(".facebookMobileMenuIcon");
const twitterMobileMenuIcon = document.querySelector(".twitterMobileMenuIcon");
const emailMobileMenuIcon = document.querySelector(".emailMobileMenuIcon");


function showMobileMenu() {
  "use strict";

  mobileMenu.style.display = "flex";
  mobileMenu.classList.remove("slideOut");
  mobileMenu.classList.add("slideIn");

  container.classList.add("blur");
  document.querySelector("html").style.overflow = "hidden";

  setTimeout(function () {
    mobileMenuItem1.classList.add("fadeIn");
    mobileMenuItem1.style.visibility = "visible";
  }, 100);

  setTimeout(function () {
    mobileMenuItem2.classList.add("fadeIn");
    mobileMenuItem2.style.visibility = "visible";
  }, 300);

  setTimeout(function () {
    mobileMenuItem3.classList.add("fadeIn");
    mobileMenuItem3.style.visibility = "visible";
  }, 500);

  setTimeout(function () {
    mobileMenuItem4.classList.add("fadeIn");
    mobileMenuItem4.style.visibility = "visible";
  }, 700);

  setTimeout(function () {
    facebookMobileMenuIcon.classList.add("fadeIn");
    facebookMobileMenuIcon.style.visibility = "visible";
    twitterMobileMenuIcon.classList.add("fadeIn");
    twitterMobileMenuIcon.style.visibility = "visible";
    emailMobileMenuIcon.classList.add("fadeIn");
    emailMobileMenuIcon.style.visibility = "visible";
  }, 800);

  document.ontouchstart = function(event) {
    let currentTarget = event.target;
    if (currentTarget.classList.contains("mobileMenuXButton")) {
      return true;
    }
    else if (currentTarget.classList.contains("mobileMenuItem1")) {
      return true;
    }
    else if (currentTarget.classList.contains("mobileMenuItem2")) {
      return true;
    }
    else if (currentTarget.classList.contains("mobileMenuItem3")) {
      return true;
    }
    else if (currentTarget.classList.contains("mobileMenuItem4")) {
      return true;
    }
    else {
      event.preventDefault();
    }
  }
  //Prevent the background from scrolling when the mobile menu is open
  //And when the user is on a touch screen device
}
//Despite the fact that the slideIn animation sets the display to flex,
//the display has to be set to flex here also
//in order to avoid a bug where the menu's display value stays as none after the first time it is clicked

function hideMobileMenu() {
  "use strict";

  mobileMenu.classList.remove("slideIn");
  mobileMenu.classList.add("slideOut");
  container.classList.remove("blur");
  document.querySelector("html").style.overflow = "visible";
  // There is no need to make the display value none here because that is done in the slideOut animation

  setTimeout(function () {
    mobileMenuItem1.style.visibility = "hidden";
    mobileMenuItem2.style.visibility = "hidden";
    mobileMenuItem3.style.visibility = "hidden";
    mobileMenuItem4.style.visibility = "hidden";
    facebookMobileMenuIcon.style.visibility = "hidden";
    twitterMobileMenuIcon.style.visibility = "hidden";
    emailMobileMenuIcon.style.visibility = "hidden";
    mobileMenuItem1.classList.remove("fadeIn");
    mobileMenuItem2.classList.remove("fadeIn");
    mobileMenuItem3.classList.remove("fadeIn");
    mobileMenuItem4.classList.remove("fadeIn");
    facebookMobileMenuIcon.classList.remove("fadeIn");
    twitterMobileMenuIcon.classList.remove("fadeIn");
    emailMobileMenuIcon.classList.remove("fadeIn");
  }, 500);
  // Change the visibility of each li item within mobileMenu back to hidden
  // So that when the slideIn animation is triggered again, the items will not be visible to start

  document.ontouchstart = function() {
    return true;
  }
  //Remove the touchmove event listener that is meant to disable scrolling
  //On touch screen devices
}

document.querySelector(".mobileNavButton").addEventListener("click", showMobileMenu);

document.querySelector(".mobileMenuXButton").addEventListener("click", hideMobileMenu);

/*
 End mobile nav code
 */

const emailSignUp = document.querySelector(".emailSignUp");
//Define the emailSignUp variable in the main script
//Because it will be used in the scripts for each page
