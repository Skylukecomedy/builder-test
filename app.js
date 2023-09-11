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
    mainMenu.style.top = `${window.scrollY}px`; // Set the top position to current scrollY
    mainMenu.style.display = 'flex';
}

function close() {
    mainMenu.style.top = `${window.scrollY}px`; // Set the top position to current scrollY
    openMenu.style.display = 'block'; // Show the hamburger button
    closeMenu.style.display = 'none'; // Hide the close button
    location.reload();
}

