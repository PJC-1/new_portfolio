///////////////
// HAMBURGER //
///////////////

function hamburger() {
    var x = document.getElementById('navbar-id');
    if(x.className === 'navbar') {
        x.className += ' responsive';
    } else {
        x.className = 'navbar';
    }
}



//////////////
// CAROUSEL //
//////////////

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    if(n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
