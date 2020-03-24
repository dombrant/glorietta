window.addEventListener("scroll", () => (didScroll = true));

setInterval(() => {
  if (didScroll) {
    headerAnimation();
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
