window.onload = () => {
  document
    .querySelector(".jumbotron")
    .classList.add("jumbotronImageBackground");
};

document.querySelector(".getStartedButton").addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".homeColumns").offsetTop -
      document.querySelector("header").offsetHeight,
    left: 0,
    behavior: "smooth"
  })
);
// Subtract the header's height so that it doesn't scroll too low
