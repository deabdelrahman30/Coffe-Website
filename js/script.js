// Swiper js
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Nav open close
const body = document.querySelector("body"),
  navMenu = body.querySelector(".menu-content"),
  navOpenbtn = body.querySelector(".navOpen-btn"),
  navClosebtn = navMenu.querySelector(".navClose-btn");

if (navMenu && navOpenbtn) {
  navOpenbtn.addEventListener("click", () => {
    navMenu.classList.add("open");
  });
}

if (navMenu && navClosebtn) {
  navClosebtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
}

window.addEventListener("scroll", () => {
  // Change header bg color
  const scrollY = window.pageYOffset;
  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const ScrollUpButton = document.querySelector(".scrollUp-btn");
  if (scrollY > 150) {
    ScrollUpButton.classList.add("scrollBtn-active");
  } else {
    ScrollUpButton.classList.remove("scrollBtn-active");
  }

  // Nav link indicator
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60;
    let navId = document.querySelector(`.menu-content a[href*=${section.id}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navLink");
    } else {
      navId.classList.remove("active-navLink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: `top`,
  distance: `60px`,
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.section-subtitle, .section-title, .section-description, .brand-image, .testimonial, .newsletter,
  .newsletter .logo-content, .newsletter-inputBox, .newsletter-media-icons, .footer-content, .footer-links`,
  { interval: 100 }
);
sr.reveal(`.about-imageContent, .menu-items`, { origin: "left" });
sr.reveal(`.about-details, .time-table`, { origin: "right" });
