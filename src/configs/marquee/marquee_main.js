const icons = {
    crossed_milk: `${process.env.PUBLIC_URL}/assets/marquee/catalog/crossed_milk.svg`,
    crossed_gluten: `${process.env.PUBLIC_URL}/assets/marquee/catalog/crossed_gluten.svg`,
    crossed_soy: `${process.env.PUBLIC_URL}/assets/marquee/catalog/crossed_soy.svg`,
    crossed_sugar: `${process.env.PUBLIC_URL}/assets/marquee/catalog/crossed_sugar.svg`
};

export const marquee_main_eng = [
    {
        svg: icons.crossed_milk,
        text: '0% milk, lactose',
    },
    {
        svg: icons.crossed_gluten,
        text: '0% gluten',
    },
    {
        svg: icons.crossed_soy,
        text: '0% soy',
    },
    {
        svg: icons.crossed_sugar,
        text: '0% added sugar',
    },
];
export const marquee_main_ru = [
    {
        svg: icons.crossed_milk,
        text: '0% молока, лактозы',
    },
    {
        svg: icons.crossed_gluten,
        text: '0% глютена',
    },
    {
        svg: icons.crossed_soy,
        text: '0% сои',
    },
    {
        svg: icons.crossed_sugar,
        text: '0% сахара',
    },
];