import React, {Fragment, useEffect} from 'react';
import styled from "styled-components";

const MarqueeContent = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  
  #marquee_animated{
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  h2{
    white-space: nowrap;
    width: 100%;
    font-size: var(--dynamic-fontSize);
    display: flex;
    align-items: center;
    img{
      aspect-ratio: 1;
    }
  }
`;

const Marquee = ({texts}) => {
    const marqueeImgHeight = 5;
    const marqueeSpanMargin = 2;
    const marqueeArray = Object.entries(texts);
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
    const marqueeAnimationSpeed = 20;

    const renderMarqueeContent = () =>
        texts.map((item, index) =>
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