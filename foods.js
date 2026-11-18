// CIRCE's offline food catalogue. Nutrients are per displayed serving.
// For drinks, grams denotes the serving volume in ml. An unknown portion weight is null.
globalThis.CIRCE_FOODS = [
  {
    "name": "Boiled egg",
    "brand": "Whole food",
    "aliases": [
      "boiled egg",
      "boiled eggs",
      "hard boiled egg",
      "soft boiled egg",
      "telur rebus",
      "telor rebus",
      "telur ayam rebus"
    ],
    "unit": "large egg (50 g)",
    "grams": 50,
    "kcal": 78,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 5.3,
    "source": "USDA FoodData Central · large egg",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/173424/nutrients",
    "estimated": false,
    "image": "eggs",
    "fibre": 0,
    "sugar": 0.6,
    "salt": 0.16,
    "method": "Boiled"
  },
  {
    "name": "Banana walnut cake",
    "brand": "SaladStop!",
    "aliases": [
      "saladstop banana walnut cake",
      "banana bread walnut saladstop",
      "banana walnut bread saladstop",
      "banana bread walnut",
      "saladstop banana bread",
      "salad stop banana bread",
      "banana walnut cake"
    ],
    "unit": "slice",
    "grams": null,
    "kcal": 215,
    "protein": 5,
    "carbs": 39,
    "fat": 5,
    "source": "SaladStop! Indonesia · menu portion",
    "sourceUrl": "https://saladstop.co.id/grab-go/",
    "estimated": false,
    "image": "bread",
    "method": "Baked"
  },
  {
    "name": "Sweet & sour mixed rice bowl",
    "brand": "Solaria",
    "aliases": [
      "solaria ricebowl mix sweet and sour",
      "solaria rice bowl mix sweet and sour",
      "solaria express bowl mix asam manis",
      "solaria ricebowl sweet and sour",
      "express bowl mix asam manis",
      "mixed sweet and sour rice bowl",
      "solaria mix sweet and sour",
      "solaria ricebowl mix",
      "solaria rice bowl asam manis"
    ],
    "unit": "bowl (about 380 g)",
    "grams": 380,
    "kcal": 570,
    "protein": 23,
    "carbs": 74,
    "fat": 20,
    "source": "Recipe estimate · rice, battered chicken, fish, prawns and sweet and sour sauce",
    "estimated": true,
    "image": "rice",
    "method": "Fried topping with steamed rice"
  },
  {
    "name": "Original energy drink",
    "brand": "Monster",
    "aliases": [
      "monster energy original",
      "monster energy drink",
      "monster drink",
      "monster original",
      "monster green",
      "monster"
    ],
    "unit": "can (500 ml)",
    "grams": 500,
    "kcal": 237,
    "protein": 0,
    "carbs": 60,
    "fat": 0,
    "source": "UK can label · Tesco",
    "sourceUrl": "https://www.tesco.com/shop/en-GB/products/264556669",
    "estimated": false,
    "image": "monster",
    "sugar": 55,
    "salt": 0.96
  },
  {
    "name": "Original lager",
    "brand": "Heineken",
    "aliases": [
      "heineken small can",
      "heineken original",
      "heineken beer",
      "heineken lager",
      "heineken bir",
      "heineken"
    ],
    "unit": "small can (330 ml)",
    "grams": 330,
    "kcal": 139,
    "protein": 0,
    "carbs": 10.6,
    "fat": 0,
    "source": "Heineken Indonesia · scaled to 330 ml",
    "sourceUrl": "https://www.heineken.com/id/en/our-products/heineken-original",
    "estimated": false,
    "image": "heineken",
    "sugar": 0
  },
  {
    "name": "Coca-Cola Zero Sugar",
    "brand": "Coca-Cola",
    "aliases": [
      "zero cola",
      "zero coke",
      "coke zero",
      "cola zero",
      "coca cola zero",
      "coca-cola zero sugar",
      "sugar free coke",
      "coca cola no sugar"
    ],
    "unit": "can (330 ml)",
    "grams": 330,
    "kcal": 1,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "source": "Coca-Cola GB · scaled to 330 ml",
    "sourceUrl": "https://www.coca-cola.com/gb/en/brands/coca-cola-zero-sugar",
    "estimated": false,
    "image": "cola",
    "sugar": 0,
    "salt": 0.02
  },
  {
    "name": "Ultra White energy drink",
    "brand": "Monster",
    "aliases": [
      "monster zero",
      "monster ultra",
      "monster white",
      "white monster",
      "sugar free monster",
      "monster sugar free",
      "monster ultra white",
      "zero ultra monster"
    ],
    "unit": "can (500 ml)",
    "grams": 500,
    "kcal": 11,
    "protein": 0,
    "carbs": 4.4,
    "fat": 0,
    "source": "UK can label · Tesco",
    "sourceUrl": "https://www.tesco.com/groceries/en-GB/products/294085564",
    "estimated": false,
    "sugar": 0,
    "salt": 1
  },
  {
    "name": "Original Taste cola",
    "brand": "Coca-Cola",
    "aliases": [
      "coca cola original",
      "coca cola classic",
      "regular coke",
      "regular cola",
      "full sugar coke",
      "coca cola",
      "coke"
    ],
    "unit": "can (330 ml)",
    "grams": 330,
    "kcal": 139,
    "protein": 0,
    "carbs": 35,
    "fat": 0,
    "source": "Coca-Cola GB · scaled to 330 ml",
    "sourceUrl": "https://www.coca-cola.com/gb/en/brands/coca-cola-original-taste",
    "estimated": false,
    "sugar": 35,
    "salt": 0
  },
  {
    "name": "0.0 alcohol-free lager",
    "brand": "Heineken",
    "aliases": [
      "heineken 0.0",
      "heineken zero",
      "heineken alcohol free",
      "heineken nol"
    ],
    "unit": "bottle (330 ml)",
    "grams": 330,
    "kcal": 69,
    "protein": 1.3,
    "carbs": 15.8,
    "fat": 0,
    "source": "Heineken Singapore · scaled to 330 ml",
    "sourceUrl": "https://www.heineken.com/sg/en/our-products/heineken-0-0",
    "estimated": false,
    "sugar": 4.3
  },
  {
    "name": "Original energy drink",
    "brand": "Red Bull",
    "aliases": [
      "red bull original",
      "red bull energy drink",
      "redbull",
      "red bull"
    ],
    "unit": "can (250 ml)",
    "grams": 250,
    "kcal": 115,
    "protein": 0,
    "carbs": 27.5,
    "fat": 0,
    "source": "Red Bull GB · scaled to 250 ml",
    "sourceUrl": "https://www.redbull.com/gb-en/energydrink/products/red-bull-energy-drink-ingredients-list",
    "estimated": false,
    "sugar": 27,
    "salt": 0.25
  },
  {
    "name": "Pocari Sweat",
    "brand": "Otsuka",
    "aliases": [
      "pocari sweat",
      "pocari",
      "minuman pocari"
    ],
    "unit": "bottle (500 ml)",
    "grams": 500,
    "kcal": 125,
    "protein": 0,
    "carbs": 31,
    "fat": 0,
    "source": "Otsuka Japan · 500 ml PET bottle",
    "sourceUrl": "https://www.otsuka.co.jp/en/nutraceutical/products/pocarisweat/",
    "estimated": false,
    "salt": 0.6
  },
  {
    "name": "Yakult Original",
    "brand": "Yakult",
    "aliases": [
      "yakult original",
      "yakult susu",
      "yakult"
    ],
    "unit": "bottle (65 ml)",
    "grams": 65,
    "kcal": 43,
    "protein": 0.8,
    "carbs": 10,
    "fat": 0,
    "source": "Yakult UK · 65 ml bottle",
    "sourceUrl": "https://www.yakult.co.uk/products/yakult-original/",
    "estimated": false,
    "sugar": 8.8,
    "salt": 0.03
  },
  {
    "name": "Mi goreng original",
    "brand": "Indomie",
    "aliases": [
      "indomie goreng original",
      "indomie mie goreng",
      "indomie mi goreng",
      "indomie goreng"
    ],
    "unit": "packet (85 g dry)",
    "grams": 85,
    "kcal": 380,
    "protein": 8,
    "carbs": 54,
    "fat": 14,
    "source": "Indonesian label transcription · NilaiGizi",
    "sourceUrl": "https://nilaigizi.com/gizi/detailproduk/1200/indomie-goreng",
    "estimated": false,
    "method": "Boiled, drained and mixed with sachets"
  },
  {
    "name": "Tehbotol original",
    "brand": "Sosro",
    "aliases": [
      "teh botol sosro original",
      "tehbotol original",
      "tehbotol sosro",
      "teh botol"
    ],
    "unit": "bottle (450 ml)",
    "grams": 450,
    "kcal": 140,
    "protein": 0,
    "carbs": 34,
    "fat": 0,
    "source": "Indonesian label transcription · NilaiGizi",
    "sourceUrl": "https://nilaigizi.com/gizi/detailproduk/1553/nilai-kandungan-gizi-teh-botol-sosro-original",
    "estimated": false,
    "sugar": 32,
    "salt": 0
  },
  {
    "name": "Tehbotol less sugar",
    "brand": "Sosro",
    "aliases": [
      "tehbotol less sugar",
      "teh botol sosro less sugar",
      "teh botol rendah gula"
    ],
    "unit": "bottle (450 ml)",
    "grams": 450,
    "kcal": 90,
    "protein": 0,
    "carbs": 22,
    "fat": 0,
    "source": "Indonesian label transcription · NilaiGizi",
    "sourceUrl": "https://nilaigizi.com/gizi/detailproduk/1554/nilai-kandungan-gizi-teh-botol-sosro-less-sugar",
    "estimated": false,
    "sugar": 22,
    "salt": 0
  },
  {
    "name": "Roti tawar",
    "brand": "Sari Roti",
    "aliases": [
      "sari roti tawar",
      "sariroti white bread",
      "sariroti tawar",
      "roti tawar sari roti"
    ],
    "unit": "portion (74 g)",
    "grams": 74,
    "kcal": 200,
    "protein": 7,
    "carbs": 37,
    "fat": 3,
    "source": "Indonesian label transcription · NilaiGizi",
    "sourceUrl": "https://nilaigizi.com/gizi/detailproduk/1223/Sariroti-Roti-tawar-",
    "estimated": false,
    "sugar": 2,
    "fibre": 1,
    "salt": 0.7
  },
  {
    "name": "Mango yoghurt",
    "brand": "SaladStop!",
    "aliases": [
      "saladstop mango yogurt",
      "saladstop mango yoghurt"
    ],
    "unit": "pot",
    "grams": null,
    "kcal": 275,
    "protein": 10,
    "carbs": 47,
    "fat": 1,
    "source": "SaladStop! Indonesia · menu portion",
    "sourceUrl": "https://saladstop.co.id/grab-go/",
    "estimated": false
  },
  {
    "name": "Mixed berries yoghurt",
    "brand": "SaladStop!",
    "aliases": [
      "saladstop mixed berries yogurt",
      "saladstop berries yoghurt"
    ],
    "unit": "pot",
    "grams": null,
    "kcal": 261,
    "protein": 11,
    "carbs": 42,
    "fat": 6,
    "source": "SaladStop! Indonesia · menu portion",
    "sourceUrl": "https://saladstop.co.id/grab-go/",
    "estimated": false
  },
  {
    "name": "Mango muesli",
    "brand": "SaladStop!",
    "aliases": [
      "saladstop mango muesli"
    ],
    "unit": "pot",
    "grams": null,
    "kcal": 290,
    "protein": 10,
    "carbs": 50,
    "fat": 6,
    "source": "SaladStop! Indonesia · menu portion",
    "sourceUrl": "https://saladstop.co.id/grab-go/",
    "estimated": false
  },
  {
    "name": "Yuzu muesli",
    "brand": "SaladStop!",
    "aliases": [
      "saladstop yuzu muesli"
    ],
    "unit": "pot",
    "grams": null,
    "kcal": 283,
    "protein": 10,
    "carbs": 48,
    "fat": 6,
    "source": "SaladStop! Indonesia · menu portion",
    "sourceUrl": "https://saladstop.co.id/grab-go/",
    "estimated": false
  },
  {
    "name": "Sausage roll",
    "brand": "Greggs",
    "aliases": [
      "greggs sausage roll",
      "greggs sausage rolls"
    ],
    "unit": "roll (103 g)",
    "grams": 103,
    "kcal": 347,
    "protein": 9.1,
    "carbs": 24,
    "fat": 24,
    "source": "Greggs UK · menu portion",
    "sourceUrl": "https://www.greggs.com/menu/product/sausage-roll-1000446/",
    "estimated": false,
    "sugar": 0,
    "salt": 1.5,
    "method": "Baked"
  },
  {
    "name": "Vegan sausage roll",
    "brand": "Greggs",
    "aliases": [
      "greggs vegan sausage roll",
      "greggs vegan roll",
      "vegan greggs sausage roll",
      "greggs pork free roll"
    ],
    "unit": "roll (101 g)",
    "grams": 101,
    "kcal": 308,
    "protein": 11,
    "carbs": 21,
    "fat": 19,
    "source": "Greggs UK · menu portion",
    "sourceUrl": "https://www.greggs.com/menu/product/vegan-roll-pork-free-1003598",
    "estimated": false,
    "sugar": 0.7,
    "salt": 1.8,
    "method": "Baked"
  },
  {
    "name": "All butter croissant",
    "brand": "Pret A Manger",
    "aliases": [
      "pret butter croissant",
      "pret plain croissant",
      "pret croissant",
      "pret a manger croissant"
    ],
    "unit": "croissant (71 g)",
    "grams": 71,
    "kcal": 291,
    "protein": 6.5,
    "carbs": 27.5,
    "fat": 16.8,
    "source": "Pret UK · menu portion",
    "sourceUrl": "https://www.pret.co.uk/en-GB/products/UK000765/all-butter-croissant",
    "estimated": false,
    "salt": 0.68,
    "sugar": 4.5,
    "fibre": 1.6,
    "method": "Baked"
  },
  {
    "name": "Chicken & bacon sandwich",
    "brand": "Tesco",
    "aliases": [
      "tesco chicken bacon sandwich",
      "tesco chicken and bacon sandwich",
      "tesco chicken bacon meal deal sandwich"
    ],
    "unit": "pack (165 g)",
    "grams": 165,
    "kcal": 373,
    "protein": 20.5,
    "carbs": 43.6,
    "fat": 12.4,
    "source": "Tesco UK · pack label",
    "sourceUrl": "https://www.tesco.com/shop/en-GB/products/266664096",
    "estimated": false,
    "sugar": 3.5,
    "salt": 1.21,
    "fibre": 2.6
  },
  {
    "name": "Ready salted crisps",
    "brand": "Walkers",
    "aliases": [
      "walkers ready salted",
      "walkers crisps ready salted",
      "walkers salted crisps"
    ],
    "unit": "packet (25 g)",
    "grams": 25,
    "kcal": 130,
    "protein": 1.6,
    "carbs": 13,
    "fat": 7.7,
    "source": "Walkers UK · 25 g packet",
    "sourceUrl": "https://www.walkers.co.uk/our-range/walkers-crisps/ready-salted",
    "estimated": false,
    "fibre": 1,
    "salt": 0.34
  },
  {
    "name": "Dairy Milk chocolate",
    "brand": "Cadbury",
    "aliases": [
      "cadbury dairy milk",
      "cadburys dairy milk",
      "dairy milk chocolate",
      "cadbury milk chocolate"
    ],
    "unit": "bar (45 g)",
    "grams": 45,
    "kcal": 240,
    "protein": 3.3,
    "carbs": 25.7,
    "fat": 13.5,
    "source": "Cadbury UK · 45 g bar",
    "sourceUrl": "https://shop.cadbury.co.uk/p/cadbury-dairy-milk-45g-bar/17965381/",
    "estimated": false,
    "fibre": 0.9,
    "sugar": 25.2,
    "salt": 0.11
  },
  {
    "name": "Original wheat biscuit",
    "brand": "Weetabix",
    "aliases": [
      "weetabix original",
      "weetabix biscuit",
      "weetabix"
    ],
    "unit": "biscuit (18.75 g)",
    "grams": 18.75,
    "kcal": 68,
    "protein": 2.25,
    "carbs": 13,
    "fat": 0.4,
    "source": "Weetabix UK · half of the two-biscuit label serving",
    "sourceUrl": "https://weetabix.co.uk/our-products/original-classic/weetabix/",
    "estimated": false,
    "fibre": 1.9,
    "sugar": 0.8,
    "salt": 0.05
  },
  {
    "name": "Original cashew milk",
    "brand": "Alpro",
    "aliases": [
      "alpro cashew",
      "alpro cashew milk",
      "alpro cashew drink"
    ],
    "unit": "glass (200 ml)",
    "grams": 200,
    "kcal": 46,
    "protein": 1,
    "carbs": 5.4,
    "fat": 2.2,
    "source": "Alpro Ireland · scaled to 200 ml",
    "sourceUrl": "https://www.alpro.com/ie/products/drinks/cashew-original-chilled",
    "estimated": false,
    "fibre": 0.4,
    "sugar": 4,
    "salt": 0.28
  },
  {
    "name": "Grilled chicken breast",
    "brand": "Whole food",
    "aliases": [
      "grilled chicken",
      "grilled chicken breast",
      "ayam panggang dada",
      "dada ayam bakar",
      "skinless chicken breast"
    ],
    "unit": "fillet (120 g)",
    "grams": 120,
    "kcal": 181,
    "protein": 36.6,
    "carbs": 0,
    "fat": 3.8,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/171534/nutrients",
    "estimated": true
  },
  {
    "name": "Baked salmon",
    "brand": "Whole food",
    "aliases": [
      "baked salmon",
      "roast salmon",
      "salmon fillet",
      "salmon panggang"
    ],
    "unit": "fillet (145 g)",
    "grams": 145,
    "kcal": 299,
    "protein": 32,
    "carbs": 0,
    "fat": 17.8,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/175168/nutrients",
    "estimated": true
  },
  {
    "name": "Tuna in spring water",
    "brand": "Whole food",
    "aliases": [
      "canned tuna in water",
      "tinned tuna",
      "tuna in spring water",
      "tuna in brine",
      "plain tuna",
      "tuna kaleng air"
    ],
    "unit": "drained portion (100 g)",
    "grams": 100,
    "kcal": 86,
    "protein": 19.4,
    "carbs": 0,
    "fat": 1,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/173709/nutrients",
    "estimated": true
  },
  {
    "name": "Porridge",
    "brand": "Whole food",
    "aliases": [
      "oatmeal",
      "porridge",
      "cooked oats",
      "bubur oat"
    ],
    "unit": "bowl (240 g)",
    "grams": 240,
    "kcal": 182,
    "protein": 5.3,
    "carbs": 26.9,
    "fat": 6.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2708380/nutrients",
    "estimated": true
  },
  {
    "name": "Rolled oats",
    "brand": "Whole food",
    "aliases": [
      "dry oats",
      "rolled oats",
      "porridge oats",
      "oat kering"
    ],
    "unit": "portion (40 g)",
    "grams": 40,
    "kcal": 152,
    "protein": 5.4,
    "carbs": 27.5,
    "fat": 2.4,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2346396/nutrients",
    "estimated": true
  },
  {
    "name": "Cooked broccoli",
    "brand": "Whole food",
    "aliases": [
      "steamed broccoli",
      "broccoli",
      "brokoli kukus",
      "brokoli rebus",
      "boiled broccoli"
    ],
    "unit": "portion (80 g)",
    "grams": 80,
    "kcal": 33,
    "protein": 2.2,
    "carbs": 5.2,
    "fat": 0.3,
    "fibre": 2,
    "sugar": 1.1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2709645/nutrients",
    "estimated": true
  },
  {
    "name": "Apple",
    "brand": "Whole food",
    "aliases": [
      "apple",
      "apel"
    ],
    "unit": "medium apple (182 g)",
    "grams": 182,
    "kcal": 95,
    "protein": 0.5,
    "carbs": 25.1,
    "fat": 0.3,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/171688/nutrients",
    "estimated": true
  },
  {
    "name": "Orange",
    "brand": "Whole food",
    "aliases": [
      "orange",
      "jeruk"
    ],
    "unit": "medium orange (131 g)",
    "grams": 131,
    "kcal": 62,
    "protein": 1.2,
    "carbs": 15.5,
    "fat": 0.2,
    "fibre": 3.1,
    "sugar": 12.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/169097/nutrients",
    "estimated": true
  },
  {
    "name": "Strawberries",
    "brand": "Whole food",
    "aliases": [
      "strawberries",
      "strawberry",
      "stroberi"
    ],
    "unit": "handful (80 g)",
    "grams": 80,
    "kcal": 26,
    "protein": 0.5,
    "carbs": 6.2,
    "fat": 0.2,
    "fibre": 1.6,
    "sugar": 3.9,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/167762/nutrients",
    "estimated": true
  },
  {
    "name": "Blueberries",
    "brand": "Whole food",
    "aliases": [
      "blueberries",
      "blueberry",
      "bluberi"
    ],
    "unit": "handful (80 g)",
    "grams": 80,
    "kcal": 46,
    "protein": 0.6,
    "carbs": 11.7,
    "fat": 0.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2346411/nutrients",
    "estimated": true
  },
  {
    "name": "Avocado",
    "brand": "Whole food",
    "aliases": [
      "avocado",
      "alpukat"
    ],
    "unit": "whole avocado, flesh (150 g)",
    "grams": 150,
    "kcal": 240,
    "protein": 3,
    "carbs": 12.8,
    "fat": 22.1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/171705/nutrients",
    "estimated": true
  },
  {
    "name": "Fat-free Greek yoghurt",
    "brand": "Whole food",
    "aliases": [
      "fat free greek yogurt",
      "greek yoghurt 0",
      "nonfat greek yogurt",
      "0% greek yoghurt"
    ],
    "unit": "pot (150 g)",
    "grams": 150,
    "kcal": 89,
    "protein": 15.5,
    "carbs": 5.4,
    "fat": 0.6,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2705424/nutrients",
    "estimated": true
  },
  {
    "name": "Whole milk Greek yoghurt",
    "brand": "Whole food",
    "aliases": [
      "plain greek yogurt",
      "greek yoghurt",
      "greek yogurt",
      "yoghurt yunani"
    ],
    "unit": "pot (150 g)",
    "grams": 150,
    "kcal": 143,
    "protein": 13.2,
    "carbs": 7.2,
    "fat": 6.6,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2259794/nutrients",
    "estimated": true
  },
  {
    "name": "Whole milk",
    "brand": "Whole food",
    "aliases": [
      "whole milk",
      "full cream milk",
      "susu full cream",
      "full fat milk"
    ],
    "unit": "glass (200 ml)",
    "grams": 200,
    "kcal": 120,
    "protein": 6.6,
    "carbs": 9.2,
    "fat": 6.4,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/746782/nutrients",
    "estimated": true
  },
  {
    "name": "Almonds",
    "brand": "Whole food",
    "aliases": [
      "almonds",
      "raw almonds",
      "kacang almond"
    ],
    "unit": "handful (28 g)",
    "grams": 28,
    "kcal": 163,
    "protein": 6,
    "carbs": 5.6,
    "fat": 14.3,
    "fibre": 3,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2346393/nutrients",
    "estimated": true
  },
  {
    "name": "Peanut butter",
    "brand": "Whole food",
    "aliases": [
      "peanut butter",
      "selai kacang"
    ],
    "unit": "tablespoon (16 g)",
    "grams": 16,
    "kcal": 94,
    "protein": 3.5,
    "carbs": 3.8,
    "fat": 7.9,
    "fibre": 0.9,
    "sugar": 1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/174294/nutrients",
    "estimated": true
  },
  {
    "name": "Wholemeal bread",
    "brand": "Whole food",
    "aliases": [
      "wholemeal bread",
      "whole wheat bread",
      "wholewheat bread",
      "brown bread",
      "roti gandum"
    ],
    "unit": "slice (36 g)",
    "grams": 36,
    "kcal": 91,
    "protein": 4.4,
    "carbs": 15.5,
    "fat": 1.3,
    "fibre": 2.2,
    "sugar": 1.6,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2707709/nutrients",
    "estimated": true
  },
  {
    "name": "Scrambled egg",
    "brand": "Whole food",
    "aliases": [
      "scrambled eggs",
      "scrambled egg",
      "telur orak arik",
      "telur orak-arik"
    ],
    "unit": "large egg (61 g)",
    "grams": 61,
    "kcal": 91,
    "protein": 6.1,
    "carbs": 1,
    "fat": 6.7,
    "fibre": 0,
    "sugar": 0.9,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172187/nutrients",
    "estimated": true
  },
  {
    "name": "Poached egg",
    "brand": "Whole food",
    "aliases": [
      "poached egg",
      "poached eggs",
      "telur poached"
    ],
    "unit": "large egg (50 g)",
    "grams": 50,
    "kcal": 72,
    "protein": 6.3,
    "carbs": 0.4,
    "fat": 4.8,
    "fibre": 0,
    "sugar": 0.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172186/nutrients",
    "estimated": true
  },
  {
    "name": "Salted butter",
    "brand": "Whole food",
    "aliases": [
      "salted butter",
      "butter",
      "mentega"
    ],
    "unit": "teaspoon (5 g)",
    "grams": 5,
    "kcal": 36,
    "protein": 0,
    "carbs": 0,
    "fat": 4.1,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/173410/nutrients",
    "estimated": true
  },
  {
    "name": "Granulated sugar",
    "brand": "Whole food",
    "aliases": [
      "granulated sugar",
      "white sugar",
      "gula pasir",
      "sugar"
    ],
    "unit": "teaspoon (4 g)",
    "grams": 4,
    "kcal": 15,
    "protein": 0,
    "carbs": 4,
    "fat": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/746784/nutrients",
    "estimated": true
  },
  {
    "name": "Boiled potatoes",
    "brand": "Whole food",
    "aliases": [
      "boiled potatoes",
      "boiled potato",
      "kentang rebus"
    ],
    "unit": "portion (150 g)",
    "grams": 150,
    "kcal": 129,
    "protein": 2.6,
    "carbs": 30,
    "fat": 0.2,
    "fibre": 2.7,
    "sugar": 1.3,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/170440/nutrients",
    "estimated": true
  },
  {
    "name": "Mashed potatoes",
    "brand": "Whole food",
    "aliases": [
      "mashed potato",
      "mash potato",
      "potato mash",
      "kentang tumbuk",
      "mashed potatoes"
    ],
    "unit": "portion (180 g)",
    "grams": 180,
    "kcal": 203,
    "protein": 3.4,
    "carbs": 30.2,
    "fat": 7.6,
    "fibre": 2.7,
    "sugar": 2.5,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/168555/nutrients",
    "estimated": true
  },
  {
    "name": "Boiled lentils",
    "brand": "Whole food",
    "aliases": [
      "boiled lentils",
      "lentils",
      "cooked lentils"
    ],
    "unit": "portion (100 g)",
    "grams": 100,
    "kcal": 116,
    "protein": 9,
    "carbs": 20.1,
    "fat": 0.4,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172421/nutrients",
    "estimated": true
  },
  {
    "name": "Firm silken tofu",
    "brand": "Mori-Nu",
    "aliases": [
      "silken tofu",
      "tahu sutra",
      "silken firm tofu"
    ],
    "unit": "portion (100 g)",
    "grams": 100,
    "kcal": 62,
    "protein": 6.9,
    "carbs": 2.4,
    "fat": 2.7,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172461/nutrients",
    "estimated": true
  },
  {
    "name": "Tempeh",
    "brand": "Whole food",
    "aliases": [
      "tempeh",
      "tempe",
      "plain tempeh"
    ],
    "unit": "portion (75 g)",
    "grams": 75,
    "kcal": 144,
    "protein": 15.2,
    "carbs": 5.7,
    "fat": 8.1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/174272/nutrients",
    "estimated": true
  },
  {
    "name": "Steamed white rice",
    "brand": "Whole food",
    "aliases": [
      "steamed rice",
      "boiled rice",
      "white rice",
      "nasi putih",
      "nasi kukus",
      "cooked rice",
      "rice"
    ],
    "unit": "bowl (150 g)",
    "grams": 150,
    "kcal": 195,
    "protein": 3.8,
    "carbs": 43.5,
    "fat": 0.6,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2710788/nutrients",
    "estimated": true
  },
  {
    "name": "Cooked pasta",
    "brand": "Whole food",
    "aliases": [
      "spaghetti",
      "cooked pasta",
      "pasta"
    ],
    "unit": "portion (180 g)",
    "grams": 180,
    "kcal": 284,
    "protein": 10.4,
    "carbs": 55.6,
    "fat": 1.7,
    "fibre": 3.2,
    "sugar": 1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/169737/nutrients",
    "estimated": true
  },
  {
    "name": "Carrot",
    "brand": "Whole food",
    "aliases": [
      "carrots",
      "carrot",
      "wortel"
    ],
    "unit": "medium carrot (61 g)",
    "grams": 61,
    "kcal": 25,
    "protein": 0.6,
    "carbs": 5.9,
    "fat": 0.1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/170393/nutrients",
    "estimated": true
  },
  {
    "name": "Tuna in oil",
    "brand": "Whole food",
    "aliases": [
      "tuna packed in oil",
      "tinned tuna in oil",
      "tuna in oil",
      "tuna minyak"
    ],
    "unit": "drained portion (100 g)",
    "grams": 100,
    "kcal": 186,
    "protein": 26.5,
    "carbs": 0,
    "fat": 8.1,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/175157/nutrients",
    "estimated": true
  },
  {
    "name": "Pan-fried bacon",
    "brand": "Whole food",
    "aliases": [
      "bacon",
      "fried bacon",
      "bacon rasher"
    ],
    "unit": "rasher (16 g)",
    "grams": 16,
    "kcal": 75,
    "protein": 5.4,
    "carbs": 0.3,
    "fat": 5.6,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/168322/nutrients",
    "estimated": true
  },
  {
    "name": "Grilled sirloin steak",
    "brand": "Whole food",
    "aliases": [
      "steak",
      "grilled steak",
      "sirloin steak",
      "daging sapi panggang"
    ],
    "unit": "steak (150 g)",
    "grams": 150,
    "kcal": 272,
    "protein": 42.5,
    "carbs": 1.1,
    "fat": 10.8,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172170/nutrients",
    "estimated": true
  },
  {
    "name": "Mango",
    "brand": "Whole food",
    "aliases": [
      "mango",
      "mangga"
    ],
    "unit": "portion (150 g)",
    "grams": 150,
    "kcal": 90,
    "protein": 1.2,
    "carbs": 22.5,
    "fat": 0.6,
    "fibre": 2.4,
    "sugar": 20.6,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2709242/nutrients",
    "estimated": true
  },
  {
    "name": "Black coffee",
    "brand": "Whole food",
    "aliases": [
      "black coffee",
      "kopi hitam",
      "americano",
      "kopi tanpa gula"
    ],
    "unit": "cup (240 ml)",
    "grams": 240,
    "kcal": 1,
    "protein": 0.3,
    "carbs": 0,
    "fat": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2710376/nutrients",
    "estimated": true
  },
  {
    "name": "Breaded fried chicken breast",
    "brand": "Whole food",
    "aliases": [
      "fried chicken breast",
      "breaded chicken",
      "ayam goreng tepung",
      "fried chicken"
    ],
    "unit": "piece (150 g)",
    "grams": 150,
    "kcal": 345,
    "protein": 35.3,
    "carbs": 9,
    "fat": 18.6,
    "fibre": 0.2,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/170756/nutrients",
    "estimated": true
  },
  {
    "name": "Reduced-fat milk",
    "brand": "Whole food",
    "aliases": [
      "semi skimmed milk",
      "reduced fat milk",
      "2% milk",
      "susu rendah lemak"
    ],
    "unit": "glass (200 ml)",
    "grams": 200,
    "kcal": 100,
    "protein": 6.6,
    "carbs": 9.6,
    "fat": 4,
    "fibre": 0,
    "sugar": 10.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/172205/nutrients",
    "estimated": true
  },
  {
    "name": "Baked cod",
    "brand": "Whole food",
    "aliases": [
      "baked cod",
      "cooked cod",
      "roast cod"
    ],
    "unit": "fillet (120 g)",
    "grams": 120,
    "kcal": 102,
    "protein": 22.4,
    "carbs": 0,
    "fat": 0.6,
    "fibre": 0,
    "sugar": 0,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/171990/nutrients",
    "estimated": true
  },
  {
    "name": "Banana",
    "brand": "Whole food",
    "aliases": [
      "banana",
      "pisang"
    ],
    "unit": "medium banana (118 g)",
    "grams": 118,
    "kcal": 105,
    "protein": 1.3,
    "carbs": 27,
    "fat": 0.4,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/173944/nutrients",
    "estimated": true
  },
  {
    "name": "Baked sweet potato",
    "brand": "Whole food",
    "aliases": [
      "sweet potato",
      "baked sweet potato",
      "roasted sweet potato",
      "ubi panggang",
      "ubi jalar"
    ],
    "unit": "medium potato (114 g)",
    "grams": 114,
    "kcal": 103,
    "protein": 2.3,
    "carbs": 23.6,
    "fat": 0.2,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/168483/nutrients",
    "estimated": true
  },
  {
    "name": "Fried egg",
    "brand": "Whole food",
    "aliases": [
      "fried egg",
      "fried eggs",
      "sunny side up",
      "telur mata sapi",
      "telur ceplok",
      "telor ceplok",
      "telur goreng"
    ],
    "unit": "egg (55 g)",
    "grams": 55,
    "kcal": 102,
    "protein": 6.4,
    "carbs": 0.5,
    "fat": 8.3,
    "source": "USDA FoodData Central · standard portion",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/2707155/nutrients",
    "estimated": true,
    "image": "eggs"
  },
  {
    "name": "Plain rice porridge",
    "brand": "Indonesian cooking",
    "aliases": [
      "bubur nasi",
      "bubur polos",
      "rice porridge",
      "congee"
    ],
    "unit": "bowl (250 g)",
    "grams": 250,
    "kcal": 148,
    "protein": 10.3,
    "carbs": 22.3,
    "fat": 2,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Gado-gado",
    "brand": "Indonesian cooking",
    "aliases": [
      "gado gado",
      "gado-gado",
      "gado gado salad"
    ],
    "unit": "plate (250 g)",
    "grams": 250,
    "kcal": 343,
    "protein": 15.3,
    "carbs": 52.5,
    "fat": 8,
    "fibre": 2.8,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Boiled sweetcorn",
    "brand": "Indonesian cooking",
    "aliases": [
      "jagung rebus",
      "boiled sweetcorn",
      "sweetcorn kernels"
    ],
    "unit": "portion (80 g)",
    "grams": 80,
    "kcal": 123,
    "protein": 3,
    "carbs": 22.7,
    "fat": 2.8,
    "fibre": 0.6,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Ketoprak",
    "brand": "Indonesian cooking",
    "aliases": [
      "ketoprak"
    ],
    "unit": "plate (280 g)",
    "grams": 280,
    "kcal": 428,
    "protein": 22.1,
    "carbs": 36.4,
    "fat": 21.6,
    "fibre": 8.1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Ketupat tahu",
    "brand": "Indonesian cooking",
    "aliases": [
      "ketupat tahu",
      "kupat tahu"
    ],
    "unit": "plate (250 g)",
    "grams": 250,
    "kcal": 275,
    "protein": 6.5,
    "carbs": 46.5,
    "fat": 6.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Laksa",
    "brand": "Indonesian cooking",
    "aliases": [
      "laksa",
      "laksa noodles"
    ],
    "unit": "bowl (300 g)",
    "grams": 300,
    "kcal": 498,
    "protein": 8.1,
    "carbs": 86.4,
    "fat": 11.7,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Lontong sayur lodeh",
    "brand": "Indonesian cooking",
    "aliases": [
      "lontong sayur",
      "lontong lodeh",
      "lontong sayur lodeh"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 274,
    "protein": 9,
    "carbs": 27.2,
    "fat": 14.3,
    "fibre": 5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Mie Aceh rebus",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie aceh rebus",
      "mi aceh rebus",
      "boiled aceh noodles"
    ],
    "unit": "bowl (300 g)",
    "grams": 300,
    "kcal": 339,
    "protein": 9,
    "carbs": 54.3,
    "fat": 9.6,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Mie ayam",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie ayam",
      "mi ayam",
      "bakmi ayam",
      "indonesian chicken noodles"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 286,
    "protein": 17.4,
    "carbs": 29.4,
    "fat": 10.9,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Mie bakso",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie bakso",
      "mi bakso",
      "bakso noodles",
      "noodle soup with meatballs"
    ],
    "unit": "bowl (300 g)",
    "grams": 300,
    "kcal": 342,
    "protein": 15.9,
    "carbs": 49.2,
    "fat": 9,
    "fibre": 0.3,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Mie pangsit",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie pangsit",
      "mi pangsit",
      "pangsit noodles"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 294,
    "protein": 16.5,
    "carbs": 26.3,
    "fat": 13.7,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Mie rebus",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie rebus",
      "mi rebus",
      "boiled noodles"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 316,
    "protein": 11.5,
    "carbs": 44,
    "fat": 10.4,
    "fibre": 5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Red rice",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi merah",
      "nasi beras merah",
      "red rice"
    ],
    "unit": "bowl (150 g)",
    "grams": 150,
    "kcal": 224,
    "protein": 4.2,
    "carbs": 48.8,
    "fat": 0.6,
    "fibre": 0.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi gemuk",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi gemuk"
    ],
    "unit": "portion (175 g)",
    "grams": 175,
    "kcal": 336,
    "protein": 6.7,
    "carbs": 42.7,
    "fat": 15.4,
    "fibre": 1.2,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi gurih",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi gurih"
    ],
    "unit": "portion (175 g)",
    "grams": 175,
    "kcal": 333,
    "protein": 8.2,
    "carbs": 45.5,
    "fat": 13.1,
    "fibre": 1.2,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "White sticky rice",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi ketan",
      "sticky rice",
      "ketan putih"
    ],
    "unit": "portion (150 g)",
    "grams": 150,
    "kcal": 245,
    "protein": 4.5,
    "carbs": 53.6,
    "fat": 0.6,
    "fibre": 0.3,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi minyak",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi minyak"
    ],
    "unit": "portion (175 g)",
    "grams": 175,
    "kcal": 362,
    "protein": 6.1,
    "carbs": 64.9,
    "fat": 8.8,
    "fibre": 1.4,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi rames",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi rames",
      "mixed nasi rames"
    ],
    "unit": "plate (300 g)",
    "grams": 300,
    "kcal": 465,
    "protein": 30.9,
    "carbs": 57.3,
    "fat": 12.6,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi tim",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi tim"
    ],
    "unit": "bowl (200 g)",
    "grams": 200,
    "kcal": 240,
    "protein": 4.8,
    "carbs": 52,
    "fat": 0.8,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Nasi uduk",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi uduk",
      "coconut rice"
    ],
    "unit": "portion (150 g)",
    "grams": 150,
    "kcal": 380,
    "protein": 6.5,
    "carbs": 17.6,
    "fat": 31.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Papeda",
    "brand": "Indonesian cooking",
    "aliases": [
      "papeda",
      "sago porridge"
    ],
    "unit": "bowl (200 g)",
    "grams": 200,
    "kcal": 122,
    "protein": 0.4,
    "carbs": 29.8,
    "fat": 0.2,
    "fibre": 1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Pecel",
    "brand": "Indonesian cooking",
    "aliases": [
      "pecel sayur",
      "pecel",
      "javanese peanut salad"
    ],
    "unit": "plate (180 g)",
    "grams": 180,
    "kcal": 437,
    "protein": 20,
    "carbs": 57.1,
    "fat": 22.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "White bread",
    "brand": "Indonesian cooking",
    "aliases": [
      "white bread",
      "roti putih",
      "roti tawar"
    ],
    "unit": "slice (30 g)",
    "grams": 30,
    "kcal": 74,
    "protein": 2.4,
    "carbs": 15,
    "fat": 0.4,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Steamed cassava",
    "brand": "Indonesian cooking",
    "aliases": [
      "singkong kukus",
      "ketela pohon kukus",
      "steamed cassava"
    ],
    "unit": "piece (75 g)",
    "grams": 75,
    "kcal": 115,
    "protein": 0.9,
    "carbs": 27.3,
    "fat": 0.2,
    "fibre": 1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Siomay",
    "brand": "Indonesian cooking",
    "aliases": [
      "siomay",
      "siomay bandung"
    ],
    "unit": "piece (35 g)",
    "grams": 35,
    "kcal": 33,
    "protein": 1.5,
    "carbs": 5,
    "fat": 0.8,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Toge goreng",
    "brand": "Indonesian cooking",
    "aliases": [
      "toge goreng",
      "tauge goreng"
    ],
    "unit": "plate (200 g)",
    "grams": 200,
    "kcal": 176,
    "protein": 6.4,
    "carbs": 28,
    "fat": 4.2,
    "fibre": 1.4,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Ayam taliwang",
    "brand": "Indonesian cooking",
    "aliases": [
      "ayam taliwang",
      "taliwang chicken"
    ],
    "unit": "portion (120 g)",
    "grams": 120,
    "kcal": 317,
    "protein": 21.8,
    "carbs": 3.2,
    "fat": 24.1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Pepes ikan mujair",
    "brand": "Indonesian cooking",
    "aliases": [
      "ikan mujair pepes",
      "pepes ikan mujair",
      "steamed tilapia in banana leaf"
    ],
    "unit": "fillet (100 g)",
    "grams": 100,
    "kcal": 121,
    "protein": 21.7,
    "carbs": 0.8,
    "fat": 2.8,
    "fibre": 0,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Karedok",
    "brand": "Indonesian cooking",
    "aliases": [
      "karedok",
      "raw vegetable peanut salad"
    ],
    "unit": "portion (180 g)",
    "grams": 180,
    "kcal": 166,
    "protein": 4,
    "carbs": 25.4,
    "fat": 5.9,
    "fibre": 2.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Paru goreng",
    "brand": "Indonesian cooking",
    "aliases": [
      "paru goreng",
      "fried beef lung"
    ],
    "unit": "portion (65 g)",
    "grams": 65,
    "kcal": 174,
    "protein": 15.5,
    "carbs": 9.4,
    "fat": 8.3,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Plecing kangkung",
    "brand": "Indonesian cooking",
    "aliases": [
      "pelecing kangkung",
      "plecing kangkung"
    ],
    "unit": "portion (100 g)",
    "grams": 100,
    "kcal": 75,
    "protein": 2.5,
    "carbs": 10,
    "fat": 2.8,
    "fibre": 5.4,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Beef rendang",
    "brand": "Indonesian cooking",
    "aliases": [
      "rendang sapi",
      "beef rendang",
      "rendang daging",
      "rendang"
    ],
    "unit": "piece (90 g)",
    "grams": 90,
    "kcal": 174,
    "protein": 20.3,
    "carbs": 7,
    "fat": 7.1,
    "fibre": 0,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Chicken satay",
    "brand": "Indonesian cooking",
    "aliases": [
      "sate ayam",
      "chicken satay",
      "sate ayam tanpa saus",
      "chicken satay skewer"
    ],
    "unit": "skewer, meat only (25 g)",
    "grams": 25,
    "kcal": 57,
    "protein": 10.8,
    "carbs": 0.5,
    "fat": 1.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Beef satay",
    "brand": "Indonesian cooking",
    "aliases": [
      "sate sapi",
      "beef satay"
    ],
    "unit": "skewer (25 g)",
    "grams": 25,
    "kcal": 60,
    "protein": 5.1,
    "carbs": 5.6,
    "fat": 2,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Sayur asem",
    "brand": "Indonesian cooking",
    "aliases": [
      "sayur asem",
      "sayur asam",
      "tamarind vegetable soup"
    ],
    "unit": "bowl (180 g)",
    "grams": 180,
    "kcal": 52,
    "protein": 1.3,
    "carbs": 9,
    "fat": 1.1,
    "fibre": 1.1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Sayur sop",
    "brand": "Indonesian cooking",
    "aliases": [
      "sayur sop",
      "sop sayur",
      "indonesian vegetable soup"
    ],
    "unit": "bowl (180 g)",
    "grams": 180,
    "kcal": 49,
    "protein": 2.3,
    "carbs": 1.8,
    "fat": 3.6,
    "fibre": 0.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Sop buntut",
    "brand": "Indonesian cooking",
    "aliases": [
      "sop buntut",
      "oxtail soup"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 199,
    "protein": 21,
    "carbs": 6.2,
    "fat": 10.1,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Sop daging sapi",
    "brand": "Indonesian cooking",
    "aliases": [
      "sop daging sapi",
      "indonesian beef soup"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 137,
    "protein": 16.2,
    "carbs": 14.8,
    "fat": 1.4,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Soto Kudus",
    "brand": "Indonesian cooking",
    "aliases": [
      "soto kudus"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 106,
    "protein": 7.3,
    "carbs": 5,
    "fat": 6.4,
    "fibre": 0.6,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Soto Madura",
    "brand": "Indonesian cooking",
    "aliases": [
      "soto madura"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 168,
    "protein": 9.8,
    "carbs": 3.6,
    "fat": 12.6,
    "fibre": 0,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Soto Padang",
    "brand": "Indonesian cooking",
    "aliases": [
      "soto padang"
    ],
    "unit": "bowl (280 g)",
    "grams": 280,
    "kcal": 356,
    "protein": 16.5,
    "carbs": 30.8,
    "fat": 18.5,
    "fibre": 2,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Telur dadar",
    "brand": "Indonesian cooking",
    "aliases": [
      "telur dadar",
      "indonesian omelette",
      "telor dadar"
    ],
    "unit": "omelette (60 g)",
    "grams": 60,
    "kcal": 151,
    "protein": 9.8,
    "carbs": 0.8,
    "fat": 11.6,
    "fibre": 0,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Salted duck egg",
    "brand": "Indonesian cooking",
    "aliases": [
      "salted duck egg",
      "telur asin",
      "telur bebek asin"
    ],
    "unit": "egg (60 g)",
    "grams": 60,
    "kcal": 107,
    "protein": 8.2,
    "carbs": 2.6,
    "fat": 8,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Fried tempeh",
    "brand": "Indonesian cooking",
    "aliases": [
      "tempe goreng",
      "fried tempeh",
      "fried tempe"
    ],
    "unit": "slice (35 g)",
    "grams": 35,
    "kcal": 123,
    "protein": 8.6,
    "carbs": 3.6,
    "fat": 9.3,
    "fibre": 1.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Tumis bayam bersantan",
    "brand": "Indonesian cooking",
    "aliases": [
      "tumis bayam bersantan",
      "spinach in coconut milk"
    ],
    "unit": "portion (100 g)",
    "grams": 100,
    "kcal": 48,
    "protein": 1.4,
    "carbs": 2.6,
    "fat": 4.2,
    "fibre": 0.5,
    "estimated": true,
    "source": "BPOM Indonesia · food composition table, scaled to an estimated serving",
    "sourceUrl": "https://payakumbuh.pom.go.id/storage/medialain/Loka-POM-di-Kota-Payakumbuh-1.%20Pedoman%20PJAS%20Gizi%20Seimbang%20190523%2023052023_ok.-1_TTe.pdf"
  },
  {
    "name": "Big Mac",
    "brand": "McDonald’s",
    "aliases": [
      "big mac",
      "mcdonalds big mac",
      "mcd big mac"
    ],
    "unit": "burger",
    "grams": null,
    "kcal": 508,
    "protein": 26,
    "carbs": 43,
    "fat": 25,
    "source": "UK menu reference · CalorieKing",
    "sourceUrl": "https://www.calorieking.com/gb/en/foods/f/calories-in-sandwiches-burgers-big-mac/k5hwrgM0TOWODNnuV6LhVg",
    "estimated": true,
    "method": "Griddled",
    "fibre": 3.6,
    "salt": 2.3,
    "sugar": 9
  },
  {
    "name": "Original Recipe Fillet Burger",
    "brand": "KFC",
    "aliases": [
      "kfc fillet burger",
      "kfc original recipe burger",
      "kfc original fillet burger"
    ],
    "unit": "burger",
    "grams": null,
    "kcal": 490,
    "protein": 33,
    "carbs": 45,
    "fat": 19,
    "source": "KFC UK · Original Recipe Fillet Burger",
    "sourceUrl": "https://brand-uk.assets.kfc.co.uk/2025-04/KFC4748_52231_W3_2_25_ALG_S1.pdf",
    "estimated": false,
    "method": "Fried",
    "salt": 2.5,
    "sugar": 4.7
  },
  {
    "name": "Tall iced latte",
    "brand": "Starbucks",
    "aliases": [
      "starbucks iced latte",
      "starbucks tall iced latte",
      "iced latte starbucks"
    ],
    "unit": "tall cup (355 ml)",
    "grams": 355,
    "kcal": 83,
    "protein": 5.9,
    "carbs": 8.3,
    "fat": 2.8,
    "source": "Starbucks UK · semi-skimmed milk",
    "sourceUrl": "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/2026-01/WIN26_UK_AllergenBook_CORE_BEVERAGE_v04.pdf",
    "estimated": false,
    "sugar": 7.5,
    "salt": 0.17
  },
  {
    "name": "Iced chai tea latte",
    "brand": "Starbucks",
    "aliases": [
      "starbucks iced chai",
      "starbucks iced chai latte",
      "iced chai tea latte"
    ],
    "unit": "tall cup (355 ml)",
    "grams": 355,
    "kcal": 132,
    "protein": 5.3,
    "carbs": 21.7,
    "fat": 2.6,
    "source": "Starbucks UK · semi-skimmed milk",
    "sourceUrl": "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/2026-01/WIN26_UK_AllergenBook_CORE_BEVERAGE_v04.pdf",
    "estimated": false,
    "sugar": 21.7,
    "salt": 0.17
  },
  {
    "name": "Chicken teriyaki",
    "brand": "HokBen",
    "aliases": [
      "hokben chicken teriyaki",
      "hoka hoka bento chicken teriyaki",
      "hokben ayam teriyaki"
    ],
    "unit": "side (about 110 g)",
    "grams": 110,
    "kcal": 190,
    "protein": 19,
    "carbs": 11,
    "fat": 7.5,
    "source": "Recipe estimate · chicken, onion and teriyaki sauce; excludes rice",
    "sourceUrl": "https://webstaging.hokben.co.id/menu/168/chicken-teriyaki",
    "estimated": true,
    "method": "Pan-cooked"
  },
  {
    "name": "Simple Set Chicken Teriyaki 1",
    "brand": "HokBen",
    "aliases": [
      "hokben simple set chicken teriyaki",
      "hokben chicken teriyaki set",
      "hokben simple set 1"
    ],
    "unit": "set (about 350 g)",
    "grams": 350,
    "kcal": 545,
    "protein": 26,
    "carbs": 70,
    "fat": 18,
    "source": "Recipe estimate · rice, chicken teriyaki and two egg chicken rolls",
    "sourceUrl": "https://webstaging.hokben.co.id/order/menu/247/294979/simple-set-chicken-teriyaki-1",
    "estimated": true
  },
  {
    "name": "Bakmi Spesial GM",
    "brand": "Bakmi GM",
    "aliases": [
      "bakmi spesial gm",
      "bakmi special gm",
      "bakmi gm special noodles",
      "bakmi gm ayam jamur"
    ],
    "unit": "bowl (about 300 g)",
    "grams": 300,
    "kcal": 420,
    "protein": 19,
    "carbs": 59,
    "fat": 12,
    "source": "Recipe estimate · noodles, chicken, mushrooms and oil",
    "sourceUrl": "https://www.bakmigm.com/menu",
    "estimated": true
  },
  {
    "name": "Pangsit goreng",
    "brand": "Bakmi GM",
    "aliases": [
      "bakmi gm pangsit goreng",
      "pangsit goreng bakmi gm",
      "gm fried wonton"
    ],
    "unit": "wonton (about 20 g)",
    "grams": 20,
    "kcal": 63,
    "protein": 2.2,
    "carbs": 6.4,
    "fat": 3.2,
    "source": "Recipe estimate · fried filled wonton",
    "sourceUrl": "https://www.bakmigm.com/menu",
    "estimated": true,
    "method": "Deep-fried"
  },
  {
    "name": "Es Kopi Kenangan Mantan",
    "brand": "Kopi Kenangan",
    "aliases": [
      "kopi kenangan mantan",
      "es kopi kenangan mantan",
      "kenangan mantan iced"
    ],
    "unit": "regular cup (about 350 ml)",
    "grams": 350,
    "kcal": 190,
    "protein": 4.5,
    "carbs": 28,
    "fat": 6.3,
    "source": "Recipe estimate · milk, espresso and palm sugar",
    "estimated": true
  },
  {
    "name": "Nasi goreng spesial",
    "brand": "Solaria",
    "aliases": [
      "solaria nasi goreng special",
      "nasi goreng spesial solaria",
      "nasi goreng solaria",
      "solaria fried rice"
    ],
    "unit": "plate (about 350 g)",
    "grams": 350,
    "kcal": 590,
    "protein": 20,
    "carbs": 80,
    "fat": 21,
    "source": "Recipe estimate · stir-fried rice, egg, meat and cooking oil",
    "estimated": true,
    "method": "Stir-fried"
  },
  {
    "name": "Nasi goreng",
    "brand": "Indonesian cooking",
    "aliases": [
      "nasi goreng",
      "fried rice",
      "indonesian fried rice"
    ],
    "unit": "plate (about 250 g)",
    "grams": 250,
    "kcal": 420,
    "protein": 10,
    "carbs": 63,
    "fat": 14,
    "source": "Recipe estimate · rice, egg, kecap manis and cooking oil",
    "estimated": true,
    "method": "Stir-fried"
  },
  {
    "name": "Mie goreng",
    "brand": "Indonesian cooking",
    "aliases": [
      "mie goreng",
      "mi goreng",
      "fried noodles",
      "indonesian fried noodles"
    ],
    "unit": "plate (about 250 g)",
    "grams": 250,
    "kcal": 440,
    "protein": 13,
    "carbs": 61,
    "fat": 16,
    "source": "Recipe estimate · cooked noodles, vegetables, egg and oil",
    "estimated": true,
    "method": "Stir-fried"
  },
  {
    "name": "Soto ayam",
    "brand": "Indonesian cooking",
    "aliases": [
      "soto ayam",
      "javanese chicken soup"
    ],
    "unit": "bowl (about 300 g)",
    "grams": 300,
    "kcal": 225,
    "protein": 17,
    "carbs": 19,
    "fat": 8,
    "source": "Recipe estimate · chicken broth, shredded chicken and noodles",
    "estimated": true,
    "method": "Simmered"
  },
  {
    "name": "Ayam goreng",
    "brand": "Indonesian cooking",
    "aliases": [
      "ayam goreng",
      "indonesian fried chicken"
    ],
    "unit": "piece (about 100 g edible)",
    "grams": 100,
    "kcal": 275,
    "protein": 24,
    "carbs": 5,
    "fat": 17,
    "source": "Recipe estimate · seasoned fried chicken with skin",
    "estimated": true,
    "method": "Fried"
  },
  {
    "name": "Es teh manis",
    "brand": "Indonesian cooking",
    "aliases": [
      "es teh manis",
      "sweet iced tea",
      "teh manis"
    ],
    "unit": "glass (about 250 ml)",
    "grams": 250,
    "kcal": 80,
    "protein": 0,
    "carbs": 20,
    "fat": 0,
    "source": "Recipe estimate · tea with 20 g of sugar",
    "estimated": true
  },
  {
    "name": "Unsweetened tea",
    "brand": "Drinks",
    "aliases": [
      "unsweetened tea",
      "teh tawar",
      "black tea",
      "es teh tawar",
      "green tea",
      "teh hijau tanpa gula"
    ],
    "unit": "cup (240 ml)",
    "grams": 240,
    "kcal": 2,
    "protein": 0,
    "carbs": 0.5,
    "fat": 0,
    "source": "Plain brewed tea · estimate",
    "estimated": true
  },
  {
    "name": "Olive oil",
    "brand": "Whole food",
    "aliases": [
      "olive oil",
      "minyak zaitun"
    ],
    "unit": "tablespoon (13.5 g)",
    "grams": 13.5,
    "kcal": 119,
    "protein": 0,
    "carbs": 0,
    "fat": 13.5,
    "source": "USDA FoodData Central · olive oil",
    "sourceUrl": "https://fdc.nal.usda.gov/food-details/171413/nutrients",
    "estimated": true
  },
  {
    "name": "Cooking oil",
    "brand": "Whole food",
    "aliases": [
      "cooking oil",
      "vegetable oil",
      "minyak goreng",
      "sunflower oil",
      "rapeseed oil"
    ],
    "unit": "tablespoon (14 g)",
    "grams": 14,
    "kcal": 124,
    "protein": 0,
    "carbs": 0,
    "fat": 14,
    "source": "Standard cooking oil · estimate",
    "estimated": true
  },
  {
    "name": "Water",
    "brand": "Drinks",
    "aliases": [
      "water",
      "plain water",
      "air putih",
      "air mineral",
      "aqua mineral",
      "aqua water"
    ],
    "unit": "glass (250 ml)",
    "grams": 250,
    "kcal": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "source": "Plain unflavoured water",
    "estimated": false
  }
];

