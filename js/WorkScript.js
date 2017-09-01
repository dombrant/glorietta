const showCaseContainer = document.querySelector(".showCaseContainer");
const showCase = document.getElementsByClassName("showCase");

window.addEventListener("scroll", function() {
  "use strict";

  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: showCaseContainer,
      fadeInElements: [showCase[0], showCase[1], showCase[2], emailSignUp]
    });
    didScroll = false;
  }
}, 200);
