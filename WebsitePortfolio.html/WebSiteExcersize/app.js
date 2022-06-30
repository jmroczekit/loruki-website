const menu = document.querySelector('#mobile-menu')
const manuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    manuLinks.classList.toggle('active')
});