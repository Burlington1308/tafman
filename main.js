const navbarMenu = document.querySelector('.nav-items');
const navbarToggle = document.querySelector('.mobile');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
})