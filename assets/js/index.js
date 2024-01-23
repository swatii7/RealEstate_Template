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
    // Set the first slide and its properties-content as active by default
    elem[0].classList.add('slide-active');
    var firstContentElement = elem[0].querySelector('.properties-content');
    if (firstContentElement) {
        firstContentElement.classList.add('content-active');
    }

    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('slide-active');
                    var contentElement = elem[i].querySelector('.properties-content');
                    if (contentElement) {
                        contentElement.classList.remove('content-active');
                    }
                } else if (current.classList.contains('slide-active') === true) {
                    current.classList.remove('slide-active');
                    var contentElement = current.querySelector('.properties-content');
                    if (contentElement) {
                        contentElement.classList.remove('content-active');
                    }
                } else {
                    current.classList.add('slide-active');
                    var contentElement = current.querySelector('.properties-content');
                    if (contentElement) {
                        contentElement.classList.add('content-active');
                    }
                }
            }
            e.preventDefault();
        });
    }
}

toggleItem(document.querySelectorAll('.property-slide'));



