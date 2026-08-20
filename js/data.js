const restaurantData = {
    name: "Pizza Arte",
    nameAr: "بيتزا أرتي",
    description: "مطعم بيتزا إيطالي أصيل",
    logo: "/images/logo.png",
    phone: "+213555123456",
    whatsapp: "+213555123456",
    address: {
        ar: "شارع ديدوش مراد 45، الجزائر",
        fr: "45 Rue Didouche Mourad, Alger",
        en: "45 Didouche Mourad Street, Algiers",
        zh: "阿尔及尔迪杜什穆拉德街45号",
        es: "Calle Didouche Mourad 45, Argel"
    },
    googleMaps: "https://www.google.com/maps/embed?pb=...",
    openingHours: {
        ar: "يوميًا: 11:00 - 23:00",
        fr: "Tous les jours: 11h00 - 23h00",
        en: "Daily: 11:00 AM - 11:00 PM",
        zh: "每天：上午11:00 - 晚上11:00",
        es: "Todos los días: 11:00 - 23:00"
    },
    socialLinks: {
        instagram: "https://instagram.com/pizzaarte",
        facebook: "https://facebook.com/pizzaarte"
    },
    categories: [
        {
            id: "pizza",
            name: {
                ar: "بيتزا",
                fr: "Pizza",
                en: "Pizza",
                zh: "披萨",
                es: "Pizza"
            },
            icon: "🍕"
        },
        {
            id: "calzone",
            name: {
                ar: "كالزوني",
                fr: "Calzone",
                en: "Calzone",
                zh: "半月披萨",
                es: "Calzone"
            },
            icon: "🥟"
        },
        {
            id: "dessert",
            name: {
                ar: "حلويات",
                fr: "Desserts",
                en: "Desserts",
                zh: "甜点",
                es: "Postres"
            },
            icon: "🍰"
        }
    ],
    products: [
        {
            id: "pizza-margherita",
            category: "pizza",
            name: {
                ar: "بيتزا مارغريتا",
                fr: "Pizza Margherita",
                en: "Margherita Pizza",
                zh: "玛格丽特披萨",
                es: "Pizza Margarita"
            },
            description: {
                ar: "البيتزا الكلاسيكية بصلصة الطماطم والموزاريلا",
                fr: "La pizza classique avec sauce tomate et mozzarella",
                en: "The classic pizza with tomato sauce and mozzarella",
                zh: "经典披萨配番茄酱和马苏里拉奶酪",
                es: "La pizza clásica con salsa de tomate y mozzarella"
            },
            ingredients: {
                ar: ["صلصة طماطم", "موزاريلا", "ريحان"],
                fr: ["Sauce tomate", "Mozzarella", "Basilic"],
                en: ["Tomato sauce", "Mozzarella", "Basil"],
                zh: ["番茄酱", "马苏里拉", "罗勒"],
                es: ["Salsa de tomate", "Mozzarella", "Albahaca"]
            },
            price: 450,
            currency: "DA",
            image: "/images/pizza-margherita.jpg",
            featured: false
        },
        {
            id: "pizza-4-formaggi",
            category: "pizza",
            name: {
                ar: "بيتزا الأجبان الأربعة",
                fr: "Pizza 4 Fromages",
                en: "Four Cheese Pizza",
                zh: "四种奶酪披萨",
                es: "Pizza Cuatro Quesos"
            },
            description: {
                ar: "بيتزا غنية بأربعة أنواع من الجبن",
                fr: "Pizza riche en quatre fromages",
                en: "Rich pizza with four types of cheese",
                zh: "四种奶酪丰富的披萨",
                es: "Pizza rica con cuatro tipos de queso"
            },
            ingredients: {
                ar: ["موزاريلا", "شيدر", "إيدام", "بارميزان"],
                fr: ["Mozzarella", "Cheddar", "Edam", "Parmesan"],
                en: ["Mozzarella", "Cheddar", "Edam", "Parmesan"],
                zh: ["马苏里拉", "切达", "埃达姆", "帕尔马干酪"],
                es: ["Mozzarella", "Cheddar", "Edam", "Parmesano"]
            },
            price: 750,
            currency: "DA",
            image: "/images/pizza-4-formaggi.jpg",
            featured: true
        },
        {
            id: "pizza-diavola",
            category: "pizza",
            name: {
                ar: "بيتزا ديافولا",
                fr: "Pizza Diavola",
                en: "Diavola Pizza",
                zh: "魔鬼披萨",
                es: "Pizza Diavola"
            },
            description: {
                ar: "بيتزا حارة بالسلامي والفلفل الحار",
                fr: "Pizza épicée au salami et piment",
                en: "Spicy pizza with salami and chili",
                zh: "辣味披萨配萨拉米香肠和辣椒",
                es: "Pizza picante con salami y chile"
            },
            ingredients: {
                ar: ["صلصة طماطم", "موزاريلا", "سلامي حار", "فلفل حار"],
                fr: ["Sauce tomate", "Mozzarella", "Salami épicé", "Piment"],
                en: ["Tomato sauce", "Mozzarella", "Spicy salami", "Chili"],
                zh: ["番茄酱", "马苏里拉", "辣萨拉米", "辣椒"],
                es: ["Salsa de tomate", "Mozzarella", "Salami picante", "Chile"]
            },
            price: 650,
            currency: "DA",
            image: "/images/pizza-diavola.jpg",
            featured: false
        },
        {
            id: "calzone-classico",
            category: "calzone",
            name: {
                ar: "كالزوني كلاسيكو",
                fr: "Calzone Classico",
                en: "Classic Calzone",
                zh: "经典半月披萨",
                es: "Calzone Clásico"
            },
            description: {
                ar: "كالزوني محشو بالجبن والطماطم",
                fr: "Calzone farci au fromage et tomate",
                en: "Calzone filled with cheese and tomato",
                zh: "填满奶酪和番茄的半月披萨",
                es: "Calzone relleno de queso y tomate"
            },
            ingredients: {
                ar: ["موزاريلا", "ريكوتا", "صلصة طماطم", "ريحان"],
                fr: ["Mozzarella", "Ricotta", "Sauce tomate", "Basilic"],
                en: ["Mozzarella", "Ricotta", "Tomato sauce", "Basil"],
                zh: ["马苏里拉", "里科塔", "番茄酱", "罗勒"],
                es: ["Mozzarella", "Ricotta", "Salsa de tomate", "Albahaca"]
            },
            price: 550,
            currency: "DA",
            image: "/images/calzone.jpg",
            featured: false
        },
        {
            id: "tiramisu",
            category: "dessert",
            name: {
                ar: "تيراميسو",
                fr: "Tiramisu",
                en: "Tiramisu",
                zh: "提拉米苏",
                es: "Tiramisú"
            },
            description: {
                ar: "حلوى إيطالية كلاسيكية بالقهوة والكاكاو",
                fr: "Dessert italien classique au café et cacao",
                en: "Classic Italian dessert with coffee and cocoa",
                zh: "经典意大利甜点配咖啡和可可",
                es: "Postre italiano clásico con café y cacao"
            },
            ingredients: {
                ar: ["مسكربون", "قهوة", "كاكاو", "بسكويت"],
                fr: ["Mascarpone", "Café", "Cacao", "Biscuits"],
                en: ["Mascarpone", "Coffee", "Cocoa", "Biscuits"],
                zh: ["马斯卡彭", "咖啡", "可可", "饼干"],
                es: ["Mascarpone", "Café", "Cacao", "Galletas"]
            },
            price: 350,
            currency: "DA",
            image: "/images/tiramisu.jpg",
            featured: false
        }
    ]
};
