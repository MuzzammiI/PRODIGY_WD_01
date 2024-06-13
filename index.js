document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const homeS = document.getElementById("home");
    const aboutS = document.getElementById("about");
    const servicesS = document.getElementById("services");
    const contactS = document.getElementById("contact");
    const homeId = document.getElementById("home")


    window.addEventListener("scroll", function() {

        if (window.scrollY > 0 && window.scrollY < 650) {
            homeS.classList.toggle("scrollCss");
        }
        else if(window.scrollY >= 650 && window.scrollY <= 1430) {
            aboutS.classList.toggle("scrollCss");
        }
        else if(window.scrollY >= 1430 && window.scrollY <= 2231) {
            servicesS.classList.toggle("scrollCss");
        }
        else if(window.scrollY >= 2231 && window.scrollY <= 3500) {
            contactS.classList.toggle("scrollCss");
        }
    });
});
