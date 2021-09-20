const header = document.querySelector("header");
const sectionOne = document.querySelector(".ban1");

const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px"
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