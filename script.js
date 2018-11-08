const navLink = document.querySelectorAll(".nav-link");

navbar.onmouseover = function(event) {
  let hovered = event.target;
  navLink.forEach(link => {
    link.style.opacity = ".15"
  });
   hovered.style.opacity = "1";
  };

navbar.onmouseleave = function() {
  navLink.forEach(link => {
    link.style.opacity = "1";
  })
}