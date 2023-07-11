const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);

javascript
function openFullscreen(imageUrl) {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const fullscreenImage = document.getElementById("fullscreen-image");

  fullscreenImage.src = imageUrl;
  fullscreenContainer.style.display = "flex";
}

function closeFullscreen() {
  const fullscreenContainer = document.getElementById("fullscreen-container");

  fullscreenContainer.style.display = "none";
}

