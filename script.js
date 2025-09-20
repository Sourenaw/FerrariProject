// menu codes
const menu = document.querySelector(".menu-mobile-user");
const openMenu = document.querySelector(".openMenu");
const removeMenu = document.querySelector(".removeMenu");

menu.addEventListener('click' , () => {
    openMenu.classList.add('active')
})
removeMenu.addEventListener('click' , () => {
    openMenu.classList.remove('active')
})