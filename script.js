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
