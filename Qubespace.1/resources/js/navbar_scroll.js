const navbar = document.querySelector('.fixed-top');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


//tooltip script
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })