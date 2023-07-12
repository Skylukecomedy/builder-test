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


const images = document.querySelectorAll('.col img');
const overlays = document.querySelectorAll('.overlay');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', enlargeImage.bind(null, i));
}

function enlargeImage(index) {
  overlays[index].style.opacity = '1';
  document.body.style.overflow = 'hidden'; // Prevent scrolling on the page

  const enlargedImage = document.createElement('img');
  enlargedImage.src = images[index].src;
  enlargedImage.className = 'enlarged-image';

  document.body.appendChild(enlargedImage);

  enlargedImage.addEventListener('click', shrinkImage);
}

function shrinkImage() {
  for (let i = 0; i < overlays.length; i++) {
    overlays[i].style.opacity = '0';
  }
  document.body.style.overflow = 'auto'; // Enable scrolling on the page

  const enlargedImage = document.querySelector('.enlarged-image');
  enlargedImage.parentNode.removeChild(enlargedImage);
}


