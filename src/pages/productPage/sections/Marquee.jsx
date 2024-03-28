import React, {Fragment, useEffect} from 'react';
import styled from "styled-components";
import {marquee_product} from "../../../configs/marquee";

const MarqueeContent = styled.div`
  width: 100vw;
  overflow: hidden;
  background-color: #fdc757;
  margin-block: 4rem 8rem;
  padding-block: .5rem;

  #marquee_animated {
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  h2 {
    white-space: nowrap;
    width: 100%;
    font-size: var(--dynamic-fontSize);
    display: flex;
    align-items: center;

    img {
      aspect-ratio: 1;
    }
    
    @media (min-width: 1230px){
      font-size: 3rem !important;
      
      img{
        height: 4rem !important;
      }
    }
  }
`;

const Marquee = () => {
    const marqueeImgHeight = 5;
    const marqueeSpanMargin = 1.4;
    const marqueeArray = Object.entries(marquee_product);
    const marqueeElementsCount = marqueeArray.length;

    const animateMarquee = () => {
        const marquee = document.querySelector('#marquee_animated');
        if (!marquee) return;

        const keyframes = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(-50%)'}
        ];

        const options = {
            duration: marqueeAnimationSpeed*1000,
            iterations: Infinity,
            easing: 'linear'
        };

        marquee.animate(keyframes, options);
    };

    useEffect(() => {
        animateMarquee();
    }, []);

    const marqueeSymbolsLenght = marqueeArray.reduce((textLength,item) =>
            textLength + item[1].text.length
        ,0);
    const marqueeFontSize = (200-marqueeImgHeight)
        /(marqueeSymbolsLenght + (marqueeSpanMargin+marqueeImgHeight)*marqueeElementsCount);
    const marqueeAnimationSpeed = 40;

    const renderMarqueeContent = () =>
        marquee_product.map((item, index) =>
            <Fragment key={index}>
                <img
                    src={item.svg} alt=""
                    style={{height: `${marqueeImgHeight}vw`}}
                />
                <span
                    style={{marginInline: `${marqueeSpanMargin}vw`}}
                >{item.text}</span>
            </Fragment>
        );

    return (
        <MarqueeContent className='catalog__marquee marquee'>
            <div
                id='marquee_animated'
                style={{
                    '--dynamic-fontSize': `${marqueeFontSize}vw`
                }}
            >
                <h2>{renderMarqueeContent()}</h2>
                <h2>{renderMarqueeContent()}</h2>
            </div>
        </MarqueeContent>
    );
};

export default Marquee;