const openMenuButton = document.querySelector('[openMobileMenu]');
const mobileMenu = document.querySelector('[mobileMenu]');
const mobileMenuButtons = document.querySelectorAll('.mobile-menu__wrapper a');

openMenuButton.addEventListener('click', () => {
    openMenuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

for( btn of mobileMenuButtons) {
    btn.addEventListener('click', () => {
        openMenuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
    })
}