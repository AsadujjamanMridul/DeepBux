// CHANGE DARK THEME

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Change dark theme decoration
const imageDecor = document.getElementById("hero__mobile-decor");

// An array of image sources for hero section decoration
const imageSources = [
  "../assets/images/image-4.png",
  "../assets/images/image-5.png",
];

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

const fadeOutImage = () => {
  imageDecor.style.opacity = 0;
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  fadeOutImage();

  if (getCurrentTheme() === "dark") {
    setTimeout(() => {
      imageDecor.src = imageSources[1];
      imageDecor.style.opacity = 1;
    }, 150);
  } else {
    setTimeout(() => {
      imageDecor.src = imageSources[0];
      imageDecor.style.opacity = 1;
    }, 150);
  }

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const loadHeroDecor = () => {
  if (selectedTheme === null) {
    localStorage.setItem("selected-theme", "light");
    localStorage.setItem("selected-icon", "ri-moon-line");
  } else if (selectedTheme === "dark") {
    imageDecor.src = imageSources[1];
  } else {
    imageDecor.src = imageSources[0];
  }
};

document.addEventListener("DOMContentLoaded", loadHeroDecor);
