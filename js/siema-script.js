const siema = new Siema({
  duration: 500,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  loop: true
});

setInterval(function() {
  siema.next();
}, 5000);
