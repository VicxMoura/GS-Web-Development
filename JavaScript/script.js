$(document).ready(function() {

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
});

ScrollReveal().reveal('.image-container', {
    origin: 'top',
    duration: 1500,
    distance: '20%'
});

ScrollReveal().reveal('.text-container', {
    origin: 'top',
    duration: 1500,
    distance: '20%'
});

var modal = document.getElementById('loginModal');

var loginBtn = document.getElementById('loginBtn');

var closeBtn = document.getElementsByClassName('close')[0];


loginBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);


function openModal() {
    modal.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}