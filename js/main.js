// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    const savedLang = getLanguage();
    currentLanguage = savedLang;
    applyLanguage();
    
    // Load menu
    displayMenu();
    
    // Setup language selector
    setupLanguageSelector();
    
    // Setup cart
    setupCart();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup menu filters
    setupMenuFilters();
});

// Display menu items
function displayMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const categoriesGrid = document.getElementById('categoriesGrid');
    
    // Display categories
    categoriesGrid.innerHTML = restaurantData.categories.map(category => `
        <button class="category-card" onclick="filterByCategory('${category.id}')">
            <span class="category-icon">${category.icon}</span>
            <span class="category-name">${category.name[currentLanguage]}</span>
        </button>
    `).join('');
    
    // Display products
    menuGrid.innerHTML = restaurantData.products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name[currentLanguage]}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name[currentLanguage]}</h3>
                ${product.description[currentLanguage] ? 
                    `<p class="product-description">${product.description[currentLanguage]}</p>` : ''}
                ${product.ingredients && product.ingredients[currentLanguage] ? `
                    <ul class="product-ingredients">
                        ${product.ingredients[currentLanguage].map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                ` : ''}
                <div class="product-price">
                    <span>${product.price} ${product.currency}</span>
                    <button class="btn btn-order" onclick="addToCart('${product.id}')">
                        ${translations[currentLanguage].addToCart}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter by category
function filterByCategory(categoryId) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (categoryId === 'all' || card.dataset.category === categoryId) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === categoryId) {
            btn.classList.add('active');
        }
    });
}

// Setup language selector
function setupLanguageSelector() {
    const langCurrent = document.getElementById('langCurrent');
    const langDropdown = document.getElementById('langDropdown');
    const langSelector = document.querySelector('.language-selector');
    
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
        langSelector.classList.remove('active');
    });
    
    langDropdown.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            langSelector.classList.remove('active');
            
            // Update current language display
            langCurrent.textContent = btn.textContent;
        });
    });
}

// Setup cart
function setupCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        updateCartDisplay();
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    whatsappBtn.addEventListener('click', sendWhatsAppOrder);
}

// Setup mobile menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe sections for animation
    document.querySelectorAll('.hero, .section-title, .featured-content').forEach(el => {
        observer.observe(el);
    });
    
    // Observe ingredient steps
    document.querySelectorAll('.ingredient-step').forEach(el => {
        observer.observe(el);
    });
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(el => {
        observer.observe(el);
    });
}

// Setup menu filters
function setupMenuFilters() {
    const filtersContainer = document.getElementById('menuFilters');
    
    filtersContainer.innerHTML = `
        <button class="filter-btn active" data-category="all" onclick="filterByCategory('all')">
            ${translations[currentLanguage].categories}
        </button>
        ${restaurantData.categories.map(category => `
            <button class="filter-btn" data-category="${category.id}" onclick="filterByCategory('${category.id}')">
                ${category.icon} ${category.name[currentLanguage]}
            </button>
        `).join('')}
    `;
}

// Add to cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.textContent = translations[currentLanguage].addToCart;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        box-shadow: var(--shadow-hover);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
