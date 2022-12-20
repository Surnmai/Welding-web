let menuBars = document.querySelector("#menu-btn");
let navItems = document.querySelector(".nav");
let bottomHeader = document.querySelector(".bottom-header ");
let backTotop = document.querySelector("#backTotop");
let year = document.querySelector("#year");

// year on footer
year.textContent = new Date().getFullYear();

// NavBar click
menuBars.onclick = () => {
  // console.log("Hello");
  menuBars.classList.toggle("fa-times");
  navItems.classList.toggle("active");
};

window.onscroll = () => {
  menuBars.classList.remove("fa-times");
  navItems.classList.remove("active");
  if (window.scrollY > 100) {
    bottomHeader.classList.add("active");
    backTotop.classList.add("active");
  } else {
    bottomHeader.classList.remove("active");
    backTotop.classList.remove("active");
  }
};

// when page is clicked hide nabar and menuBars
document.onclick = (e) => {
  // console.log(e.target);
  if (e.target.id !== "menu-btn" && e.target.id !== "nav") {
    menuBars.classList.remove("fa-times");
    navItems.classList.remove("active");
  }
};

// swiper Js

// Home page slider
var swiper = new Swiper(".home-slider ", {
  loop: true,
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// project page details slider
var swiper = new Swiper(".slide-project-details ", {
  loop: true,
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
