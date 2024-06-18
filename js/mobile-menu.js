const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnOpen = document.querySelector('.burger-menu')
const menuBtnClose = document.querySelectorAll('.menu-btn-close')

const openMenu = () => mobileMenu.classList.add('is-open')
const closeMenu = () => mobileMenu.classList.remove('is-open')

menuBtnOpen.addEventListener('click', openMenu)

menuBtnClose.forEach(function (menuBtnClose) {
  menuBtnClose.addEventListener('click', closeMenu)
})
