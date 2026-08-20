// cart.js - Complete Cart System with WhatsApp & Google Maps Integration

class CartManager {
    constructor() {
        this.cart = [];
        this.cartModal = null;
        this.cartBtn = null;
        this.cartCount = null;
        this.cartItems = null;
        this.cartTotal = null;
        this.whatsappBtn = null;
        this.closeCartBtn = null;
        this.googleMapsUrl = "https://maps.app.goo.gl/eJ3fg7wYnBXGDbYS7";
        
        this.init();
    }
    
    init() {
        // Load cart from localStorage
        this.loadCart();
        
        // Cache DOM elements
        this.cartModal = document.getElementById('cartModal');
        this.cartBtn = document.getElementById('cartBtn');
        this.cartCount = document.querySelector('.cart-count');
        this.cartItems = document.getElementById('cartItems');
        this.cartTotal = document.getElementById('cartTotal');
        this.whatsappBtn = document.getElementById('whatsappBtn');
        this.closeCartBtn = document.getElementById('closeCart');
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Update display
        this.updateCartDisplay();
    }
    
    setupEventListeners() {
        // Open cart modal
        if (this.cartBtn) {
            this.cartBtn.addEventListener('click', () => {
                this.openCart();
            });
        }
        
        // Close cart modal
        if (this.closeCartBtn) {
            this.closeCartBtn.addEventListener('click', () => {
                this.closeCart();
            });
        }
        
        // Close cart when clicking outside
        if (this.cartModal) {
            this.cartModal.addEventListener('click', (e) => {
                if (e.target === this.cartModal) {
                    this.closeCart();
                }
            });
        }
        
        // WhatsApp order button
        if (this.whatsappBtn) {
            this.whatsappBtn.addEventListener('click', () => {
                this.sendWhatsAppOrder();
            });
        }
        
        // Keyboard shortcut to close cart
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.cartModal && this.cartModal.classList.contains('active')) {
                this.closeCart();
            }
        });
        
        // Listen for language changes
        document.addEventListener('languageChanged', () => {
            this.updateCartDisplay();
        });
        
        // Add Google Maps button listener
        const openMapBtn = document.getElementById('openMapBtn');
        if (openMapBtn) {
            openMapBtn.addEventListener('click', () => {
                this.openGoogleMaps();
            });
        }
    }
    
    // Add item to cart
    addToCart(productId, quantity = 1) {
        const product = this.findProduct(productId);
        if (!product) return;
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                currency: product.currency || 'DA',
                image: product.image,
                quantity: quantity,
                category: product.category
            });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.showNotification('addedToCart');
        this.animateCartButton();
    }
    
    // Remove item from cart
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.showNotification('removedFromCart');
    }
    
    // Update item quantity
    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.saveCart();
            this.updateCartDisplay();
        }
    }
    
    // Clear entire cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
    }
    
    // Get cart total
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    // Get total items count
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Find product in restaurant data
    findProduct(productId) {
        return window.restaurantData?.products.find(p => p.id === productId);
    }
    
    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('restaurant_cart', JSON.stringify(this.cart));
    }
    
    // Load cart from localStorage
    loadCart() {
        const savedCart = localStorage.getItem('restaurant_cart');
        if (savedCart) {
            try {
                this.cart = JSON.parse(savedCart);
            } catch (error) {
                console.error('Error loading cart:', error);
                this.cart = [];
            }
        }
    }
    
    // Open cart modal
    openCart() {
        if (this.cartModal) {
            this.cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.updateCartDisplay();
        }
    }
    
    // Close cart modal
    closeCart() {
        if (this.cartModal) {
            this.cartModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Update cart display
    updateCartDisplay() {
        // Update cart count badge
        if (this.cartCount) {
            const totalItems = this.getTotalItems();
            this.cartCount.textContent = totalItems;
            this.cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
        
        // Update cart items display
        if (this.cartItems) {
            if (this.cart.length === 0) {
                this.cartItems.innerHTML = this.getEmptyCartHTML();
            } else {
                this.cartItems.innerHTML = this.cart.map(item => this.getCartItemHTML(item)).join('');
            }
        }
        
        // Update total
        if (this.cartTotal) {
            this.cartTotal.textContent = `${this.getCartTotal()} DA`;
        }
        
        // Update WhatsApp button state
        if (this.whatsappBtn) {
            this.whatsappBtn.disabled = this.cart.length === 0;
            this.whatsappBtn.style.opacity = this.cart.length === 0 ? '0.5' : '1';
        }
    }
    
    // Get HTML for empty cart
    getEmptyCartHTML() {
        const t = window.t || ((key) => key);
        return `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p class="empty-cart-title">${t('cart.empty')}</p>
                <p class="empty-cart-message">${t('cart.emptyMessage')}</p>
                <button class="btn btn-primary" onclick="cartManager.closeCart()">
                    ${t('cart.continueShopping')}
                </button>
            </div>
        `;
    }
    
    // Get HTML for cart item
    getCartItemHTML(item) {
        const t = window.t || ((key) => key);
        const itemName = typeof item.name === 'object' 
            ? (item.name[window.translationManager?.currentLanguage] || item.name.ar)
            : item.name;
        
        return `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${itemName}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${itemName}</h4>
                    <div class="cart-item-price">${item.price} ${item.currency}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-subtotal">${item.price * item.quantity} ${item.currency}</div>
                    <button class="remove-btn" onclick="cartManager.removeFromCart('${item.id}')" aria-label="Remove item">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }
    
    // Build WhatsApp message
    buildWhatsAppMessage() {
        const t = window.t || ((key) => key);
        const currentLang = window.translationManager?.currentLanguage || 'ar';
        
        let message = `${t('whatsapp.greeting')}\n\n`;
        
        this.cart.forEach((item, index) => {
            const itemName = typeof item.name === 'object' 
                ? (item.name[currentLang] || item.name.ar)
                : item.name;
            
            message += `${index + 1}. ${itemName}\n`;
            message += `   ${t('cart.quantity')}: ${item.quantity}\n`;
            message += `   ${t('menu.price')}: ${item.price * item.quantity} ${item.currency}\n\n`;
        });
        
        message += `───────────────\n`;
        message += `${t('whatsapp.total')}: ${this.getCartTotal()} ${this.cart[0]?.currency || 'DA'}\n\n`;
        message += `${t('whatsapp.thankYou')}`;
        
        return message;
    }
    
    // Send order via WhatsApp
    sendWhatsAppOrder() {
        if (this.cart.length === 0) return;
        
        const whatsappNumber = window.restaurantData?.whatsapp;
        if (!whatsappNumber) {
            console.error('WhatsApp number not configured');
            return;
        }
        
        const message = this.buildWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success notification
        this.showNotification('orderSent');
    }
    
    // Open Google Maps
    openGoogleMaps() {
        window.open(this.googleMapsUrl, '_blank');
    }
    
    // Animate cart button when item is added
    animateCartButton() {
        if (this.cartBtn) {
            this.cartBtn.classList.add('cart-animation');
            setTimeout(() => {
                this.cartBtn.classList.remove('cart-animation');
            }, 500);
        }
    }
    
    // Show notification
    showNotification(type) {
        const t = window.t || ((key) => key);
        const message = t(`notifications.${type}`) || t('notifications.cartUpdated');
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove after 2 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }
    
    // Get notification icon based on type
    getNotificationIcon(type) {
        switch(type) {
            case 'addedToCart':
                return '✅';
            case 'removedFromCart':
                return '🗑️';
            case 'orderSent':
                return '📤';
            default:
                return '🛒';
        }
    }
}

// Initialize cart manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
});

// Add required CSS styles dynamically
const cartStyles = `
    /* Cart Modal */
    .cart-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    }
    
    .cart-modal.active {
        display: flex;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .cart-content {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        animation: slideUp 0.3s ease;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Empty Cart */
    .empty-cart {
        text-align: center;
        padding: 3rem 1rem;
    }
    
    .empty-cart-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    
    .empty-cart-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    .empty-cart-message {
        color: #666;
        margin-bottom: 2rem;
    }
    
    /* Cart Items */
    .cart-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #FFF8F0;
        border-radius: 12px;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
        animation: fadeInUp 0.3s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .cart-item:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }
    
    .cart-item-image {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        flex-shrink: 0;
    }
    
    .cart-item-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .cart-item-info {
        flex: 1;
    }
    
    .cart-item-name {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: #333;
    }
    
    .cart-item-price {
        font-size: 0.9rem;
        color: #D43F21;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    .cart-item-controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .quantity-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #D43F21;
        background: white;
        color: #D43F21;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .quantity-btn:hover {
        background: #D43F21;
        color: white;
        transform: scale(1.1);
    }
    
    .quantity-display {
        font-weight: bold;
        font-size: 1.1rem;
        min-width: 30px;
        text-align: center;
    }
    
    .cart-item-actions {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
    }
    
    .cart-item-subtotal {
        font-weight: bold;
        color: #333;
    }
    
    .remove-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 5px;
        transition: all 0.3s ease;
    }
    
    .remove-btn:hover {
        transform: scale(1.2);
    }
    
    /* Cart Total */
    .cart-total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        background: #F5E6D3;
        border-radius: 12px;
        margin: 1.5rem 0;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    /* WhatsApp Button */
    .btn-whatsapp {
        background: #25D366;
        color: white;
        width: 100%;
        padding: 15px;
        font-size: 1.1rem;
    }
    
    .btn-whatsapp:hover {
        background: #1EB954;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }
    
    .btn-whatsapp:disabled {
        cursor: not-allowed;
    }
    
    /* Close Button */
    .btn-close {
        background: #666;
        color: white;
        width: 100%;
        margin-top: 0.5rem;
        padding: 12px;
    }
    
    .btn-close:hover {
        background: #555;
    }
    
    /* Cart Animation */
    .cart-animation {
        animation: cartPop 0.5s ease;
    }
    
    @keyframes cartPop {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    /* Notifications */
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 15px 20px;
        border-radius: 30px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .cart-notification.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .notification-message {
        font-weight: 500;
    }
    
    /* Google Maps Button */
    .btn-maps {
        background: #4285F4;
        color: white;
        width: 100%;
        margin-top: 0.5rem;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .btn-maps:hover {
        background: #3367D6;
        transform: translateY(-2px);
    }
    
    /* RTL Support */
    [dir="rtl"] .cart-item {
        flex-direction: row-reverse;
    }
    
    [dir="rtl"] .cart-item-actions {
        align-items: flex-start;
    }
    
    [dir="rtl"] .cart-notification {
        right: auto;
        left: 20px;
    }
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .cart-content {
            padding: 1.5rem;
            width: 95%;
        }
        
        .cart-item {
            flex-wrap: wrap;
        }
        
        .cart-item-image {
            width: 50px;
            height: 50px;
        }
        
        .cart-item-actions {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.5rem;
        }
        
        .cart-notification {
            bottom: 10px;
            right: 10px;
            left: 10px;
            text-align: center;
        }
        
        [dir="rtl"] .cart-notification {
            right: 10px;
            left: 10px;
        }
    }
    
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
        .cart-item,
        .cart-modal,
        .cart-notification,
        .cart-animation {
            animation: none !important;
            transition: none !important;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = cartStyles;
document.head.appendChild(styleSheet);
