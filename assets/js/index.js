// make navbar sticky
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

window.onscroll = function(){
if(window.pageYOffset >= sticky){
    navbar.classList.add('sticky')
}
else{
    navbar.classList.remove('sticky');
}
}

// js of tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// function to add class on click of slider
var slides = document.querySelectorAll('.slide');
var contents = document.querySelectorAll('.properties-content');


function toggleActiveClass(clickedIndex) {
    // Remove 'slide-active' class from all slides
    slides.forEach(function (slide, index) {
        if (index === clickedIndex) {
            slide.classList.add('slide-active');
        } else {
            slide.classList.remove('slide-active');
        }
    });
}
