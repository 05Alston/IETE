const header = document.querySelector("header");
const sectionOne = document.querySelector(".ban1");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {

    if (!entry.isIntersecting) {
      header.classList.remove("nav-unscrolled");
      header.classList.add("nav-scrolled");
    } else{
      header.classList.remove("nav-scrolled");
      header.classList.add("nav-unscrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/*NavBar*/
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-links>a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
}