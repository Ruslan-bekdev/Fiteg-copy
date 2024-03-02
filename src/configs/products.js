import main_apple from "../assets/products/apple/main/img.png";
import gallery1_apple from "../assets/products/apple/gallery/1.jpg";
import gallery2_apple from "../assets/products/apple/gallery/2.jpg";
import gallery3_apple from "../assets/products/apple/gallery/3.jpg";
import gallery4_apple from "../assets/products/apple/gallery/4.jpg";

import main_mango from "../assets/products/mango/main/img.png";
import gallery1_mango from "../assets/products/mango/gallery/1.jpg";
import gallery2_mango from "../assets/products/mango/gallery/2.jpg";
import gallery3_mango from "../assets/products/mango/gallery/3.jpg";
import gallery4_mango from "../assets/products/mango/gallery/4.jpg";

import main_orange from "../assets/products/orange/main/img.png";
import gallery1_orange from "../assets/products/orange/gallery/1.jpg";
import gallery2_orange from "../assets/products/orange/gallery/2.jpg";
import gallery3_orange from "../assets/products/orange/gallery/3.jpg";
import gallery4_orange from "../assets/products/orange/gallery/4.jpg";

const product_apple = {
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
    color: '#069c6b',
    nutritionalInformation: {
        eggWhites: "79%",
        protein: "25г",
        calories: "59ккал",
    },
    nutritionFacts: {
        energy: "251 кДж/60 ккал",
        fat: "0,1 г",
        saturatedFat: "0,0 г",
        carbohydrates: "7,4 г",
        sugars: "6,0 г",
        protein: "7,0 г",
        salt: "0,23 г",
        fiber: "0,6 г",
    },
    ingredients: [
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
    features: [
        "Чисто выгодно: Смузи, наполненные натуральными белками яиц, выращенных в сарае.",
        "Гладкий: Гладкая текстура смузи, никогда не мучнистая и всегда сытная.",
        "Чистый белок: Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок.",
        "Универсальность: Быстрое и питательное дополнение к любому приему пищи.",
        "Сделано для всех: Смузи созданы для всех слоев общества.",
    ],
    photos: {
        main: main_apple,
        gallery: [
            gallery1_apple,
            gallery2_apple,
            gallery3_apple,
            gallery4_apple,
        ],
    },
    positions: {
        rotate_menu: -4,
        rotate_catalog: -8,
        top_catalog: 30,
        parallaxDivide: 4,
    }
};
const product_mango = {
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
    color: '#fdc757',
    nutritionalInformation: {
        eggWhites: "64%",
        protein: "21г",
        calories: "60 ккал",
    },
    nutritionFacts: {
        energy: "251 кДж/60 ккал",
        fat: "0,1 г",
        saturatedFat: "0,0 г",
        carbohydrates: "7,4 г",
        sugars: "6,0 г",
        protein: "7,0 г",
        salt: "0,23 г",
        fiber: "0,6 г",
    },
    ingredients: [
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
    features: [
        "Чисто выгодно: Смузи, наполненные натуральными белками яиц, выращенных в сарае.",
        "Гладкий: Гладкая текстура смузи, никогда не мучнистая и всегда сытная.",
        "Чистый белок: Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок.",
        "Универсальность: Быстрое и питательное дополнение к любому приему пищи.",
        "Сделано для всех: Смузи созданы для всех слоев общества.",
    ],
    photos: {
        main: main_mango,
        gallery: [
            gallery1_mango,
            gallery2_mango,
            gallery3_mango,
            gallery4_mango,
        ],
    },
    positions: {
        rotate_menu: -16,
        rotate_catalog: 12,
        top_catalog: 20,
        parallaxDivide: 100,
    }
};
const product_orange = {
    name: "Манго-смузи",
    description: "Побалуйте себя тропическим наслаждением нашего смузи из манго, идеального сочетания 64% жидкого яичного белка и 11,3% пюре манго...",
    color: '#fd6c0a',
    nutritionalInformation: {
        eggWhites: "60%",
        protein: "20г",
        calories: "51 ккал",
    },
    nutritionFacts: {
        energy: "251 кДж/60 ккал",
        fat: "0,1 г",
        saturatedFat: "0,0 г",
        carbohydrates: "7,4 г",
        sugars: "6,0 г",
        protein: "7,0 г",
        salt: "0,23 г",
        fiber: "0,6 г",
    },
    ingredients: [
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
    features: [
        "Чисто выгодно: Смузи, наполненные натуральными белками яиц, выращенных в сарае.",
        "Гладкий: Гладкая текстура смузи, никогда не мучнистая и всегда сытная.",
        "Чистый белок: Нет сои, лактозы, сахара, глютена и жиров – только необходимый белок.",
        "Универсальность: Быстрое и питательное дополнение к любому приему пищи.",
        "Сделано для всех: Смузи созданы для всех слоев общества.",
    ],
    photos: {
        main: main_orange,
        gallery: [
            gallery1_orange,
            gallery2_orange,
            gallery3_orange,
            gallery4_orange,
        ],
    },
    positions: {
        rotate_menu: -2,
        rotate_catalog: 4,
        top_catalog: 36,
        parallaxDivide:  2.5,
    }
};

const products = [
    product_apple,
    product_mango,
    product_orange,
];

export default products;