// Main JavaScript file for all pages

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger button and nav menu elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if elements exist before adding event listeners
    if (hamburger && navLinks) {
        // Toggle menu when hamburger is clicked
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Hamburger clicked, menu toggled');
        });
        
        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Nav link clicked, menu closed');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && !e.target.closest('#navbar')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Clicked outside, menu closed');
            }
        });
    } else {
        console.error('Hamburger menu elements not found');
    }
});



// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links li a');
    const navLength = navLinks.length;
    
    for (let i = 0; i < navLength; i++) {
        if (navLinks[i].getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1)) {
            navLinks[i].classList.add('active');
        } else if (currentLocation.substring(currentLocation.lastIndexOf('/') + 1) === '' && navLinks[i].getAttribute('href') === 'index.html') {
            navLinks[i].classList.add('active');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll (simple implementation)
window.addEventListener('scroll', revealElements);

function revealElements() {
    const elements = document.querySelectorAll('.section-heading, .skill-item, .project-card, .contact-item, .about-image, .about-text');
    
    for (let i = 0; i < elements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = elements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add('visible');
        }
    }
}