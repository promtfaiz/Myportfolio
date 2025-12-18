// Utility Functions
const Utils = {
    // Navigation utilities
    navigateTo: function(page) {
        const pageSections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        pageSections.forEach(section => section.classList.remove('active'));
        document.getElementById(page).classList.add('active');
        
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-page="${page}"]`).classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // Add event listeners to nav links
    initNavigation: function() {
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.hidden.md\\:flex');
                if (navMenu) {
                    navMenu.classList.add('hidden');
                }
            });
        });

        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                const navMenu = document.querySelector('.hidden.md\\:flex');
                if (navMenu) {
                    navMenu.classList.toggle('hidden');
                }
            });
        }
    },

    // Initialize all components
    initAll: function() {
        this.initNavigation();
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Utils.initAll();
});
