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