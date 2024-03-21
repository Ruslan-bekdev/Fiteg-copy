import React, {useState} from 'react';
import styled from "styled-components";
import products from "../../../configs/products";
import Products from "../../../components/catalog/Products";
import Marquee from "../../../components/catalog/Marquee";

const CatalogContent = styled.section`
  height: 100dvh;
  position: relative;
  
  @media (max-width: 740px) {
    height: auto;
  }
`;

const Catalog = ({isMobile,windowHeight}) => {
    const [animatedStatus,setAnimatedStatus] = useState(false);

    const handleScrollMarqueeAnimation = () => {
        const element = document.querySelector('.marquee');
        const windowPositionY = window.scrollY;

        if (windowPositionY > windowHeight * 2 || !element) return;

        element.style.top = `${windowPositionY/2.2}px`;
    };
    const handleScrollProductsAnim = () => {
        const productElements = document.querySelectorAll('.product');
        const windowPositionY = window.scrollY;

        if (windowPositionY > windowHeight * 2 || !productElements || isMobile) return;

        if(windowPositionY > windowHeight/2 && !animatedStatus)
            setAnimatedStatus(true);

        productElements.forEach((product, index) => {
            if (products[index].positions.parallaxDivide) {
                product.style.transform = `translateY(-${windowPositionY /
                products[index].positions.parallaxDivide/2}dvh)`;
            }
        });
    };

    window.addEventListener('scroll',() => {
            handleScrollMarqueeAnimation();
            handleScrollProductsAnim();
        }
    );

    return (
        <CatalogContent>
            <Marquee/>
            <Products
                animatedStatus={animatedStatus}
                isMobile={isMobile}
                className='container'
            />
        </CatalogContent>
    );
};

export default Catalog;