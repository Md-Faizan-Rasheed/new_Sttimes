
// header 
// script.js
const newNavLinks = document.getElementById("navigationLinks");
const newBtn = document.querySelector(".menu-toggle-btn");

function toggleNewMenu() {
    if (newNavLinks.style.display === "none") {
        newNavLinks.style.display = "flex";
        newNavLinks.style.flexDirection = "column";
        newNavLinks.style.width = "100%";
        newNavLinks.style.marginTop = "10px";
    } else {
        newNavLinks.style.display = "none";
    }
}

function handleNewResize() {
    const width = window.innerWidth;

    if (width < 998) {
        newBtn.style.display = "block";
        if (!newNavLinks.dataset.toggled || newNavLinks.dataset.toggled === "false") {
            newNavLinks.style.display = "none";
        }
    } else {
        newBtn.style.display = "none";
        newNavLinks.style.display = "flex";
        newNavLinks.style.flexDirection = "row";
        newNavLinks.style.width = "auto";
        newNavLinks.dataset.toggled = "false";
    }
}

newBtn.addEventListener("click", () => {
    const isVisible = newNavLinks.style.display === "flex";
    newNavLinks.dataset.toggled = isVisible ? "true" : "false";
});

window.addEventListener("resize", handleNewResize);
window.addEventListener("load", handleNewResize);



function toggleItem(key) {
const desc = document.getElementById('desc-' + key);
const img = document.getElementById('img-' + key);

const isActive = desc.classList.contains('active');

// Hide all descriptions & images
document.querySelectorAll('.description').forEach(el => el.classList.remove('active'));
document.querySelectorAll('.phone img').forEach(el => el.classList.remove('active'));

if (!isActive) {
desc.classList.add('active');
img.classList.add('active');
}
}

// document.addEventListener('DOMContentLoaded', function() {
//     const navItems = document.querySelectorAll('.nav-item');
//     const dropdown = document.getElementsByClassName("drop_down")[0];
//     const dropup   = document.getElementsByClassName("cherwon")[0];

//     navItems.forEach(item => {
//         item.addEventListener('click', function() {


//             // if (dropdown.style.display == "none") {
//             //     dropup.style.display = "none";
//             //  dropdown.style.display = "block";
            
//             //  console.log("they came under the block");
//             // }
//             // else if(dropdown.style.display == "block"){
//             //     dropdown.style.display = "none";
//             //     dropup.style.display = "block";
//             // }

//             console.log(dropdown);
//             console.log(dropup);
//             // Remove active class from all items
//             navItems.forEach(nav => nav.classList.remove('active'));
            
//             // Add active class to clicked item 
//             this.classList.add('active');
            
            
//             // Get target content ID
//             const target = this.getAttribute('data-target');
            
//             // Hide all content and images
//             document.querySelectorAll('.slider-content').forEach(content => {
//                 content.classList.remove('active');
//             });
            
//             document.querySelectorAll('.slider-image').forEach(image => {
//                 image.classList.remove('active');
//             });
            
//             // Show target content and image
//             document.getElementById(`${target}-content`).classList.add('active');
//             document.getElementById(`${target}-image`).classList.add('active');
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const navItems = document.querySelectorAll('.nav-item');
//     const dropdown = document.getElementsByClassName("drop_down")[0];
//     const dropup = document.getElementsByClassName("cherwon")[0];

//     navItems.forEach(item => {
//         item.addEventListener('click', function() {
//             const isActive = this.classList.contains('active');

//             // Remove active class from all items
//             navItems.forEach(nav => nav.classList.remove('active'));

//             // Hide all content and images
//             document.querySelectorAll('.slider-content').forEach(content => {
//                 content.classList.remove('active');
//             });

//             document.querySelectorAll('.slider-image').forEach(image => {
//                 image.classList.remove('active');
//             });

//             if (isActive) {
//                 // If already active, hide dropdown and show dropup
//                 dropdown.style.display = "none";
//                 dropup.style.display = "block";
//             } else {
//                 // Add active class to clicked item
//                 this.classList.add('active');

//                 // Show corresponding content and image
//                 const target = this.getAttribute('data-target');
//                 document.getElementById(`${target}-content`).classList.add('active');
//                 document.getElementById(`${target}-image`).classList.add('active');

//                 // Show dropdown and hide dropup
//                 dropdown.style.display = "block";
//                 dropup.style.display = "none";
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const navItems = document.querySelectorAll('.nav-item');

