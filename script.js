// script.js - For any JavaScript functionalities

document.addEventListener('DOMContentLoaded', () => {
    // Example: A simple console log to confirm script is loaded
    console.log('Nineact Games website script loaded!');

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class to show/hide the menu
            mobileMenu.classList.toggle('hidden');
            // Ensure it's 'flex' when visible for vertical stacking
            mobileMenu.classList.toggle('flex');

            // Adjust these classes based on how you want the menu to appear
            // For a full-width overlay, these are useful
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-full');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('w-full');
            mobileMenu.classList.toggle('shadow-xl'); // Add a shadow when open
            mobileMenu.classList.toggle('py-4'); // Add padding when open
        });

        // Close mobile menu when a navigation link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently visible (not hidden) and on a mobile breakpoint
                // We also check window.innerWidth to ensure this only applies to mobile menu interaction
                if (!mobileMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                    // Ensure other toggled classes are also removed
                    mobileMenu.classList.remove('absolute');
                    mobileMenu.classList.remove('top-full');
                    mobileMenu.classList.remove('left-0');
                    mobileMenu.classList.remove('w-full');
                    mobileMenu.classList.remove('shadow-xl');
                    mobileMenu.classList.remove('py-4');
                }
            });
        });

        // Hide mobile menu on resize if it becomes desktop view
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex'); // Ensure flex for desktop
                // Remove mobile-specific positioning
                mobileMenu.classList.remove('absolute');
                mobileMenu.classList.remove('top-full');
                mobileMenu.classList.remove('left-0');
                mobileMenu.classList.remove('w-full');
                mobileMenu.classList.remove('shadow-xl');
                mobileMenu.classList.remove('py-4'); // Remove mobile padding
            } else {
                // Re-apply hidden by default on mobile if it was open on desktop
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
    }

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
