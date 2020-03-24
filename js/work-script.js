const showCase = document.getElementsByClassName("showCase");

window.addEventListener("scroll", () => (didScroll = true));

setInterval(() => {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: showCase[0],
      fadeInElements: [showCase[0]]
    });
    fadeInOnScroll({
      triggerElement: showCase[1],
      fadeInElements: [showCase[1]]
    });
    fadeInOnScroll({
      triggerElement: showCase[2],
      fadeInElements: [showCase[2]]
    });
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