//     navItems.forEach(item => {
//         item.addEventListener('click', function () {
//             const wrapper = this.closest('.first_bullets');
//             const dropdown = wrapper.querySelector('.drop_down');
//             const dropup = wrapper.querySelector('.cherwon');
//             const isActive = this.classList.contains('active');

//             // Deactivate all items and hide their dropdowns
//             document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
//             document.querySelectorAll('.drop_down').forEach(d => d.style.display = 'none');
//             document.querySelectorAll('.cherwon').forEach(u => u.style.display = 'block');
//             document.querySelectorAll('.slider-content').forEach(content => content.classList.remove('active'));
//             document.querySelectorAll('.slider-image').forEach(image => image.classList.remove('active'));

//             if (!isActive) {
//                 // Activate current nav
//                 this.classList.add('active');
                
//                 // Show its dropdown, hide its dropup
//                 dropdown.style.display = 'block';
//                 dropup.style.display = 'none';

//                 // Show target content and image
//                 const target = this.getAttribute('data-target');
//                 document.getElementById(`${target}-content`).classList.add('active');
//                 document.getElementById(`${target}-image`).classList.add('active');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const isActive = this.classList.contains('active');
            const dropdown = this.querySelector('.drop_down');
            const dropup = this.querySelector('.cherwon');

            // Deactivate all items and reset UI
            navItems.forEach(nav => {
                nav.classList.remove('active');
                const dd = nav.querySelector('.drop_down');
                const du = nav.querySelector('.cherwon');
                if (dd) dd.style.display = 'block';
                if (du) du.style.display = 'none';
            });

            document.querySelectorAll('.slider-content').forEach(content => content.classList.remove('active'));
            document.querySelectorAll('.slider-image').forEach(image => image.classList.remove('active'));

            if (!isActive) {
                // Activate clicked item
                this.classList.add('active');
                if (dropdown) dropdown.style.display = 'none';
                if (dropup) dropup.style.display = 'block';

                // Show corresponding content
                const target = this.getAttribute('data-target');
                const contentElement = document.getElementById(`${target}-content`);
                const imageElement = document.getElementById(`${target}-image`);

                if (contentElement) contentElement.classList.add('active');
                if (imageElement) imageElement.classList.add('active');
            }
        });
    });
});




const slider = document.getElementById('slider');
function slideLeft() {
slider.scrollBy({ left: -250, behavior: 'smooth' });
}
function slideRight() {
slider.scrollBy({ left: 250, behavior: 'smooth' });
}


const slider21 = document.querySelector('.testimonial-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = slider.children.length;

function updateSlider() {
slider21.style.transform = `translateX(-${currentSlide * 100}%)`;
dots.forEach(dot => dot.classList.remove('active'));
dots[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => {
currentSlide = (currentSlide + 1) % totalSlides;
updateSlider();
});

prevBtn.addEventListener('click', () => {
currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
updateSlider();
});

dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentSlide = index;
updateSlider();
});
});

function slideCards(direction) {
      const container = document.getElementById("cardSlider");
      const cardWidth = container.offsetWidth;
      container.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
    }

//         const newNavLinks = document.getElementById("navigationLinks");
// const newBtn = document.querySelector(".menu-toggle-btn");

// function toggleNewMenu() {
//     if (newNavLinks.style.display === "none") {
//         newNavLinks.style.display = "flex";
//         newNavLinks.style.flexDirection = "column";
//         newNavLinks.style.width = "100%";
//         newNavLinks.style.marginTop = "10px";
//     } else {
//         newNavLinks.style.display = "none";
//     }
// }

// function handleNewResize() {
//     const width = window.innerWidth;

//     if (width < 990) {
//         newBtn.style.display = "block";
//         if (!newNavLinks.dataset.toggled || newNavLinks.dataset.toggled === "false") {
//             newNavLinks.style.display = "none";
//         }
//     } else {
//         newBtn.style.display = "none";
//         newNavLinks.style.display = "flex";
//         newNavLinks.style.flexDirection = "row";
//         newNavLinks.style.width = "auto";
//         newNavLinks.dataset.toggled = "false";
//     }
// }

// newBtn.addEventListener("click", () => {
//     const isVisible = newNavLinks.style.display === "flex";
//     newNavLinks.dataset.toggled = isVisible ? "true" : "false";
// });


 document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_xq828m7", "template_0570elj", this)
      .then(function(response) {
        alert("Form submitted successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to submit form.");
        console.log("FAILED...", error);
      });
  });