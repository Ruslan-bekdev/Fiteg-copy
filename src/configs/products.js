import main_apple from "../assets/products/apple/main.png";
import gallery1_apple from "../assets/products/apple/gallery/1.jpg";
import gallery2_apple from "../assets/products/apple/gallery/2.jpg";
import gallery3_apple from "../assets/products/apple/gallery/3.jpg";
import gallery4_apple from "../assets/products/apple/gallery/4.jpg";

import main_mango from "../assets/products/mango/main.png";
import catalog_mango from "../assets/products/mango/catalog.png";
import gallery1_mango from "../assets/products/mango/gallery/1.jpg";
import gallery2_mango from "../assets/products/mango/gallery/2.jpg";
import gallery3_mango from "../assets/products/mango/gallery/3.jpg";
import gallery4_mango from "../assets/products/mango/gallery/4.jpg";

import main_orange from "../assets/products/orange/main.png";
import catalog_orange from "../assets/products/orange/catalog.png";
import gallery1_orange from "../assets/products/orange/gallery/1.jpg";
import gallery2_orange from "../assets/products/orange/gallery/2.jpg";
import gallery3_orange from "../assets/products/orange/gallery/3.jpg";
import gallery4_orange from "../assets/products/orange/gallery/4.jpg";

const product_apple = {
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
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
        content:{
            energy: "251 кДж/60 ккал",
            fat: "0,1 г",
            saturatedFat: "0,0 г",
            carbohydrates: "7,4 г",
            sugars: "6,0 г",
            protein: "7,0 г",
            salt: "0,23 г",
            fiber: "0,6 г",
        },
    },
    ingredients: {
        title: 'Ingredients',
        content: [
                "Жидкий яичный белок 64%",
            "Пюре манго 11,3%",
            "Вода",
            "Грушевый концентрат",
            "Концентрат лимонного сока",
            "Льняная клетчатка",
            "Картофельный крахмал",
            "Натуральный ароматизатор",
            "Краситель (каротины)",
            "Регулятор кислотности (лимонная кислота)",
            "Консервант (сорбат калия)",
            "Загуститель (пектины)",
        ],
    },
    features: [
        {
            title: "Чисто выгодно",
            caption: "Смузи, наполненные натуральными белками яиц, выращенных в сарае."
        },
        {
            title: "Гладкий",
            caption: "Гладкая текстура смузи, никогда не мучнистая и всегда сытная."
        },
        {
            title: "Чистый белок",
            caption: "Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок."
        },
        {
            title: "Универсальность",
            caption: "Быстрое и питательное дополнение к любому приему пищи."
        },
        {
            title: "Сделано для всех",
            caption: "Смузи созданы для всех слоев общества."
        }
    ],
    photos: {
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
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
    color: '#fdc757',
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
        content:{
            energy: "251 кДж/60 ккал",
            fat: "0,1 г",
            saturatedFat: "0,0 г",
            carbohydrates: "7,4 г",
            sugars: "6,0 г",
            protein: "7,0 г",
            salt: "0,23 г",
            fiber: "0,6 г",
        },
    },
    ingredients: {
        title: 'Ingredients',
        content: [
            "Жидкий яичный белок 64%",
            "Пюре манго 11,3%",
            "Вода",
            "Грушевый концентрат",
            "Концентрат лимонного сока",
            "Льняная клетчатка",
            "Картофельный крахмал",
            "Натуральный ароматизатор",
            "Краситель (каротины)",
            "Регулятор кислотности (лимонная кислота)",
            "Консервант (сорбат калия)",
            "Загуститель (пектины)",
        ],
    },
    features: [
        {
            title: "Чисто выгодно",
            caption: "Смузи, наполненные натуральными белками яиц, выращенных в сарае."
        },
        {
            title: "Гладкий",
            caption: "Гладкая текстура смузи, никогда не мучнистая и всегда сытная."
        },
        {
            title: "Чистый белок",
            caption: "Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок."
        },
        {
            title: "Универсальность",
            caption: "Быстрое и питательное дополнение к любому приему пищи."
        },
        {
            title: "Сделано для всех",
            caption: "Смузи созданы для всех слоев общества."
        }
    ],
    photos: {
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
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
    color: '#fd6c0a',
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
        content:{
            energy: "251 кДж/60 ккал",
            fat: "0,1 г",
            saturatedFat: "0,0 г",
            carbohydrates: "7,4 г",
            sugars: "6,0 г",
            protein: "7,0 г",
            salt: "0,23 г",
            fiber: "0,6 г",
        },
    },
    ingredients: {
        title: 'Ingredients',
        content: [
            "Жидкий яичный белок 64%",
            "Пюре манго 11,3%",
            "Вода",
            "Грушевый концентрат",
            "Концентрат лимонного сока",
            "Льняная клетчатка",
            "Картофельный крахмал",
            "Натуральный ароматизатор",
            "Краситель (каротины)",
            "Регулятор кислотности (лимонная кислота)",
            "Консервант (сорбат калия)",
            "Загуститель (пектины)",
        ],
    },
    features: [
        {
            title: "Чисто выгодно",
            caption: "Смузи, наполненные натуральными белками яиц, выращенных в сарае."
        },
        {
            title: "Гладкий",
            caption: "Гладкая текстура смузи, никогда не мучнистая и всегда сытная."
        },
        {
            title: "Чистый белок",
            caption: "Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок."
        },
        {
            title: "Универсальность",
            caption: "Быстрое и питательное дополнение к любому приему пищи."
        },
        {
            title: "Сделано для всех",
            caption: "Смузи созданы для всех слоев общества."
        }
    ],
    photos: {
        main: main_orange,
        catalog: catalog_orange,
        gallery: [
            gallery1_orange,
            gallery2_orange,
            gallery3_orange,
            gallery4_orange,
        ],
    },
    positions: {
        rotate_menu: -2,
        rotate_catalog: 0,
        top_catalog: 50,
        parallaxDivide: 10,
    }
};

const products = [
    product_apple,
    product_mango,
    product_orange,
];

export default products;