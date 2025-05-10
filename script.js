
// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


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

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get target content ID
            const target = this.getAttribute('data-target');
            
            // Hide all content and images
            document.querySelectorAll('.slider-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.querySelectorAll('.slider-image').forEach(image => {
                image.classList.remove('active');
            });
            
            // Show target content and image
            document.getElementById(`${target}-content`).classList.add('active');
            document.getElementById(`${target}-image`).classList.add('active');
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
