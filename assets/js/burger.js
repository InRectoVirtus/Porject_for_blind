const burgerButton = document.getElementById('burger_button');
const burgerMenu = document.getElementById('burger_menu');
const burgerLink = document.getElementById('links')

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
} 


//нужно сделать так чтобы при нажатии линка убиралось меню
// доделать предохранитель чтобы при 651px убиралось вовсе меню, а когда возращаешься в положение 650px - меню не включено