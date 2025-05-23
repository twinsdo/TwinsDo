// TwinsDo Main JavaScript with Language Switcher

document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    const languageSelector = document.querySelector('.language-selector');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Set default language
    let currentLang = 'en';
    
    // Toggle language dropdown
    if (selectedLanguage) {
        selectedLanguage.addEventListener('click', function(e) {
            e.preventDefault();
            languageDropdown.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update selected language display
            const flagSrc = this.querySelector('img').src;
            const langText = lang.toUpperCase();
            
            selectedLanguage.querySelector('img').src = flagSrc;
            selectedLanguage.querySelector('span').textContent = langText;
            
            languageDropdown.classList.remove('show');
        });
    });
    
    // Function to switch language
    function switchLanguage(lang) {
        // Hide all language elements
        document.querySelectorAll('[class*="lang-"]').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show elements for selected language
        document.querySelectorAll(`.lang-${lang}`).forEach(el => {
            el.style.display = '';
        });
        
        currentLang = lang;
        
        // Store language preference
        localStorage.setItem('twinsdo-language', lang);
    }
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('twinsdo-language');
    if (savedLang) {
        switchLanguage(savedLang);
        
        // Update selected language display
        const option = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
        if (option) {
            const flagSrc = option.querySelector('img').src;
            const langText = savedLang.toUpperCase();
            
            selectedLanguage.querySelector('img').src = flagSrc;
            selectedLanguage.querySelector('span').textContent = langText;
        }
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    
    // Clone navigation for mobile menu
    const mainNav = document.querySelector('.main-nav');
    if (mainNav && mobileMenuToggle) {
        mobileMenu.innerHTML = mainNav.innerHTML;
        document.body.appendChild(mobileMenu);
        
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('.feature-card, .application-card, .stat-card');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // Check elements on initial load
    checkScroll();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Form validation for contact/signup forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!valid) {
                e.preventDefault();
                
                // Show error message in current language
                let errorMsg = 'Please fill in all required fields.';
                if (currentLang === 'pt') {
                    errorMsg = 'Por favor, preencha todos os campos obrigatórios.';
                } else if (currentLang === 'es') {
                    errorMsg = 'Por favor, complete todos los campos requeridos.';
                }
                
                alert(errorMsg);
            }
        });
    });
    
    // Add glow effect to primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.classList.add('btn-glow');
    });
});
