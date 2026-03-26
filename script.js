// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // ===========================
    // Testimonials Slider
    // ===========================
    if (typeof $ !== 'undefined' && $.fn.slick) {
        $('.testimonials-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            adaptiveHeight: true
        });

        // Custom navigation buttons
        $('.slider-prev').on('click', function() {
            $('.testimonials-slider').slick('slickPrev');
        });

        $('.slider-next').on('click', function() {
            $('.testimonials-slider').slick('slickNext');
        });
    }

    // ===========================
    // Scroll Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, delay * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-delay attribute
    const animatedElements = document.querySelectorAll('[data-delay]');
    animatedElements.forEach(el => observer.observe(el));

    // Observe section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(el => observer.observe(el));

    // ===========================
    // Service Cards Animation
    // ===========================
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        observer.observe(card);
    });

    // ===========================
    // Sticky Header Effect
    // ===========================
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ===========================
    // Mobile Call Button Visibility
    // ===========================
    const mobileCallBtn = document.querySelector('.mobile-call-btn');
    
    if (mobileCallBtn && window.innerWidth < 768) {
        setTimeout(() => {
            mobileCallBtn.classList.add('visible');
        }, 1000);
    }

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===========================
    // Newsletter Form Submission
    // ===========================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing! We\'ll send our Senior Wellness guide to ' + email);
            emailInput.value = '';
        });
    }

    // ===========================
    // Set Current Year in Footer
    // ===========================
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===========================
    // Active Navigation Link
    // ===========================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveNavLink();

    // ===========================
    // Image Lazy Loading
    // ===========================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ===========================
    // Performance: Debounce Scroll Events
    // ===========================
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Apply debounce to scroll events
    window.addEventListener('scroll', debounce(function() {
        // Scroll-based animations can be added here
    }, 15));

    // ===========================
    // Accessibility: Keyboard Navigation for Dropdowns
    // ===========================
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdownMenu.style.opacity = dropdownMenu.style.opacity === '1' ? '0' : '1';
                dropdownMenu.style.visibility = dropdownMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
            }
        });
    }

    // ===========================
    // Console Welcome Message
    // ===========================
    console.log('%c Welcome to GoldenHaven Senior Care ', 'background: #7D9070; color: #F9F7F2; padding: 10px; border-radius: 5px; font-size: 16px; font-weight: bold;');
    console.log('%c Caring for Seniors with Dignity & Love ', 'color: #7D9070; font-size: 14px; padding: 5px;');
});

// ===========================
// Window Resize Handler
// ===========================
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive adjustments
        const mobileCallBtn = document.querySelector('.mobile-call-btn');
        if (mobileCallBtn) {
            if (window.innerWidth >= 768) {
                mobileCallBtn.style.display = 'none';
            } else {
                mobileCallBtn.style.display = 'flex';
            }
        }
    }, 250);
});

// ===========================
// Service Worker Registration (Optional - for PWA)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }, function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

// ===========================
// WCAG 2.1 Accessibility Enhancements
// ===========================

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = 'position: absolute; left: -9999px; z-index: 9999; padding: 1rem; background: var(--color-primary); color: var(--color-cream); text-decoration: none;';
skipLink.addEventListener('focus', function() {
    this.style.left = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.left = '-9999px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Focus visible for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Announce page changes for screen readers
function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===========================
// Print Styles Handler
// ===========================
window.addEventListener('beforeprint', function() {
    console.log('Preparing page for printing...');
});

window.addEventListener('afterprint', function() {
    console.log('Print dialog closed.');
});
