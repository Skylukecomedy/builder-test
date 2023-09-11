const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(event){
       event.preventDefault();
        close();
        scrollToTop();
    })
})

function show() {
    const scrollY = window.scrollY;
    mainMenu.style.top = `${scrollY}px`;
    mainMenu.style.display = 'flex';
}
function close(){
    mainMenu.style.top = '-100%';
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
