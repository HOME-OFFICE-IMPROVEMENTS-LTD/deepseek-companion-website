// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Phase 5 Demo Animation
function animatePhase5Demo() {
    const cards = document.querySelectorAll('.automation-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 60px rgba(0, 102, 204, 0.15)';
            
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }, 1000);
        }, index * 200);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Special animation for Phase 5 section
            if (entry.target.classList.contains('phase5')) {
                setTimeout(() => {
                    animatePhase5Demo();
                }, 500);
            }
        }
    });
}, observerOptions);

// Observe sections for animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const animatedSections = document.querySelectorAll('.why-choose, .phase5, .models, .features, .installation, .support');
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Mobile menu toggle (if needed)
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    menuToggle.style.fontSize = '1.5rem';
    menuToggle.style.cursor = 'pointer';
    
    // Insert menu toggle after nav-brand
    const navBrand = document.querySelector('.nav-brand');
    navBrand.parentNode.insertBefore(menuToggle, navBrand.nextSibling);
    
    // Mobile responsive menu
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    menuToggle.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navMenu.style.padding = '20px';
        navMenu.style.gap = '20px';
    });
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});

// Cost tracking animation
function animateCostTracking() {
    const costFeatures = document.querySelectorAll('.cost-feature');
    costFeatures.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.transform = 'scale(1.05)';
            setTimeout(() => {
                feature.style.transform = 'scale(1)';
            }, 300);
        }, index * 100);
    });
}

// Feature cards hover enhancement
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderTop = '4px solid var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderTop = 'none';
        });
    });
});

// Model category interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const modelCategories = document.querySelectorAll('.model-category');
    modelCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Add pulse effect
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 30px rgba(0, 102, 204, 0.2)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }, 200);
        });
    });
});

// Installation steps progress animation
function animateInstallationSteps() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            const stepNumber = step.querySelector('.step-number');
            stepNumber.style.background = 'var(--secondary-color)';
            stepNumber.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                stepNumber.style.transform = 'scale(1)';
            }, 300);
        }, index * 500);
    });
}

// Trigger installation animation when section is visible
const installationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateInstallationSteps();
            installationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const installationSection = document.querySelector('.installation');
    if (installationSection) {
        installationObserver.observe(installationSection);
    }
});

// Comparison table enhancement
document.addEventListener('DOMContentLoaded', function() {
    const highlightCells = document.querySelectorAll('.comparison-table .highlight');
    highlightCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 204, 102, 0.1))';
            this.style.transform = 'scale(1.02)';
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(0, 204, 102, 0.05))';
            this.style.transform = 'scale(1)';
        });
    });
});

// Hero stats counter animation
function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = !isNaN(target.replace(/\D/g, ''));
        
        if (isNumber) {
            const num = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/[0-9]/g, '');
            let current = 0;
            const increment = num / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    stat.textContent = num + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }
    });
}

// Trigger counter animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateCounters, 500);
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing loading screens
    const existingLoader = document.querySelector('.loader');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    // Fade in the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});