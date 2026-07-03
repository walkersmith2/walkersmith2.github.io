
const root = document.querySelector(":root");
const darkModeSwitch = document.getElementById("dark-mode-switch");
darkModeSwitch.addEventListener("click", () => {
    root.classList.toggle("dark-mode");
    
    // Change hero banners
    const heroBannerImageSrcLight = "./assets/images/hero-banner-image.jpg";
    const heroBannerImageSrcDark = "./assets/images/hero-banner-image-dark-mode.jpg";
    const heroBannerImages = document.querySelectorAll(".hero-banner-image");
    if(root.classList.contains("dark-mode")) {
        heroBannerImages.forEach((elem) => elem.src = heroBannerImageSrcLight);
        return;
    }
    heroBannerImages.forEach((elem) => elem.src = heroBannerImageSrcDark);

});