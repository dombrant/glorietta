const teamMemberArray = document.getElementsByClassName("teamMember");

window.addEventListener("scroll", () => (didScroll = true));

setInterval(() => {
  if (didScroll) {
    headerAnimation();
    fadeInOnScroll({
      triggerElement: teamMemberArray[0],
      fadeInElements: [teamMemberArray[0]]
    });
    fadeInOnScroll({
      triggerElement: teamMemberArray[1],
      fadeInElements: [teamMemberArray[1]]
    });
    fadeInOnScroll({
      triggerElement: teamMemberArray[2],
      fadeInElements: [teamMemberArray[2]]
    });
    fadeInOnScroll({
      triggerElement: teamMemberArray[3],
      fadeInElements: [teamMemberArray[3]]
    });
    fadeInEmailSignUp();
    didScroll = false;
  }
}, 200);
