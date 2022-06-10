// Show/hide button
window.onload = function() {
    setTimeout(function() {
        scrollTo(0, 0);
    }, 10); //100ms for example
}

function toggle_visibility() {
    // var d_none = document.getElementById('d-text-display-none');
    // console.log(d_none.id)

    if (document.getElementById('d-text-display-none') != undefined) {
        document.getElementById('d-text-display-none').id = 'd-text-display-block'
        document.getElementById("hamburger-nav").className = "fas fa-times fs-1 text-secondary";
    } else {
        document.getElementById('d-text-display-block').id = 'd-text-display-none'
        document.getElementById("hamburger-nav").className = "fas fa-bars fs-1 text-secondary";
    }
    // var e = document.getElementById('d-text-display-none');
    // if (e.style.display == 'block')
    //     e.style.display = 'none';
    // else
    //     e.style.display = 'block';
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".sidebar-center a[href*=" + sectionId + "] .bg-sidebar").classList.add("active");
        } else {
            document.querySelector(".sidebar-center a[href*=" + sectionId + "] .bg-sidebar").classList.remove("active");
        }


    });
}

//  Animate on scroll effect

AOS.init();

// typing effect
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// Gallery filter
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

// Testimonials slide
new Splide('.splide', {
    type: 'loop',
    arrows: false,
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
        640: {
            pagination: false,
        },
    }
}).mount();