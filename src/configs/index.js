import {
    titleAndBack_eng,
    titleAndBack_ru,
} from "./landingBackAndTitles";
import {
    marquee_main_eng,
    marquee_main_ru,
} from "./marquee/marquee_main";
import {
    marquee_product_eng,
    marquee_product_ru,
} from "./marquee/marquee_products";
import {
    highlights_eng,
    highlights_ru,
} from "./highlights";
import {
    about_eng,
    about_ru,
} from "./about";
import products_eng from "./products/products_eng";
import products_ru from "./products/products_ru";
import recipes_eng from "./recipes/recipes_eng";
import recipes_ru from "./recipes/recipes_ru";

export const eng = {
    languageText: 'English',
    mainPage:{
        titleAndBack: titleAndBack_eng,
        marquee: marquee_main_eng,
        highlights: highlights_eng,
        recipes: recipes_eng,
        about:about_eng,
        socialRoundedText: 'Have a nice day!',
    },
    productPage:{
        backButtonText: 'Back',
        marquee:marquee_product_eng,
        recommendationText: 'Next up',
    },
    products: products_eng,
    menu: '',
};
export const ru = {
    languageText: 'Русский',
    mainPage:{
        titleAndBack: titleAndBack_ru,
        marquee: marquee_main_ru,
        highlights: highlights_ru,
        recipes: recipes_ru,
        about:about_ru,
        socialRoundedText: 'Хорошего дня!',
    },
    productPage:{
        backButtonText: 'Назад',
        marquee:marquee_product_ru,
        recommendationText: 'Далее',
    },
    products: products_ru,
    menu: '',
};

const languages = [eng,ru];
export const defaultLanguage = ru;

export default languages;