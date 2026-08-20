// ============================================
// 🌍 نظام الترجمة الكامل - Translation System
// ============================================

const translations = {
    // ============ 🇩🇿 العربية ============
    ar: {
        // Navigation
        home: "الرئيسية",
        menu: "القائمة",
        featured: "المميز",
        about: "من نحن",
        contact: "اتصل بنا",
        cart: "السلة",
        
        // Hero Section
        heroTitle: "طعم إيطالي أصيل 🍕",
        heroDescription: "بيتزا طازجة بمكونات مختارة بعناية",
        orderNow: "اطلب الآن",
        viewMenu: "شاهد القائمة",
        openMap: "فتح الموقع",
        
        // Categories
        categories: "الأصناف",
        allCategories: "الكل",
        
        // Menu
        ourMenu: "قائمة الطعام",
        ingredients: "المكونات",
        price: "السعر",
        addToCart: "أضف إلى الطلب",
        addedToCart: "تمت الإضافة ✓",
        
        // Featured
        featuredTitle: "طبقنا المميز",
        featuredDescription: "جرب أفضل ما لدينا",
        
        // Cart
        yourCart: "سلة التسوق",
        emptyCart: "السلة فارغة",
        total: "المجموع",
        checkout: "إتمام الطلب",
        close: "إغلاق",
        remove: "حذف",
        quantity: "الكمية",
        sendWhatsApp: "إرسال الطلب عبر WhatsApp",
        
        // WhatsApp Messages
        whatsappOrder: "السلام عليكم، أريد طلب:",
        whatsappGreeting: "مرحباً، أود تقديم طلب جديد",
        orderDetails: "تفاصيل الطلب",
        deliveryAddress: "عنوان التوصيل",
        phoneNumber: "رقم الهاتف",
        orderTotal: "المجموع الكلي",
        
        // Contact
        contactUs: "اتصل بنا",
        address: "العنوان",
        phone: "الهاتف",
        hours: "ساعات العمل",
        openingHours: "ساعات العمل",
        getDirections: "احصل على الاتجاهات",
        
        // Footer
        navigation: "روابط سريعة",
        followUs: "تابعنا",
        allRightsReserved: "جميع الحقوق محفوظة",
        privacyPolicy: "سياسة الخصوصية",
        termsOfService: "شروط الخدمة",
        
        // About
        aboutUs: "من نحن",
        ourStory: "قصتنا",
        ourChefs: "طهاةنا",
        qualityIngredients: "مكونات عالية الجودة",
        
        // Misc
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        retry: "إعادة المحاولة",
        search: "بحث",
        filter: "تصفية",
        sortBy: "ترتيب حسب",
        newest: "الأحدث",
        priceLowToHigh: "السعر: من الأقل للأعلى",
        priceHighToLow: "السعر: من الأعلى للأقل",
        popular: "الأكثر شعبية",
        
        // Language Names
        languageName: "العربية",
        languageCode: "ar",
        
        // Currency
        currency: "دج",
        currencySymbol: "DA",
        
        // Time
        today: "اليوم",
        tomorrow: "غداً",
        closed: "مغلق",
        open: "مفتوح",
        
        // Social
        instagram: "انستغرام",
        facebook: "فيسبوك",
        tiktok: "تيك توك",
        twitter: "تويتر",
        
        // Order Status
        orderReceived: "تم استلام طلبك",
        orderConfirmed: "تم تأكيد الطلب",
        orderPreparing: "جاري التحضير",
        orderReady: "الطلب جاهز",
        orderDelivered: "تم التوصيل",
        
        // Payment
        paymentMethod: "طريقة الدفع",
        cash: "نقداً",
        card: "بطاقة",
        online: "عبر الإنترنت",
        
        // Special
        specialOffers: "عروض خاصة",
        new: "جديد",
        popular_dish: "طبق شعبي",
        recommended: "موصى به",
        today_special: "طبق اليوم",
        
        // Form
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال",
        subscribe: "اشترك",
        newsletter: "النشرة البريدية",
        subscribeSuccess: "تم الاشتراك بنجاح",
        
        // Reviews
        reviews: "التقييمات",
        writeReview: "اكتب تقييم",
        yourReview: "تقييمك",
        rating: "التقييم",
        
        // Delivery
        delivery: "التوصيل",
        pickup: "الاستلام",
        deliveryTime: "وقت التوصيل",
        deliveryFee: "رسوم التوصيل",
        freeDelivery: "توصيل مجاني",
        minimumOrder: "الحد الأدنى للطلب",
        
        // Food Related
        spicy: "حار",
        vegetarian: "نباتي",
        vegan: "نباتي صرف",
        glutenFree: "خالي من الجلوتين",
        halal: "حلال",
        
        // Interactive
        scrollDown: "اسحب للأسفل",
        swipeForMore: "اسحب للمزيد",
        tapToOrder: "اضغط للطلب",
        clickToExpand: "اضغط للتوسيع",
        
        // Accessibility
        menuButton: "زر القائمة",
        closeMenu: "إغلاق القائمة",
        languageSelector: "اختيار اللغة",
        cartButton: "زر السلة",
        searchButton: "زر البحث",
        
        // SEO
        metaDescription: "مطعم بيتزا أرتي - بيتزا إيطالية أصيلة في الجزائر",
        metaKeywords: "بيتزا, مطعم, طعام, إيطالي, الجزائر",
        
        // Restaurant Specific
        restaurantName: "بيتزا أرتي",
        restaurantTagline: "بيتزا إيطالية أصيلة",
        restaurantDescription: "مطعم بيتزا إيطالي في قلب الجزائر",
        
        // Featured Products
        featuredPizza: "بيتزا الأجبان الأربعة",
        featuredPizzaDescription: "مزيج مثالي من أربعة أنواع جبن إيطالي",
        featuredPizzaPrice: "750 دج",
        
        // Pizza Story
        storyTitle: "رحلة البيتزا",
        storyStep1: "العجينة الطازجة",
        storyStep2: "صلصة الطماطم",
        storyStep3: "الجبن الإيطالي",
        storyStep4: "المكونات الطازجة",
        storyStep5: "البيتزا الجاهزة",
        
        // Order Confirmation
        orderConfirmation: "تأكيد الطلب",
        orderNumber: "رقم الطلب",
        estimatedTime: "الوقت المتوقع",
        thankYou: "شكراً لطلبك!",
        
        // Error Messages
        errorLoading: "خطأ في التحميل",
        errorSubmitting: "خطأ في الإرسال",
        errorNetwork: "خطأ في الشبكة",
        errorInvalid: "بيانات غير صالحة"
    },
    
    // ============ 🇫🇷 Français ============
    fr: {
        // Navigation
        home: "Accueil",
        menu: "Menu",
        featured: "En vedette",
        about: "À propos",
        contact: "Contact",
        cart: "Panier",
        
        // Hero Section
        heroTitle: "Goût italien authentique 🍕",
        heroDescription: "Pizza fraîche avec des ingrédients soigneusement sélectionnés",
        orderNow: "Commander",
        viewMenu: "Voir le menu",
        openMap: "Ouvrir la carte",
        
        // Categories
        categories: "Catégories",
        allCategories: "Tout",
        
        // Menu
        ourMenu: "Notre Menu",
        ingredients: "Ingrédients",
        price: "Prix",
        addToCart: "Ajouter",
        addedToCart: "Ajouté ✓",
        
        // Featured
        featuredTitle: "Notre plat vedette",
        featuredDescription: "Essayez le meilleur de notre carte",
        
        // Cart
        yourCart: "Votre Panier",
        emptyCart: "Panier vide",
        total: "Total",
        checkout: "Commander",
        close: "Fermer",
        remove: "Supprimer",
        quantity: "Quantité",
        sendWhatsApp: "Envoyer via WhatsApp",
        
        // WhatsApp Messages
        whatsappOrder: "Bonjour, je voudrais commander :",
        whatsappGreeting: "Bonjour, je souhaite passer une nouvelle commande",
        orderDetails: "Détails de la commande",
        deliveryAddress: "Adresse de livraison",
        phoneNumber: "Numéro de téléphone",
        orderTotal: "Total de la commande",
        
        // Contact
        contactUs: "Contactez-nous",
        address: "Adresse",
        phone: "Téléphone",
        hours: "Horaires",
        openingHours: "Heures d'ouverture",
        getDirections: "Obtenir l'itinéraire",
        
        // Footer
        navigation: "Navigation",
        followUs: "Suivez-nous",
        allRightsReserved: "Tous droits réservés",
        privacyPolicy: "Politique de confidentialité",
        termsOfService: "Conditions d'utilisation",
        
        // About
        aboutUs: "À propos de nous",
        ourStory: "Notre histoire",
        ourChefs: "Nos chefs",
        qualityIngredients: "Ingrédients de qualité",
        
        // Misc
        loading: "Chargement...",
        error: "Une erreur est survenue",
        retry: "Réessayer",
        search: "Rechercher",
        filter: "Filtrer",
        sortBy: "Trier par",
        newest: "Plus récent",
        priceLowToHigh: "Prix: croissant",
        priceHighToLow: "Prix: décroissant",
        popular: "Populaire",
        
        // Language Names
        languageName: "Français",
        languageCode: "fr",
        
        // Currency
        currency: "DA",
        currencySymbol: "DA",
        
        // Time
        today: "Aujourd'hui",
        tomorrow: "Demain",
        closed: "Fermé",
        open: "Ouvert",
        
        // Social
        instagram: "Instagram",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitter: "Twitter",
        
        // Order Status
        orderReceived: "Commande reçue",
        orderConfirmed: "Commande confirmée",
        orderPreparing: "En préparation",
        orderReady: "Prête",
        orderDelivered: "Livrée",
        
        // Payment
        paymentMethod: "Méthode de paiement",
        cash: "Espèces",
        card: "Carte",
        online: "En ligne",
        
        // Special
        specialOffers: "Offres spéciales",
        new: "Nouveau",
        popular_dish: "Plat populaire",
        recommended: "Recommandé",
        today_special: "Plat du jour",
        
        // Form
        name: "Nom",
        email: "E-mail",
        message: "Message",
        send: "Envoyer",
        subscribe: "S'abonner",
        newsletter: "Newsletter",
        subscribeSuccess: "Abonnement réussi",
        
        // Reviews
        reviews: "Avis",
        writeReview: "Écrire un avis",
        yourReview: "Votre avis",
        rating: "Note",
        
        // Delivery
        delivery: "Livraison",
        pickup: "À emporter",
        deliveryTime: "Temps de livraison",
        deliveryFee: "Frais de livraison",
        freeDelivery: "Livraison gratuite",
        minimumOrder: "Commande minimum",
        
        // Food Related
        spicy: "Épicé",
        vegetarian: "Végétarien",
        vegan: "Végan",
        glutenFree: "Sans gluten",
        halal: "Halal",
        
        // Interactive
        scrollDown: "Faites défiler",
        swipeForMore: "Balayez pour plus",
        tapToOrder: "Appuyez pour commander",
        clickToExpand: "Cliquez pour agrandir",
        
        // Accessibility
        menuButton: "Bouton menu",
        closeMenu: "Fermer le menu",
        languageSelector: "Sélecteur de langue",
        cartButton: "Bouton panier",
        searchButton: "Bouton recherche",
        
        // SEO
        metaDescription: "Pizza Arte - Pizza italienne authentique en Algérie",
        metaKeywords: "pizza, restaurant, nourriture, italien, Algérie",
        
        // Restaurant Specific
        restaurantName: "Pizza Arte",
        restaurantTagline: "Pizza italienne authentique",
        restaurantDescription: "Restaurant de pizza italienne au cœur d'Alger",
        
        // Featured Products
        featuredPizza: "Pizza 4 Fromages",
        featuredPizzaDescription: "Mélange parfait de quatre fromages italiens",
        featuredPizzaPrice: "750 DA",
        
        // Pizza Story
        storyTitle: "Le voyage de la pizza",
        storyStep1: "La pâte fraîche",
        storyStep2: "La sauce tomate",
        storyStep3: "Le fromage italien",
        storyStep4: "Les ingrédients frais",
        storyStep5: "La pizza finale",
        
        // Order Confirmation
        orderConfirmation: "Confirmation de commande",
        orderNumber: "Numéro de commande",
        estimatedTime: "Temps estimé",
        thankYou: "Merci pour votre commande !",
        
        // Error Messages
        errorLoading: "Erreur de chargement",
        errorSubmitting: "Erreur d'envoi",
        errorNetwork: "Erreur réseau",
        errorInvalid: "Données invalides"
    },
    
    // ============ 🇬🇧 English ============
    en: {
        // Navigation
        home: "Home",
        menu: "Menu",
        featured: "Featured",
        about: "About",
        contact: "Contact",
        cart: "Cart",
        
        // Hero Section
        heroTitle: "Authentic Italian Taste 🍕",
        heroDescription: "Fresh pizza with carefully selected ingredients",
        orderNow: "Order Now",
        viewMenu: "View Menu",
        openMap: "Open Map",
        
        // Categories
        categories: "Categories",
        allCategories: "All",
        
        // Menu
        ourMenu: "Our Menu",
        ingredients: "Ingredients",
        price: "Price",
        addToCart: "Add to Cart",
        addedToCart: "Added ✓",
        
        // Featured
        featuredTitle: "Our Featured Dish",
        featuredDescription: "Try the best we have to offer",
        
        // Cart
        yourCart: "Your Cart",
        emptyCart: "Cart is empty",
        total: "Total",
        checkout: "Checkout",
        close: "Close",
        remove: "Remove",
        quantity: "Quantity",
        sendWhatsApp: "Send via WhatsApp",
        
        // WhatsApp Messages
        whatsappOrder: "Hello, I would like to order:",
        whatsappGreeting: "Hi, I would like to place a new order",
        orderDetails: "Order details",
        deliveryAddress: "Delivery address",
        phoneNumber: "Phone number",
        orderTotal: "Order total",
        
        // Contact
        contactUs: "Contact Us",
        address: "Address",
        phone: "Phone",
        hours: "Hours",
        openingHours: "Opening Hours",
        getDirections: "Get Directions",
        
        // Footer
        navigation: "Navigation",
        followUs: "Follow Us",
        allRightsReserved: "All rights reserved",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        
        // About
        aboutUs: "About Us",
        ourStory: "Our Story",
        ourChefs: "Our Chefs",
        qualityIngredients: "Quality Ingredients",
        
        // Misc
        loading: "Loading...",
        error: "An error occurred",
        retry: "Retry",
        search: "Search",
        filter: "Filter",
        sortBy: "Sort by",
        newest: "Newest",
        priceLowToHigh: "Price: Low to High",
        priceHighToLow: "Price: High to Low",
        popular: "Popular",
        
        // Language Names
        languageName: "English",
        languageCode: "en",
        
        // Currency
        currency: "DA",
        currencySymbol: "DA",
        
        // Time
        today: "Today",
        tomorrow: "Tomorrow",
        closed: "Closed",
        open: "Open",
        
        // Social
        instagram: "Instagram",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitter: "Twitter",
        
        // Order Status
        orderReceived: "Order received",
        orderConfirmed: "Order confirmed",
        orderPreparing: "Preparing",
        orderReady: "Ready",
        orderDelivered: "Delivered",
        
        // Payment
        paymentMethod: "Payment method",
        cash: "Cash",
        card: "Card",
        online: "Online",
        
        // Special
        specialOffers: "Special Offers",
        new: "New",
        popular_dish: "Popular Dish",
        recommended: "Recommended",
        today_special: "Today's Special",
        
        // Form
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        subscribe: "Subscribe",
        newsletter: "Newsletter",
        subscribeSuccess: "Subscribed successfully",
        
        // Reviews
        reviews: "Reviews",
        writeReview: "Write a Review",
        yourReview: "Your Review",
        rating: "Rating",
        
        // Delivery
        delivery: "Delivery",
        pickup: "Pickup",
        deliveryTime: "Delivery time",
        deliveryFee: "Delivery fee",
        freeDelivery: "Free delivery",
        minimumOrder: "Minimum order",
        
        // Food Related
        spicy: "Spicy",
        vegetarian: "Vegetarian",
        vegan: "Vegan",
        glutenFree: "Gluten-free",
        halal: "Halal",
        
        // Interactive
        scrollDown: "Scroll down",
        swipeForMore: "Swipe for more",
        tapToOrder: "Tap to order",
        clickToExpand: "Click to expand",
        
        // Accessibility
        menuButton: "Menu button",
        closeMenu: "Close menu",
        languageSelector: "Language selector",
        cartButton: "Cart button",
        searchButton: "Search button",
        
        // SEO
        metaDescription: "Pizza Arte - Authentic Italian pizza in Algeria",
        metaKeywords: "pizza, restaurant, food, Italian, Algeria",
        
        // Restaurant Specific
        restaurantName: "Pizza Arte",
        restaurantTagline: "Authentic Italian Pizza",
        restaurantDescription: "Italian pizza restaurant in the heart of Algiers",
        
        // Featured Products
        featuredPizza: "Four Cheese Pizza",
        featuredPizzaDescription: "Perfect blend of four Italian cheeses",
        featuredPizzaPrice: "750 DA",
        
        // Pizza Story
        storyTitle: "The Pizza Journey",
        storyStep1: "Fresh dough",
        storyStep2: "Tomato sauce",
        storyStep3: "Italian cheese",
        storyStep4: "Fresh ingredients",
        storyStep5: "Final pizza",
        
        // Order Confirmation
        orderConfirmation: "Order Confirmation",
        orderNumber: "Order number",
        estimatedTime: "Estimated time",
        thankYou: "Thank you for your order!",
        
        // Error Messages
        errorLoading: "Loading error",
        errorSubmitting: "Submission error",
        errorNetwork: "Network error",
        errorInvalid: "Invalid data"
    },
    
    // ============ 🇨🇳 中文 ============
    zh: {
        // Navigation
        home: "首页",
        menu: "菜单",
        featured: "特色",
        about: "关于我们",
        contact: "联系我们",
        cart: "购物车",
        
        // Hero Section
        heroTitle: "正宗意大利风味 🍕",
        heroDescription: "精心挑选食材的新鲜披萨",
        orderNow: "立即订购",
        viewMenu: "查看菜单",
        openMap: "打开地图",
        
        // Categories
        categories: "分类",
        allCategories: "全部",
        
        // Menu
        ourMenu: "我们的菜单",
        ingredients: "成分",
        price: "价格",
        addToCart: "加入购物车",
        addedToCart: "已添加 ✓",
        
        // Featured
        featuredTitle: "特色菜品",
        featuredDescription: "品尝我们最好的美食",
        
        // Cart
        yourCart: "您的购物车",
        emptyCart: "购物车是空的",
        total: "总计",
        checkout: "结账",
        close: "关闭",
        remove: "删除",
        quantity: "数量",
        sendWhatsApp: "通过WhatsApp发送",
        
        // WhatsApp Messages
        whatsappOrder: "你好，我想订购：",
        whatsappGreeting: "您好，我想下新订单",
        orderDetails: "订单详情",
        deliveryAddress: "配送地址",
        phoneNumber: "电话号码",
        orderTotal: "订单总额",
        
        // Contact
        contactUs: "联系我们",
        address: "地址",
        phone: "电话",
        hours: "时间",
        openingHours: "营业时间",
        getDirections: "获取路线",
        
        // Footer
        navigation: "导航",
        followUs: "关注我们",
        allRightsReserved: "版权所有",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        
        // About
        aboutUs: "关于我们",
        ourStory: "我们的故事",
        ourChefs: "我们的厨师",
        qualityIngredients: "优质食材",
        
        // Misc
        loading: "加载中...",
        error: "发生错误",
        retry: "重试",
        search: "搜索",
        filter: "筛选",
        sortBy: "排序方式",
        newest: "最新",
        priceLowToHigh: "价格：从低到高",
        priceHighToLow: "价格：从高到低",
        popular: "热门",
        
        // Language Names
        languageName: "中文",
        languageCode: "zh",
        
        // Currency
        currency: "第纳尔",
        currencySymbol: "DA",
        
        // Time
        today: "今天",
        tomorrow: "明天",
        closed: "已关闭",
        open: "营业中",
        
        // Social
        instagram: "Instagram",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitter: "Twitter",
        
        // Order Status
        orderReceived: "已收到订单",
        orderConfirmed: "订单已确认",
        orderPreparing: "准备中",
        orderReady: "已准备好",
        orderDelivered: "已送达",
        
        // Payment
        paymentMethod: "支付方式",
        cash: "现金",
        card: "银行卡",
        online: "在线支付",
        
        // Special
        specialOffers: "特别优惠",
        new: "新品",
        popular_dish: "热门菜品",
        recommended: "推荐",
        today_special: "今日特价",
        
        // Form
        name: "姓名",
        email: "电子邮箱",
        message: "消息",
        send: "发送",
        subscribe: "订阅",
        newsletter: "新闻通讯",
        subscribeSuccess: "订阅成功",
        
        // Reviews
        reviews: "评价",
        writeReview: "写评价",
        yourReview: "您的评价",
        rating: "评分",
        
        // Delivery
        delivery: "配送",
        pickup: "自取",
        deliveryTime: "配送时间",
        deliveryFee: "配送费",
        freeDelivery: "免费配送",
        minimumOrder: "最低订单",
        
        // Food Related
        spicy: "辣",
        vegetarian: "素食",
        vegan: "纯素",
        glutenFree: "无麸质",
        halal: "清真",
        
        // Interactive
        scrollDown: "向下滚动",
        swipeForMore: "滑动查看更多",
        tapToOrder: "点击订购",
        clickToExpand: "点击展开",
        
        // Accessibility
        menuButton: "菜单按钮",
        closeMenu: "关闭菜单",
        languageSelector: "语言选择器",
        cartButton: "购物车按钮",
        searchButton: "搜索按钮",
        
        // SEO
        metaDescription: "Pizza Arte - 阿尔及利亚正宗意大利披萨",
        metaKeywords: "披萨,餐厅,美食,意大利,阿尔及利亚",
        
        // Restaurant Specific
        restaurantName: "Pizza Arte",
        restaurantTagline: "正宗意大利披萨",
        restaurantDescription: "位于阿尔及尔市中心的意大利披萨餐厅",
        
        // Featured Products
        featuredPizza: "四种奶酪披萨",
        featuredPizzaDescription: "四种意大利奶酪的完美融合",
        featuredPizzaPrice: "750 DA",
        
        // Pizza Story
        storyTitle: "披萨之旅",
        storyStep1: "新鲜面团",
        storyStep2: "番茄酱",
        storyStep3: "意大利奶酪",
        storyStep4: "新鲜食材",
        storyStep5: "成品披萨",
        
        // Order Confirmation
        orderConfirmation: "订单确认",
        orderNumber: "订单号",
        estimatedTime: "预计时间",
        thankYou: "感谢您的订单！",
        
        // Error Messages
        errorLoading: "加载错误",
        errorSubmitting: "提交错误",
        errorNetwork: "网络错误",
        errorInvalid: "无效数据"
    },
    
    // ============ 🇪🇸 Español ============
    es: {
        // Navigation
        home: "Inicio",
        menu: "Menú",
        featured: "Destacado",
        about: "Nosotros",
        contact: "Contacto",
        cart: "Carrito",
        
        // Hero Section
        heroTitle: "Auténtico sabor italiano 🍕",
        heroDescription: "Pizza fresca con ingredientes cuidadosamente seleccionados",
        orderNow: "Pedir ahora",
        viewMenu: "Ver menú",
        openMap: "Abrir mapa",
        
        // Categories
        categories: "Categorías",
        allCategories: "Todo",
        
        // Menu
        ourMenu: "Nuestro Menú",
        ingredients: "Ingredientes",
        price: "Precio",
        addToCart: "Añadir",
        addedToCart: "Añadido ✓",
        
        // Featured
        featuredTitle: "Nuestro plato destacado",
        featuredDescription: "Prueba lo mejor que ofrecemos",
        
        // Cart
        yourCart: "Tu Carrito",
        emptyCart: "Carrito vacío",
        total: "Total",
        checkout: "Pagar",
        close: "Cerrar",
        remove: "Eliminar",
        quantity: "Cantidad",
        sendWhatsApp: "Enviar por WhatsApp",
        
        // WhatsApp Messages
        whatsappOrder: "Hola, me gustaría pedir:",
        whatsappGreeting: "Hola, quiero hacer un nuevo pedido",
        orderDetails: "Detalles del pedido",
        deliveryAddress: "Dirección de entrega",
        phoneNumber: "Número de teléfono",
        orderTotal: "Total del pedido",
        
        // Contact
        contactUs: "Contáctanos",
        address: "Dirección",
        phone: "Teléfono",
        hours: "Horario",
        openingHours: "Horario de apertura",
        getDirections: "Cómo llegar",
        
        // Footer
        navigation: "Navegación",
        followUs: "Síguenos",
        allRightsReserved: "Todos los derechos reservados",
        privacyPolicy: "Política de privacidad",
        termsOfService: "Términos de servicio",
        
        // About
        aboutUs: "Sobre nosotros",
        ourStory: "Nuestra historia",
        ourChefs: "Nuestros chefs",
        qualityIngredients: "Ingredientes de calidad",
        
        // Misc
        loading: "Cargando...",
        error: "Ocurrió un error",
        retry: "Reintentar",
        search: "Buscar",
        filter: "Filtrar",
        sortBy: "Ordenar por",
        newest: "Más reciente",
        priceLowToHigh: "Precio: de menor a mayor",
        priceHighToLow: "Precio: de mayor a menor",
        popular: "Popular",
        
        // Language Names
        languageName: "Español",
        languageCode: "es",
        
        // Currency
        currency: "DA",
        currencySymbol: "DA",
        
        // Time
        today: "Hoy",
        tomorrow: "Mañana",
        closed: "Cerrado",
        open: "Abierto",
        
        // Social
        instagram: "Instagram",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitter: "Twitter",
        
        // Order Status
        orderReceived: "Pedido recibido",
        orderConfirmed: "Pedido confirmado",
        orderPreparing: "En preparación",
        orderReady: "Listo",
        orderDelivered: "Entregado",
        
        // Payment
        paymentMethod: "Método de pago",
        cash: "Efectivo",
        card: "Tarjeta",
        online: "En línea",
        
        // Special
        specialOffers: "Ofertas especiales",
        new: "Nuevo",
        popular_dish: "Plato popular",
        recommended: "Recomendado",
        today_special: "Especial de hoy",
        
        // Form
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        send: "Enviar",
        subscribe: "Suscribirse",
        newsletter: "Boletín",
        subscribeSuccess: "Suscripción exitosa",
        
        // Reviews
        reviews: "Reseñas",
        writeReview: "Escribir reseña",
        yourReview: "Tu reseña",
        rating: "Calificación",
        
        // Delivery
        delivery: "Entrega",
        pickup: "Recoger",
        deliveryTime: "Tiempo de entrega",
        deliveryFee: "Tarifa de entrega",
        freeDelivery: "Entrega gratuita",
        minimumOrder: "Pedido mínimo",
        
        // Food Related
        spicy: "Picante",
        vegetarian: "Vegetariano",
        vegan: "Vegano",
        glutenFree: "Sin gluten",
        halal: "Halal",
        
        // Interactive
        scrollDown: "Desplázate hacia abajo",
        swipeForMore: "Desliza para más",
        tapToOrder: "Toca para pedir",
        clickToExpand: "Clic para expandir",
        
        // Accessibility
        menuButton: "Botón de menú",
        closeMenu: "Cerrar menú",
        languageSelector: "Selector de idioma",
        cartButton: "Botón de carrito",
        searchButton: "Botón de búsqueda",
        
        // SEO
        metaDescription: "Pizza Arte - Pizza italiana auténtica en Argelia",
        metaKeywords: "pizza, restaurante, comida, italiano, Argelia",
        
        // Restaurant Specific
        restaurantName: "Pizza Arte",
        restaurantTagline: "Pizza italiana auténtica",
        restaurantDescription: "Restaurante de pizza italiana en el corazón de Argel",
        
        // Featured Products
        featuredPizza: "Pizza Cuatro Quesos",
        featuredPizzaDescription: "Mezcla perfecta de cuatro quesos italianos",
        featuredPizzaPrice: "750 DA",
        
        // Pizza Story
        storyTitle: "El viaje de la pizza",
        storyStep1: "Masa fresca",
        storyStep2: "Salsa de tomate",
        storyStep3: "Queso italiano",
        storyStep4: "Ingredientes frescos",
        storyStep5: "Pizza final",
        
        // Order Confirmation
        orderConfirmation: "Confirmación del pedido",
        orderNumber: "Número de pedido",
        estimatedTime: "Tiempo estimado",
        thankYou: "¡Gracias por tu pedido!",
        
        // Error Messages
        errorLoading: "Error de carga",
        errorSubmitting: "Error de envío",
        errorNetwork: "Error de red",
        errorInvalid: "Datos inválidos"
    }
};

