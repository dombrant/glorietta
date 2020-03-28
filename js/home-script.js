window.onload = () => {
  document
    .querySelector(".jumbotron")
    .classList.add("jumbotronImageBackground");
};

const homeColumns = document.querySelector(".homeColumns");

document
  .querySelector(".getStartedButton")
  .addEventListener("click", () => scrollIt(homeColumns));
