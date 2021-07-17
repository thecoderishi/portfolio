const menuBtn = document.querySelector('.menu-btn')
const menuBtnBurger = document.querySelector('.menu-btn__burger ')
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.menu-nav')
const items = document.querySelectorAll('.menu-nav__item')
let showMenu = false

menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        menuBtnBurger.classList.add('open')
        nav.classList.add('open')
        navMenu.classList.add('open')
        items.forEach((item) => item.classList.add('open'))
        showMenu = true
    } else {
        menuBtnBurger.classList.remove('open')
        nav.classList.remove('open')
        navMenu.classList.remove('open')
        items.forEach((item) => item.classList.remove('open'))
        showMenu = false
    }
})