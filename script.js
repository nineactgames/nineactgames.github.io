```javascript
// script.js - For any JavaScript functionalities

document.addEventListener('DOMContentLoaded', () => {
    // Example: A simple console log to confirm script is loaded
    console.log('Nineact Games website script loaded!');

    // You can add more complex JavaScript here later,
    // e.g., for interactive elements, animations, forms, etc.

    // Example of a basic smooth scroll for anchor links (if not using Tailwind's scroll-smooth class)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple animation for the hero section text (already handled by Tailwind's animate-pulse)
    // If you need more complex JS animations, they would go here.
});
