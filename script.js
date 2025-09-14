// DeepSeek Companion Website JavaScript
// Professional interactive functionality for the marketing website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializePhase5Demos();
    initializeNavigationHighlight();
    initializeMobileMenu();
    initializeStatsCounter();
    initializeFeatureCards();
    initializeCostTracker();
    initializeIntersectionObserver();
});

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation Active Link Highlighting
function initializeNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Phase 5 Automation Demos
function initializePhase5Demos() {
    const automationCards = document.querySelectorAll('.automation-card');
    
    automationCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Highlight the card
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.2)';
            
            // Animate the code example
            const codeExample = this.querySelector('.code-example code');
            if (codeExample) {
                animateCodeText(codeExample);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px) scale(1)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        });
        
        // Staggered entrance animation
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, index * 200);
    });
}

// Animate Code Text in Phase 5 Cards
function animateCodeText(codeElement) {
    const originalText = codeElement.textContent;
    const lines = originalText.split('\n');
    
    codeElement.textContent = '';
    
    lines.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.textContent = line;
            lineElement.style.opacity = '0';
            lineElement.style.transform = 'translateX(-10px)';
            lineElement.style.transition = 'all 0.3s ease';
            
            codeElement.appendChild(lineElement);
            
            // Animate line appearance
            setTimeout(() => {
                lineElement.style.opacity = '1';
                lineElement.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
}

// Stats Counter Animation
function initializeStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        stats.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/\d/g, '');
            
            if (!isNaN(numericValue)) {
                let currentValue = 0;
                const increment = numericValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(currentValue) + suffix;
                    }
                }, 40);
            }
        });
        
        hasAnimated = true;
    }
    
    // Trigger when hero section is visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(heroSection);
    }
}

// Feature Cards Interactive Effects
function initializeFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Scale and glow effect
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.15)';
            
            // Icon animation
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px) scale(1)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Mobile Menu Toggle (for future mobile implementation)
function initializeMobileMenu() {
    // Placeholder for mobile menu functionality
    // This would be expanded when adding a hamburger menu for mobile
    
    const navMenu = document.querySelector('.nav-menu');
    
    // Add mobile-friendly touch events
    if ('ontouchstart' in window) {
        navMenu.style.touchAction = 'manipulation';
    }
}

// Cost Tracking Demo
function initializeCostTracker() {
    const costFeatures = document.querySelectorAll('.cost-feature');
    
    costFeatures.forEach((feature, index) => {
        feature.addEventListener('click', function() {
            // Demo cost tracking visualization
            showCostDemo(this, index);
        });
    });
}

function showCostDemo(element, type) {
    // Create a temporary cost display
    const costDisplay = document.createElement('div');
    costDisplay.className = 'cost-demo';
    costDisplay.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        z-index: 1000;
        animation: bounce 0.5s ease;
    `;
    
    const costs = ['$0.002/query', '$0.015/query', '$0.008/query'];
    costDisplay.textContent = costs[type] || '$0.005/query';
    
    element.style.position = 'relative';
    element.appendChild(costDisplay);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (costDisplay.parentNode) {
            costDisplay.parentNode.removeChild(costDisplay);
        }
    }, 3000);
}

// Scroll Animations
function initializeScrollAnimations() {
    // Add scroll-triggered animations
    const animatedElements = document.querySelectorAll('.section-title, .section-description, .automation-card, .feature-card, .step');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Intersection Observer for Scroll Animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for grid items
                if (entry.target.closest('.automation-grid, .features-grid, .models-grid')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements that should animate on scroll
    const elementsToObserve = document.querySelectorAll(`
        .section-title,
        .section-description,
        .automation-card,
        .feature-card,
        .step,
        .support-card,
        .model-category,
        .cost-tracking
    `);
    
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effect for Hero Section
function initializeParallaxEffect() {
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            heroVisual.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Performance Monitoring
function trackPerformance() {
    // Track page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Report to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                value: loadTime,
                event_category: 'performance'
            });
        }
    });
}

// Error Handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    
    // Report to analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            event_category: 'error',
            event_label: event.error.message
        });
    }
});

// Initialize performance tracking
trackPerformance();

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Support keyboard navigation for accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics Event Tracking
function trackEvent(action, category, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track CTA clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary, .btn-secondary')) {
        const action = e.target.textContent.trim();
        trackEvent('cta_click', 'engagement', action);
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeScrollAnimations,
        initializeSmoothScrolling,
        initializePhase5Demos,
        trackEvent
    };
}