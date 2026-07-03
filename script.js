
const root = document.querySelector(":root");
const darkModeSwitch = document.getElementById("dark-mode-switch");
darkModeSwitch.addEventListener("click", () => {
    root.classList.toggle("dark-mode");
    
    // Change hero banners
    const heroBannerImagesDark = document.querySelectorAll(".hero-banner-image-dark-mode");
    if(root.classList.contains("dark-mode")) {
        heroBannerImagesDark.forEach(img => img.style.opacity = 1);
        return;
    }
    heroBannerImagesDark.forEach(img => img.style.opacity = 0);

});