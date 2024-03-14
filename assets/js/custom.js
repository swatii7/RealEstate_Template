jQuery(document).ready(function($){
    $('.testimonial-slide_Wrapper').slick({
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1,
        slideToScroll: 6,
        dots: false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
})

// make navbar sticky
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('sticky')
    } else{
        $('.navbar').removeClass('sticky')
    }
});

// make navlink active
// var navLink = document.getElementsByClassName('nav-link')
// document.querySelectorAll('nav-link').forEach(links =>{
//     if(links.href === window.location.href){
//         navLink.classList.add('active')
//     }

// })

// js of tooltips

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
//  gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger: {
//     trigger: ".downIcon-wrapper",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     markers: false,
//     pinSpacing: false

//     }
// });

// function shouldRunAnimation() {
//     return window.innerWidth > 768; // Adjust this value according to your screen size threshold
// }

// if(shouldRunAnimation()){
//     tl.to(".downArrow", {yPercent: 350, duration: 1})
//     tl.to(".downArrow", {rotation: 180, duration: 3})
   
// }
// window.addEventListener('load', function() {
//     // Your GSAP animation code goes here
//     const realEstateImg = document.querySelector(".real_estate-img");
//     const rentalEstateImg = document.querySelector(".rental_estate-img");
  
//     gsap.fromTo(realEstateImg, {x: -900, duration: 6}, {
//       x: 0,
//       duration: 6,
//       onStart: function() {
//         // Add overflow hidden class when animation starts
//         document.body.classList.add('overflow-x-hidden');
//       },
//       onComplete: function() {
//         // Remove overflow hidden class when animation completes
//         document.body.classList.remove('overflow-x-hidden');
//       }
//     });
  
//     gsap.fromTo(rentalEstateImg, {x: 900, duration: 6}, {
//       x: 0,
//       duration: 6,
//       onStart: function() {
//         // Add overflow hidden class when animation starts
//         document.body.classList.add('overflow-x-hidden');
//       },
//       onComplete: function() {
//         // Remove overflow hidden class when animation completes
//         document.body.classList.remove('overflow-x-hidden');
//       }
//     });
//   });
  
