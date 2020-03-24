window.addEventListener("scroll", function() {
  "use strict";

  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    headerAnimation();
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
