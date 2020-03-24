window.onload = () => {
  document
    .querySelector(".jumbotron")
    .classList.add("jumbotronImageBackground");
};

const designColumn = document.querySelector(".designColumn");
const developColumn = document.querySelector(".developColumn");
const deployColumn = document.querySelector(".deployColumn");

window.addEventListener("scroll", () => (didScroll = true));

setInterval(() => {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: designColumn,
      fadeInElements: [designColumn]
    });
    fadeInOnScroll({
      triggerElement: developColumn,
      fadeInElements: [developColumn]
    });
    fadeInOnScroll({
      triggerElement: deployColumn,
      fadeInElements: [deployColumn]
    });
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
/*
 Trigger headerAnimation and fadeInOnScroll when scrolling
 */

const homeColumns = document.querySelector(".homeColumns");

document
  .querySelector(".getStartedButton")
  .addEventListener("click", () => scrollIt(homeColumns));
