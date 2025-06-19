// script.js - For any JavaScript functionalities (किसी भी जावास्क्रिप्ट कार्यक्षमताओं के लिए)

document.addEventListener('DOMContentLoaded', () => {
    // Example: A simple console log to confirm script is loaded (उदाहरण: स्क्रिप्ट लोड होने की पुष्टि के लिए एक साधारण कंसोल लॉग)
    console.log('Nineact Games website script loaded!');

    // Mobile Menu Toggle functionality (मोबाइल मेनू टॉगल कार्यक्षमता)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist before adding event listeners (इवेंट लिसनर्स जोड़ने से पहले दोनों एलिमेंट्स मौजूद हैं या नहीं, यह जांचें)
    if (mobileMenuButton && mobileMenu) {
        console.log('Mobile menu button and menu found! Attaching event listener.'); // Debugging log
        // Add click event listener to the mobile menu button (मोबाइल मेनू बटन पर क्लिक इवेंट लिसनर जोड़ें)
        mobileMenuButton.addEventListener('click', () => {
            console.log('Mobile menu button clicked!'); // Debugging log: This should appear on every click (यह हर क्लिक पर दिखना चाहिए)

            // Toggle the 'hidden' class to show/hide the menu (मेनू को दिखाने/छिपाने के लिए 'hidden' क्लास को टॉगल करें)
            mobileMenu.classList.toggle('hidden');
            // Toggle 'flex' to apply flexbox layout when visible for vertical stacking on mobile (मोबाइल पर लंबवत स्टैकिंग के लिए visible होने पर फ्लेक्सबॉक्स लेआउट लागू करने के लिए 'flex' को टॉगल करें)
            mobileMenu.classList.toggle('flex');

            // Toggle positioning and styling classes for the expanded mobile menu (विस्तारित मोबाइल मेनू के लिए पोजिशनिंग और स्टाइलिंग क्लासेस को टॉगल करें)
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-full');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('w-full');
            mobileMenu.classList.toggle('shadow-xl'); // Add a shadow for better visual separation (बेहतर दृश्य पृथक्करण के लिए एक छाया जोड़ें)
            mobileMenu.classList.toggle('py-4'); // Add vertical padding to the menu content (मेनू सामग्री में लंबवत पैडिंग जोड़ें)

            console.log('Mobile menu classes after toggle:', mobileMenu.classList.value); // Debugging log
        });

        // Close mobile menu when a navigation link is clicked inside it (जब इसके अंदर किसी नेविगेशन लिंक पर क्लिक किया जाता है तो मोबाइल मेनू बंद करें)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Navigation link clicked inside mobile menu.'); // Debugging log
                // Only close the menu if it's currently visible AND on a mobile breakpoint (केवल तभी मेनू बंद करें जब यह वर्तमान में दिखाई दे रहा हो और मोबाइल ब्रेकपॉइंट पर हो)
                if (!mobileMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    mobileMenu.classList.add('hidden'); // Hide the menu (मेनू छिपाएं)
                    mobileMenu.classList.remove('flex'); // Remove flex display (फ्लेक्स डिस्प्ले हटाएँ)
                    // Ensure all other toggled classes are also removed when closing (बंद करते समय अन्य सभी टॉगल की गई क्लासेस को भी हटाना सुनिश्चित करें)
                    mobileMenu.classList.remove('absolute');
                    mobileMenu.classList.remove('top-full');
                    mobileMenu.classList.remove('left-0');
                    mobileMenu.classList.remove('w-full');
                    mobileMenu.classList.remove('shadow-xl');
                    mobileMenu.classList.remove('py-4');
                    console.log('Mobile menu closed after link click.'); // Debugging log
                }
            });
        });

        // Hide mobile menu on resize if it transitions to desktop view (रिसाइज पर मोबाइल मेनू छिपाएं यदि यह डेस्कटॉप व्यू में बदल जाता है)
        window.addEventListener('resize', () => {
            console.log('Window resized. Current width:', window.innerWidth); // Debugging log
            if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint (ट्विनविंड का 'md' ब्रेकपॉइंट)
                // If on desktop size, ensure the menu is visible and styled for desktop (यदि डेस्कटॉप आकार पर है, तो सुनिश्चित करें कि मेनू दिखाई दे रहा है और डेस्कटॉप के लिए स्टाइल किया गया है)
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex'); // Ensure flex for desktop layout (डेस्कटॉप लेआउट के लिए फ्लेक्स सुनिश्चित करें)
                // Remove mobile-specific positioning and styling (मोबाइल-विशिष्ट पोजिशनिंग और स्टाइलिंग हटाएँ)
                mobileMenu.classList.remove('absolute');
                mobileMenu.classList.remove('top-full');
                mobileMenu.classList.remove('left-0');
                mobileMenu.classList.remove('w-full');
                mobileMenu.classList.remove('shadow-xl');
                mobileMenu.classList.remove('py-4');
                console.log('Menu adjusted for desktop view.'); // Debugging log
            } else {
                // If on mobile size, ensure the menu is hidden by default (यदि मोबाइल आकार पर है, तो सुनिश्चित करें कि मेनू डिफ़ॉल्ट रूप से छिपा हुआ है)
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex'); // Remove flex display when hidden (छिपा होने पर फ्लेक्स डिस्प्ले हटाएँ)
                console.log('Menu adjusted for mobile view.'); // Debugging log
            }
        });
    } else {
        console.error('Mobile menu button or menu element not found in the DOM!'); // Critical error log
        if (!mobileMenuButton) {
            console.error('Element with ID "mobile-menu-button" not found.');
        }
        if (!mobileMenu) {
            console.error('Element with ID "mobile-menu" not found.');
        }
    }

    // Example of a basic smooth scroll for anchor links (if not using Tailwind's scroll-smooth class)
    // (एंकर लिंक्स के लिए एक बुनियादी स्मूथ स्क्रॉल का उदाहरण (यदि ट्विनविंड की स्क्रॉल-स्मूथ क्लास का उपयोग नहीं कर रहे हैं))
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior (डिफ़ॉल्ट एंकर क्लिक व्यवहार को रोकें)

            // Smoothly scroll to the target element (लक्ष्य तत्व तक सुचारू रूप से स्क्रॉल करें)
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple animation for the hero section text (already handled by Tailwind's animate-pulse)
    // If you need more complex JS animations, they would go here.
    // (हीरो सेक्शन टेक्स्ट के लिए साधारण एनीमेशन (ट्विनविंड के animate-pulse द्वारा पहले से ही हैंडल किया गया है)
    // यदि आपको अधिक जटिल JS एनीमेशन की आवश्यकता है, तो वे यहां जाएंगे।)
});
