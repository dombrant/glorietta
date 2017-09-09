window.onload = function () {
  document.querySelector(".jumbotron").classList.add("jumbotronImageBackground");
}

const homeColumns = document.querySelector(".homeColumns");
const designColumn = document.querySelector(".designColumn");
const developColumn = document.querySelector(".developColumn");
const deployColumn = document.querySelector(".deployColumn");

window.addEventListener("scroll", function() {
  "use strict";

  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: homeColumns,
      fadeInElements: [designColumn, developColumn, deployColumn, emailSignUp]
    });
    didScroll = false;
  }
}, 200);
/*
 Trigger headerAnimation and fadeInOnScroll when scrolling
 */

document.querySelector(".getStartedButton").addEventListener("click", function () {
  scrollIt(homeColumns);
});
