const Menus = document.querySelector('#menus');
const navMenu = document.querySelector('#nav-menu')

Menus.addEventListener('click', function() {
    Menus.classList.toggle('menus-active')
    navMenu.classList.toggle('hidden')
})