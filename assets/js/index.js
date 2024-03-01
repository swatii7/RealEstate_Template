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
function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function(e) {
            var current = this;
            var contentElement = current.querySelector('.properties-content');

            if (current.classList.contains('slide-active')) {
                current.classList.add('slide-active');
                if (contentElement) {
                    contentElement.classList.add('content-active');
                }
            } else {
                // Remove active class from all slides
                for (var j = 0; j < elem.length; j++) {
                    elem[j].classList.remove('slide-active');
                    var otherContentElement = elem[j].querySelector('.properties-content');
                    if (otherContentElement) {
                        otherContentElement.classList.remove('content-active');
                    }
                }
                // Add active class to the clicked slide
                current.classList.add('slide-active');
                if (contentElement) {
                    contentElement.classList.add('content-active');
                }
            }

            e.preventDefault();
        });
    }
}

toggleItem(document.querySelectorAll('.property-slide'));


// carousel function

$(document).ready(function(){
    $('.testimonial-slide_Wrapper').slick({
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1,
        slideToScroll: 6,
        dots: false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
//  gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".downIcon-wrapper",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      markers: false,
      pinSpacing: false

    }
  });
  tl.to(".downArrow", {yPercent: 350, duration: 1})
  tl.to(".downArrow", {rotation: 180, duration: 3})


  gsap.fromTo(".real_estate-img", {x: -900, duration: 6}, {x: 0, duration: 6})
  gsap.fromTo(".rental_estate-img", {x: 900, duration: 6}, {x: 0, duration: 6})
