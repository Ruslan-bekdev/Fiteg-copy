import main_apple from "../../assets/products/apple/main.png";
import gallery1_apple from "../../assets/products/apple/gallery/1.jpg";
import gallery2_apple from "../../assets/products/apple/gallery/2.jpg";
import gallery3_apple from "../../assets/products/apple/gallery/3.jpg";
import gallery4_apple from "../../assets/products/apple/gallery/4.jpg";

import main_mango from "../../assets/products/mango/main.png";
import catalog_mango from "../../assets/products/mango/catalog.png";
import gallery1_mango from "../../assets/products/mango/gallery/1.jpg";
import gallery2_mango from "../../assets/products/mango/gallery/2.jpg";
import gallery3_mango from "../../assets/products/mango/gallery/3.jpg";
import gallery4_mango from "../../assets/products/mango/gallery/4.jpg";

import main_orange from "../../assets/products/orange/main.png";
import catalog_orange from "../../assets/products/orange/catalog.png";
import gallery1_orange from "../../assets/products/orange/gallery/1.jpg";
import gallery2_orange from "../../assets/products/orange/gallery/2.jpg";
import gallery3_orange from "../../assets/products/orange/gallery/3.jpg";

const product_apple = {
    name: "Apple and Vanilla Flavored Smoothie",
    description: "Savor the classic combination of apple and vanilla in our Apple-Vanilla Smoothie. Containing 79% liquid egg white, 8% apple puree, and 7% apple juice concentrate, this smoothie is a wholesome option for recovery, weight management, or simply as a delicious indulgence. Flavored with natural vanilla/vanillin and sweetened with steviol glycosides, it offers a delightful taste without any added fat, milk, or gluten",
    color: '#069c6b',
    nutritionalInformation: [
        {
            value: '79',
            x: '%',
            underText: 'egg whites',
        },
        {
            value: '25',
            x: 'g',
            underText: 'protein',
        },
        {
            value: '59',
            x: 'kcal',
            underText: 'in 100ml',
        },
    ],
    nutritionFacts: {
        title: 'Nutrition facts',
        content:[
            ["Energy", "249 kJ/59 kcal;"],
            ["Fat", "0.1 g; of which saturated fat - 0.0 g;"],
            ["Carbohydrates", "5.8 g; of which sugars – 5.4 g;"],
            ["Protein", "8.6 g"],
            ["Salt", "0.39 g"],
            ["Fiber", "0.4 g"],
        ],
    },
    ingredients: {
        title: 'Ingredients',
        content: [
            "Liquid egg white 79 %",
            "Apple puree 8%",
            "Apple juice concentrate 7%",
            "Flax fibre",
            "Flavouring",
            "Sweetener (steviol glycosides)",
            "Acidity regulator (citric acid)",
            "Preservative potassium (sorbate)",
            "The product contains vanilla/vanillin.",
            "Packed in a modified atmosphere.",
            "The product is pasteurized.",
            " ",
            "Packed in a modified atmosphere.",
            "The product is pasteurized."
        ],
    },
    features: [
        {
            title: "Purely Beneficial",
            caption: "Packed with natural proteins from barn-raised eggs, our smoothies are rich in the nutrients your body needs."
        },
        {
            title: "Smooooth",
            caption: "Experience the smooth texture of our smoothies, never floury, always satisfying."
        },
        {
            title: "Clean protein",
            caption: "No soy, lactose, sugar, gluten, or fat – just essential protein for a healthy, energizing lift."
        },
        {
            title: "Versatility",
            caption: "Add a splash to your breakfast, a boost to your smoothie, or a kick to your snacks – our smoothies are your go-to for a quick, nutritious addition to any meal."
        },
        {
            title: "Made for Everyone",
            caption: "Active, seniors, moms-to-be, and kids – our smoothies are crafted for all walks of life."
        }
    ],
    images: {
        main: main_apple,
        catalog: main_apple,
        gallery: [
            gallery1_apple,
            gallery2_apple,
            gallery3_apple,
            gallery4_apple,
        ],
    },
    positions: {
        rotate_menu: -4,
        rotate_catalog: -7,
        top_catalog: 50,
        parallaxDivide: 13,
    }
};
const product_mango = {
    name: "Mango Smoothie",
    description: "Indulge in the tropical delight of our Mango Smoothie, a perfect blend of 64% liquid egg white and 11.3% mango puree. This refreshing drink, enriched with pear and lemon juice concentrates, flax fiber, and natural flavorings, is a nutritious choice for a recovery snack, weight management, or just a delightful treat. Enjoy its natural color, courtesy of carotenes, and the perfect balance of taste and health with no added fat, milk, or gluten.",
    color: '#fdc757',
    nutritionalInformation: [
        {
            value: '64',
            x: '%',
            underText: 'egg whites',
        },
        {
            value: '21',
            x: 'g',
            underText: 'protein',
        },
        {
            value: '60',
            x: 'kcal',
            underText: 'in 100ml',
        },
    ],
    nutritionFacts: {
        title: 'Nutrition facts',
        content: [
            ["Energy", "251 kj/60 kcal"],
            ["Fat", "0,1 g"],
            ["SaturatedFat", "0,0 g"],
            ["Carbohydrates", "7,4 г"],
            ["Sugars", "6,0 г"],
            ["Protein", "7,0 г"],
            ["Salt", "0,23 г"],
            ["Fiber", "0,6 г"],
            [" ", " "],
            ["*", "salt in products originates from natural sodium"]
        ],
    },
    ingredients: {
        title: 'Ingredients',
        content: [
            "Liquid egg white 6 4 %",
            "Ango puree 11,3 %",
            "Water",
            "Pear concentrate",
            "Lemon juice concentrate",
            "Flax fiber",
            "Potato starch",
            "Natural flavouring",
            "Colour (carotenes)",
            "Acidity regulator (citric acid)",
            "Preservative (potassium sorbate)",
            "Thickener (pectins)",
            "",
            "The product is pasteurized.",
            "Packed in a modified atmosphere."
        ],
    },
    features: [
        {
            title: "Purely Beneficial",
            caption: "Packed with natural proteins from barn-raised eggs, our smoothies are rich in the nutrients your body needs."
        },
        {
            title: "Smooooth",
            caption: "Experience the smooth texture of our smoothies, never floury, always satisfying."
        },
        {
            title: "Clean protein",
            caption: "No soy, lactose, sugar, gluten, or fat – just essential protein for a healthy, energizing lift."
        },
        {
            title: "Versatility",
            caption: "Add a splash to your breakfast, a boost to your smoothie, or a kick to your snacks – our smoothies are your go-to for a quick, nutritious addition to any meal."
        },
        {
            title: "Made for Everyone",
            caption: "Active, seniors, moms-to-be, and kids – our smoothies are crafted for all walks of life."
        }
    ],
    images: {
        main: main_mango,
        catalog: catalog_mango,
        gallery: [
            gallery1_mango,
            gallery2_mango,
            gallery3_mango,
            gallery4_mango,
        ],
    },
    positions: {
        rotate_menu: -16,
        rotate_catalog: 0,
        top_catalog: 15,
        parallaxDivide: 0,
    }
};
const product_orange = {
    name: "Orange Smoothie",
    description: "Experience the zesty goodness of our Orange Smoothie, crafted with 60% liquid egg white, 8% orange juice concentrate, and another 8% orange puree. This invigorating smoothie is further enhanced with lemon puree, paprika oil extract, and citrus fiber, making it an ideal choice for an energizing breakfast or snack. Sweetened with sucralose and free from fat, milk, and gluten, it's a tangy, healthy treat for any time of the day.",
    color: '#fd6c0a',
    nutritionalInformation: [
        {
            value: '60',
            x: '%',
            underText: 'egg whites',
        },
        {
            value: '20',
            x: 'g',
            underText: 'protein',
        },
        {
            value: '51',
            x: 'kcal',
            underText: 'in 100ml',
        },
    ],
    nutritionFacts: {
        title: 'Nutrition facts',
        content:[
            ["Energy", "212 kJ/51 kcal;"],
            ["Fat", "0.1 g; of which saturated fat - 0.0 g;"],
            ["Carbohydrate", "5.2 g; of which sugars – 5.1 g;"],
            ["Protein", "6.7 g"],
            ["Salt", "0.22 g"],
            ["Fiber", "0.3 g"],
        ],
    },
    ingredients: {
        title: 'Ingredients',
        content: [
            "Liquid egg white 60 %",
            "Water",
            "Orange juice concentrate 8 %",
            "Orange puree 8 %",
            "Lemon puree",
            "Paprica oil extract",
            "Citrus fiber",
            "Flax fiber",
            "Potato starch",
            "Natural orange flavouring",
            "Sweetener (sucralose)",
            "Acidity regulator (citric acid)",
            "Preservative (potassium sorbate)",
            " ",
            "The product is pasteurized.",
            "Packed in a modified atmosphere."
        ],
    },
    features: [
        {
            title: "Purely Beneficial",
            caption: "Packed with natural proteins from barn-raised eggs, our smoothies are rich in the nutrients your body needs."
        },
        {
            title: "Smooooth",
            caption: "Experience the smooth texture of our smoothies, never floury, always satisfying."
        },
        {
            title: "Clean protein",
            caption: "No soy, lactose, sugar, gluten, or fat – just essential protein for a healthy, energizing lift."
        },
        {
            title: "Versatility",
            caption: "Add a splash to your breakfast, a boost to your smoothie, or a kick to your snacks – our smoothies are your go-to for a quick, nutritious addition to any meal."
        },
        {
            title: "Made for Everyone",
            caption: "Active, seniors, moms-to-be, and kids – our smoothies are crafted for all walks of life."
        }
    ],
    images: {
        main: main_orange,
        catalog: catalog_orange,
        gallery: [
            gallery1_orange,
            gallery2_orange,
            gallery3_orange,
        ],
    },
    positions: {
        rotate_menu: -2,
        rotate_catalog: 0,
        top_catalog: 50,
        parallaxDivide: 10,
    }
};

const products_eng = [
    product_apple,
    product_mango,
    product_orange,
];

export default products_eng;