// Table of Contents:
// 1. Colummnist Carrousel Initialization
// 2. Testimonials Initialization
// 3. Data Tools Carrousel Initialization
// 4. Latest Cards Carrousel Initialization
// 5. Hamburger Menu Toggle



/*--------------------------------------------------------------
# Colummnist Carrousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.columnist-cards-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 2.5,
                margin: 20,
                loop: true,
                nav: true
            },
            1024: {
                items: 3.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 4.5,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});

/*--------------------------------------------------------------
   # Testimonials Initialization
   --------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonials-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },            
            768: {
                items: 2,
                margin: 20,
                loop: true,
                nav: false
            },            
            1200: {
                items: 2,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});
      
/*--------------------------------------------------------------
# Data Tools Carrousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.data-tools-cards-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 1.5,
                margin: 20,
                loop: true,

            },
            1024: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 3.5,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});

/*--------------------------------------------------------------
# Latest Cards Carrousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.latest-cards-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 1.5,
                margin: 20,
                loop: true,
                nav: true
            },
            1024: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 4.6,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});  

/*--------------------------------------------------------------
# Latest Insights Carousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.latest-insights-cards-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 1.5,
                margin: 20,
                loop: true,
                nav: true
            },
            1024: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});

/*--------------------------------------------------------------
# Latest Insights Secondary Carousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.latest-insights-secondary-cards-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 1.5,
                margin: 20,
                loop: true,
                nav: true
            },
            1024: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});

/*--------------------------------------------------------------
# Related Post Carousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.related-post-carousel');
    
    if (!carousel) return;
    
    const $carousel = $(carousel);
    
    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        navText: [
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
            '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                loop: true,
                nav: false
            },
            640: {
                items: 1.3,
                margin: 20,
                loop: true,
                nav: false
            },
            991: {
                items: 1.5,
                margin: 20,
                loop: true,
                nav: true
            },
            1024: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            },
            1200: {
                items: 2.5,
                margin: 24,
                loop: true,
                nav: true
            }
        },
        onTranslated: function() {
            setActiveSlide();
        },
        onInitialized: function() {
            setActiveSlide();
            setAriaLabels();
        }
    });
    
    function setActiveSlide() {
        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => item.classList.remove('active'));
        
        const firstActiveItem = document.querySelector('.owl-item.active .item');
        if (firstActiveItem) {
            firstActiveItem.classList.add('active');
        }
    }
    
    function setAriaLabels() {
        const nextBtn = document.querySelector('.owl-next');
        const prevBtn = document.querySelector('.owl-prev');
        
        if (nextBtn) {
            nextBtn.setAttribute('title', 'Next Slider');
            nextBtn.setAttribute('aria-label', 'Next Slider');
        }
        
        if (prevBtn) {
            prevBtn.setAttribute('title', 'Previous Slider');
            prevBtn.setAttribute('aria-label', 'Previous Slider');
        }
    }
    
    document.addEventListener('keydown', function(e) {
   
        if (e.key === 'ArrowLeft') {
            $carousel.trigger('prev.owl.carousel');
        }
        if (e.key === 'ArrowRight') {
            $carousel.trigger('next.owl.carousel');
        }
    });
});
/*--------------------------------------------------------------
# Hamburger Menu Toggle
--------------------------------------------------------------*/

(function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const submenuToggles = document.querySelectorAll('.has-submenu > a');

  // Open menu
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      mobileMenuWrapper.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close menu
  function closeMenu() {
    mobileMenuWrapper.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMenu);
  }

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
})();



/*--------------------------------------------------------------
# Videos Category Carousel Initialization
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const carouselsVideos = document.querySelectorAll('.videos-category-carousel');
    
    if (!carouselsVideos.length) return;
    
    carouselsVideos.forEach(function(carouselElement) {
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
                navText: [
                    '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13256)"><path d="M18.9099 10.71C18.5199 10.32 17.8899 10.32 17.4999 10.71L12.9099 15.3C12.5199 15.69 12.5199 16.32 12.9099 16.71L17.4999 21.3C17.8899 21.69 18.5199 21.69 18.9099 21.3C19.2999 20.91 19.2999 20.28 18.9099 19.89L15.0299 16L18.9099 12.12C19.2899 11.73 19.2899 11.09 18.9099 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13256"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
                    '<svg class="general-arrows" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z" stroke="#D2D2D2"/><g clip-path="url(#clip0_885_13260)"><path d="M13.3101 10.71C12.9201 11.1 12.9201 11.73 13.3101 12.12L17.1901 16L13.3101 19.88C12.9201 20.27 12.9201 20.9 13.3101 21.29C13.7001 21.68 14.3301 21.68 14.7201 21.29L19.3101 16.7C19.7001 16.31 19.7001 15.68 19.3101 15.29L14.7201 10.7C14.3401 10.32 13.7001 10.32 13.3101 10.71Z" fill="#404040"/></g><defs><clipPath id="clip0_885_13260"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>'
                ],
                responsive: {
                    0: {
                        items: 1.2,
                        margin: 15,
                        loop: true,
                        nav: false
                    },
                    640: {
                        items: 1.3,
                        margin: 20,
                        loop: true,
                        nav: false
                    },
                    991: {
                        items: 1.5,
                        margin: 20,
                        loop: true,
                        nav: true
                    },
                    1024: {
                        items: 2.5,
                        margin: 24,
                        loop: true,
                        nav: true
                    },
                    1200: {
                        items: 2.5,
                        margin: 24,
                        loop: true,
                        nav: true
                    }
                },
                onTranslated: function() {
                    setActiveSlide();
                },
                onInitialized: function() {
                    setActiveSlide();
                    setAriaLabels();
                }
            });
            
            owlInitialized = true;
        }
        
        function setActiveSlide() {
            // Only target items within THIS carousel
            const allItems = carouselElement.querySelectorAll('.item');
            allItems.forEach(item => item.classList.remove('active'));
            
            const firstActiveItem = carouselElement.querySelector('.owl-item.active .item');
            if (firstActiveItem) {
                firstActiveItem.classList.add('active');
            }
        }
        
        function setAriaLabels() {
            // Only target buttons within THIS carousel
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
        
        // Keyboard navigation for this specific carousel
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                $carousel.trigger('prev.owl.carousel');
            }
            if (e.key === 'ArrowRight') {
                $carousel.trigger('next.owl.carousel');
            }
        });
    });
});