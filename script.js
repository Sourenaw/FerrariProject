// menu codes
const menu = document.querySelector(".menu-mobile-user");
const openMenu = document.querySelector(".openMenu");
const removeMenu = document.querySelector(".removeMenu");
menu.addEventListener("click", () => openMenu.classList.add("active"));
removeMenu.addEventListener("click", () => openMenu.classList.remove("active"));

// hide and show menu when scrolling
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", scrolling);

function scrolling() {
  const currentScroll = window.scrollY;

  // when fixed to top of website
  if (currentScroll <= 0) {
    header.classList.remove("notActive");
    header.classList.remove("active");
  }
  // when scroll to bottom
  else if (currentScroll > lastScroll) {
    header.classList.add("notActive");
    header.classList.remove("active");
  }
  // scroll to top
  else {
    header.classList.remove("notActive");
    header.classList.add("active");
  }

  lastScroll = currentScroll;
}

// sliders video section 2
const slides = document.querySelectorAll(".slide-video");
const selects = document.querySelectorAll(".selectVideo");
let count = 0;
let sliderInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  selects.forEach((select) => select.classList.remove("active"));
  selects[index].classList.add("active");
  count = index; // آپدیت شمارنده
}

selects.forEach((select, index) => {
  select.addEventListener("click", () => {
    showSlide(index);
    resetInterval();
  });
});

function nextSlide() {
  let next = count + 1 >= slides.length ? 0 : count + 1;
  showSlide(next);
}

function startInterval() {
  sliderInterval = setInterval(nextSlide, 12000);
}

function resetInterval() {
  clearInterval(sliderInterval);
  startInterval();
}

startInterval();