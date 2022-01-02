function showMenu() {
    let nav_links = document.getElementById('nav-links');
    let close_menu = document.getElementById('close-menu');
    nav_links.classList.add('responsive');
    close_menu.classList.add('responsive');
}

function closeMenu() {
    let nav_links = document.getElementById('nav-links');
    let close_menu = document.getElementById('close-menu');
    nav_links.classList.remove('responsive');
    close_menu.classList.remove('responsive');
}