// ============================================
// 🔧 نظام إدارة اللغة - Language Manager
// ============================================

let currentLanguage = 'ar';
let currentTranslations = translations[currentLanguage];

// Get saved language from localStorage
function getSavedLanguage() {
    return localStorage.getItem('restaurant_language');
}

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];
    
    // Check if browser language is supported
    if (translations[shortLang]) {
        return shortLang;
    }
    
    // Check for regional variants (e.g., fr-FR, fr-CA)
    if (shortLang === 'fr') return 'fr';
    if (shortLang === 'en') return 'en';
    if (shortLang === 'zh') return 'zh';
    if (shortLang === 'es') return 'es';
    if (shortLang === 'ar') return 'ar';
    
    // Default language
    return 'ar';
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Set language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not supported`);
        return false;
    }
    
    currentLanguage = lang;
    currentTranslations = translations[lang];
    
    // Save to localStorage
    localStorage.setItem('restaurant_language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Apply translations
    applyTranslations();
    
    // Update meta tags
    updateMetaTags();
    
    // Dispatch event for other components
    document.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));
    
    return true;
}

// Get translation for a key
function translate(key, defaultValue = '') {
    return currentTranslations[key] || translations[currentLanguage][key] || defaultValue || key;
}

// Short alias for translate
function t(key, defaultValue = '') {
    return translate(key, defaultValue);
}

// Apply all translations to DOM
function applyTranslations() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translate(key);
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update elements with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = translate(key);
        
        if (translation) {
            element.title = translation;
        }
    });
    
    // Update elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const translation = translate(key);
        
        if (translation) {
            element.setAttribute('aria-label', translation);
        }
    });
}

// Update meta tags
function updateMetaTags() {
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (metaDescription) {
        metaDescription.content = translate('metaDescription');
    }
    
    if (metaKeywords) {
        metaKeywords.content = translate('metaKeywords');
    }
    
    if (ogTitle) {
        ogTitle.content = translate('restaurantName');
    }
    
    if (ogDescription) {
        ogDescription.content = translate('metaDescription');
    }
    
    // Update title
    document.title = translate('restaurantName') + ' | ' + translate('restaurantTagline');
}

// Format currency
function formatCurrency(amount, includeSymbol = true) {
    const currencySymbol = translate('currencySymbol', 'DA');
    const currencyName = translate('currency', 'DA');
    
    if (currentLanguage === 'ar') {
        return includeSymbol ? `${amount} ${currencyName}` : `${amount}`;
    }
    
    return includeSymbol ? `${amount} ${currencySymbol}` : `${amount}`;
}

// Format date
function formatDate(date, locale = currentLanguage) {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Format time
function formatTime(date, locale = currentLanguage) {
    return new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Get plural form
function pluralize(count, singularKey, pluralKey) {
    if (count === 1) {
        return translate(singularKey);
    }
    return translate(pluralKey);
}

// Initialize language system
function initLanguageSystem() {
    // Get saved language or detect from browser
    const savedLang = getSavedLanguage();
    const initialLang = savedLang || detectBrowserLanguage();
    
    // Set initial language
    setLanguage(initialLang);
    
    // Setup language selector
    setupLanguageSelector();
    
    console.log(`🌍 Language system initialized with: ${initialLang}`);
}

// Setup language selector UI
function setupLanguageSelector() {
    const langSelector = document.querySelector('.language-selector');
    const langCurrent = document.getElementById('langCurrent');
    const langDropdown = document.getElementById('langDropdown');
    
    if (!langSelector || !langCurrent || !langDropdown) return;
    
    // Update current language display
    const currentLangData = {
        ar: { flag: '🇩🇿', name: 'العربية' },
        fr: { flag: '🇫🇷', name: 'Français' },
        en: { flag: '🇬🇧', name: 'English' },
        zh: { flag: '🇨🇳', name: '中文' },
        es: { flag: '🇪🇸', name: 'Español' }
    };
    
    const currentLang = currentLangData[currentLanguage];
    langCurrent.innerHTML = `${currentLang.flag} ${currentLang.name}`;
    
    // Toggle dropdown
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', () => {
        langSelector.classList.remove('active');
    });
    
    // Setup language buttons
    langDropdown.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            langSelector.classList.remove('active');
            
            // Update display
            const langData = currentLangData[lang];
            langCurrent.innerHTML = `${langData.flag} ${langData.name}`;
        });
    });
}

// Export functions for global use
window.translate = translate;
window.t = translate;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
window.formatTime = formatTime;
window.pluralize = pluralize;
window.initLanguageSystem = initLanguageSystem;

// Auto-initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
    initLanguageSystem();
}
