const burgerButton = document.getElementById('burger_button');
const burgerMenu = document.getElementById('burger_menu');

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle('active')
    })
}