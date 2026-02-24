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

// Tutup menu saat salah satu link diklik
const navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
    });
});