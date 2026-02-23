// Ambil element
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#menu');

// Klik hamburger
menu.onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar navbar untuk menutup
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});