// PERSONAL PORTFOLIO

const toggleBtn = document.getElementById("displayMode");
const icon = toggleBtn.querySelector("i");
const video = document.getElementById("bg-video");
const theme = document.getElementById("theme");
const sun = theme.querySelector("i");
const overlay = document.getElementById("overlay");

// SECTIONS

const home = document.getElementById("home");

let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    video.src = "videos/dark-mode.mp4";
    video.load();
    video.play();
    overlay.style.display = "none";
    document.body.classList.toggle("dark-mode");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");
  } else {
    video.src = "videos/light-mode.mp4";
    video.load();
    video.play();
    overlay.style.display = "initial";
    document.body.classList.toggle("dark-mode");

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");
  }
});

// screen size

let darkTheme = false;

theme.addEventListener("click", () => {
  darkTheme = !darkTheme;

  if (darkTheme) {
    video.src = "videos/dark-mode.mp4";
    video.load();
    video.play();
    overlay.style.display = "none";
    document.body.classList.toggle("dark-mode");

    sun.classList.remove("fa-moon");

    sun.classList.add("fa-sun");
  } else {
    video.src = "videos/light-mode.mp4";
    video.load();
    video.play();
    overlay.style.display = "initial";
    document.body.classList.toggle("dark-mode");

    sun.classList.remove("fa-sun");

    sun.classList.add("fa-moon");
  }
});

// HAMBURGER

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const pages = document.getElementById("pages");

function openMenu() {
  pages.style.display = "block";
}
function closeMenu() {
  pages.style.display = "none";
}
