
const root = document.querySelector(":root");
const theme = window.matchMedia('(prefers-color-scheme: dark)');

theme.addEventListener("change", handleThemeChange);

function handleThemeChange(e) {
    const heroBannerImagesDark = document.querySelectorAll(".hero-banner-image-dark-mode");
    if(e.matches) {
        heroBannerImagesDark.forEach(img => img.style.opacity = 1);
    }
    else {
        heroBannerImagesDark.forEach(img => img.style.opacity = 0);
    }
}