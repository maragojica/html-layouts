/**
 * ============================================
 * MAIN JAVASCRIPT FILE
 * ============================================
 * 
 * Table of Contents:
 * 1. Shared Configuration & Utilities
 * 2. Owl Carousel Initializations
 * 3. Mobile Navigation
 * ============================================
 */

(function() {
    'use strict';

    /* ============================================
       1. SHARED CONFIGURATION & UTILITIES
       ============================================ */
    
    /**
     * Shared SVG Navigation Arrows
     */
    const NAV_ARROWS = {
        prev: '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
        next: '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
    };

    /**
     * Carousel Configurations
     */
    const CAROUSEL_CONFIGS = {
        columnist: {
            selector: '.columnist-cards-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 2.5, margin: 20, loop: true, nav: true },
                1024: { items: 3.5, margin: 24, loop: true, nav: true },
                1200: { items: 4.5, margin: 24, loop: true, nav: true }
            }
        },
        testimonials: {
            selector: '.testimonials-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                768: { items: 2, margin: 20, loop: true, nav: false },
                1200: { items: 2, margin: 24, loop: true, nav: true }
            }
        },
        dataTools: {
            selector: '.data-tools-cards-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 3.5, margin: 24, loop: true, nav: true }
            }
        },
        latestCards: {
            selector: '.latest-cards-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true, nav: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 4.6, margin: 24, loop: true, nav: true }
            }
        },
        latestInsights: {
            selector: '.latest-insights-cards-carousel',
            multiple: true,
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true, nav: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 2.5, margin: 24, loop: true, nav: true }
            }
        },
        latestInsightsSecondary: {
            selector: '.latest-insights-secondary-cards-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true, nav: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 2.5, margin: 24, loop: true, nav: true }
            }
        },
        relatedPost: {
            selector: '.related-post-carousel',
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true, nav: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 2.5, margin: 24, loop: true, nav: true }
            }
        },
        videosCategory: {
            selector: '.videos-category-carousel',
            multiple: true,
            responsive: {
                0: { items: 1.2, margin: 15, loop: true, nav: false },
                640: { items: 1.3, margin: 20, loop: true, nav: false },
                991: { items: 1.5, margin: 20, loop: true, nav: true },
                1024: { items: 2.5, margin: 24, loop: true, nav: true },
                1200: { items: 2.5, margin: 24, loop: true, nav: true }
            }
        }
    };

    /**
     * Utility Functions
     */
    const CarouselUtils = {
        setActiveSlide: function(carouselElement) {
            const allItems = carouselElement.querySelectorAll('.item');
            allItems.forEach(item => item.classList.remove('active'));
            
            const firstActiveItem = carouselElement.querySelector('.owl-item.active .item');
            if (firstActiveItem) {
                firstActiveItem.classList.add('active');
            }
        },

        setAriaLabels: function(carouselElement) {
            const nextBtn = carouselElement.querySelector('.owl-next');
            const prevBtn = carouselElement.querySelector('.owl-prev');
            
            if (nextBtn) {
                nextBtn.setAttribute('title', 'Next Slider');
                nextBtn.setAttribute('aria-label', 'Next Slider');
            }
            
            if (prevBtn) {
                prevBtn.setAttribute('title', 'Previous Slider');
                prevBtn.setAttribute('aria-label', 'Previous Slider');
            }
        }
    };

    /* ============================================
       2. OWL CAROUSEL INITIALIZATIONS
       ============================================ */

    /**
     * Initialize a single carousel
     */
    function initSingleCarousel(carouselElement, config) {
        const $carousel = $(carouselElement);
        
        $carousel.owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: config.nav !== undefined ? config.nav : true,
            navText: [NAV_ARROWS.prev, NAV_ARROWS.next],
            responsive: config.responsive,
            onTranslated: function() {
                CarouselUtils.setActiveSlide(carouselElement);
            },
            onInitialized: function() {
                CarouselUtils.setActiveSlide(carouselElement);
                CarouselUtils.setAriaLabels(carouselElement);
            }
        });

        // Keyboard navigation
        carouselElement.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                $carousel.trigger('prev.owl.carousel');
            }
            if (e.key === 'ArrowRight') {
                $carousel.trigger('next.owl.carousel');
            }
        });
    }

    /**
     * Initialize multiple carousels with same class
     */
    function initMultipleCarousels(selector, config) {
        const carousels = document.querySelectorAll(selector);
        
        if (carousels.length === 0) return;
        
        carousels.forEach(function(carousel) {
            initSingleCarousel(carousel, config);
        });
    }

    /**
     * Initialize carousel with destroy/rebuild on resize
     */
    function initResizableCarousel(selector, config) {
        const carousels = document.querySelectorAll(selector);
        
        if (!carousels.length) return;
        
        carousels.forEach(function(carouselElement) {
            const $carousel = $(carouselElement);
            let owlInitialized = false;
            
            function initOwlCarousel() {
                if (owlInitialized) {
                    $carousel.trigger('destroy.owl.carousel');
                    $carousel.removeClass('owl-loaded owl-drag');
                    owlInitialized = false;
                }
                
                $carousel.owlCarousel({
                    loop: true,
                    margin: 20,
                    dots: false,
                    nav: false,
                    navText: [NAV_ARROWS.prev, NAV_ARROWS.next],
                    responsive: config.responsive,
                    onTranslated: function() {
                        CarouselUtils.setActiveSlide(carouselElement);
                    },
                    onInitialized: function() {
                        CarouselUtils.setActiveSlide(carouselElement);
                        CarouselUtils.setAriaLabels(carouselElement);
                    }
                });
                
                owlInitialized = true;
            }
            
            // Initialize carousel
            initOwlCarousel();
            
            // Reinitialize on window resize with debounce
            let resizeTimer;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    initOwlCarousel();
                }, 250);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    $carousel.trigger('prev.owl.carousel');
                }
                if (e.key === 'ArrowRight') {
                    $carousel.trigger('next.owl.carousel');
                }
            });
        });
    }

    /**
     * Initialize all carousels on DOM ready
     */
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize each carousel type
        Object.keys(CAROUSEL_CONFIGS).forEach(function(key) {
            const config = CAROUSEL_CONFIGS[key];
            const selector = config.selector;
            
            if (key === 'videosCategory') {
                // Videos category needs resize handling
                initResizableCarousel(selector, config);
            } else if (config.multiple) {
                // Handle multiple instances
                initMultipleCarousels(selector, config);
            } else {
                // Handle single instance
                const carousel = document.querySelector(selector);
                if (carousel) {
                    initSingleCarousel(carousel, config);
                }
            }
        });
    });

    /* ============================================
       3. MOBILE NAVIGATION
       ============================================ */

    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        const submenuToggles = document.querySelectorAll('.has-submenu > a');

        if (!mobileMenuWrapper) return;

        /**
         * Open mobile menu
         */
        function openMenu() {
            mobileMenuWrapper.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        /**
         * Close mobile menu
         */
        function closeMenu() {
            mobileMenuWrapper.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Open menu button
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', openMenu);
        }

        // Close menu button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMenu);
        }

        // Close on overlay click
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMenu);
        }

        // Submenu toggle
        submenuToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('open');
            });
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenuWrapper.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close on resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1200 && mobileMenuWrapper.classList.contains('active')) {
                closeMenu();
            }
        });
    });

})();