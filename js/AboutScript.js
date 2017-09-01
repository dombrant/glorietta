const mainParagraphs = document.querySelector(".mainParagraphs");

window.addEventListener("scroll", function() {
  "use strict";

  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: mainParagraphs,
      fadeInElements: [emailSignUp]
    });
    didScroll = false;
  }
}, 200);
