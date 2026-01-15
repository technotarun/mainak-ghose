document.addEventListener('DOMContentLoaded', () => {
    
    /* ===========================
       Mobile Navigation Toggle
    =========================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    menuToggle.addEventListener('click', () => {
        // Toggle active class on the ul link list
        navLinks.classList.toggle('active');
        // Toggle icon shape (bars to times/X)
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when a link is clicked (for single page navigation)
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    /* ===========================
       Scroll Animations (Intersection Observer)
    =========================== */
    // Select all elements with 'hidden-' classes
    const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-up');

    const observerOptions = {
        root: null, // Use viewport
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If element is in view
            if(entry.isIntersecting) {
                // Add the class that brings it back to original position/opacity
                entry.target.classList.add('show-animate');
                // Stop observing once animated (optional, saves resources)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing the elements
    hiddenElements.forEach(el => observer.observe(el));

});