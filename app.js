const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.position = 'fixed';
    mainMenu.style.top = '0';
    mainMenu.style.left = '0';
    mainMenu.style.right = '0';
    mainMenu.style.bottom = '0';
}

function close() {
    mainMenu.style.position = 'initial'; // Reset the position
    mainMenu.style.display = 'none';
    openMenu.style.display = 'block'; // Show the hamburger button
    closeMenu.style.display = 'none'; // Hide the close button
    location.reload();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
}
