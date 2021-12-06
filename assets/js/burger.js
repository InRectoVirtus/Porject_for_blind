const burgerButton = document.getElementById('burger_button');
const burgerMenu = document.getElementById('burger_menu');
const burgerLink = document.getElementById('links')

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
} 