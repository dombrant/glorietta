const teamMemberArray = document.getElementsByClassName("teamMember");

window.addEventListener("scroll", function() {
  "use strict";

  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: teamMemberArray[0],
      fadeInElements: teamMemberArray
    });
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
