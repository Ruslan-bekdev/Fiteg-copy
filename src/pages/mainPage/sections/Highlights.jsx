import React from 'react';
import styled from "styled-components";
import title2 from "../../../assets/landing/title2.png";
import card1 from "../../../assets/highlights/card1.png";
import card3 from "../../../assets/highlights/card3.png";
import card4 from "../../../assets/highlights/card4.png";
import card4_cpap from "../../../assets/highlights/card4-cpap.svg";

const HighlightsContent = styled.section`
  width: 100vw;
  height: fit-content;
  min-height: 100dvh;

  h2{
    font-size: 36px;
  }
`;

const Cards = styled.div`
  width: 100%;
  aspect-ratio: 12/9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3%;
  margin-top: 81px;
  
  .card{
    width: 33%;
    flex-grow: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: left;
    padding: 36px;
    box-sizing: border-box;
    border-radius: 48px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    position: relative;
    
    .card2__img{
      height: 48px;
      object-fit: contain;
    }
    .card4__img{
      width: 48px;
      object-fit: contain;
      position: absolute;
      left: 46px;
      bottom: 46px;
    }
    h3{
      font-size: 32px;
      line-height: 3rem;
      margin-bottom: .4rem;
      white-space: nowrap;
    }
    p{
      font-size: 18px;
    }
    
    &:first-child,
    &:last-child{
      display: block;
      width: 60%;
      
      h3,p{
        max-width: 60%;
      }
      h3{
        font-size: 48px;
        white-space: normal;
      }
    }
  }
  
  @media (max-width: 768px) {
    aspect-ratio: 1/2;
    gap: 0;

    .card{
      width: 100%;
      flex-grow: 1;
    }
  }
`;

const Highlights = () => {
    const handleScrollCardBackAnimation = () => {
        const cards = document.querySelectorAll('.card_parallaxBack');
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;
        const backPosition = -(windowPositionY - windowHeight * 2)/5;

        if (windowPositionY > windowHeight * 3) return;

        cards.forEach((card)=>{
            card.style.backgroundPositionY = `${backPosition}px`;
        });
    };

    window.addEventListener('scroll', handleScrollCardBackAnimation);

    return (
        <HighlightsContent className='container'>
            <h2>Highlights</h2>
            <Cards>
                <div
                    className='card card_parallaxBack'
                    style={{
                        backgroundImage: `url(${card1})`,
                        backgroundColor: '#a0cd5f',
                    }}
                >
                    <h3>Ready-to-Drink</h3>
                    <p>
                        Convenient for on-the-go consumption with no preparation needed.
                        Just shake well before use!
                    </p>
                </div>
                <div
                    className='card'
                    style={{
                        backgroundColor: '#0e0f19',
                        color: '#fdfdfd'
                    }}
                >
                    <img
                        src={title2} alt=""
                        className='card2__img'
                    />
                    <h3>Natural Flavors</h3>
                    <p>
                        Made with pure, natural ingredients for a genuine taste experience
                    </p>
                </div>
                <div
                    className='card'
                    style={{
                        backgroundImage: `url(${card3})`,
                        backgroundColor: '#fac36c',
                    }}
                >
                    <h3>Refined Taste</h3>
                    <p>
                        Smooth texture without the strong taste of eggs
                    </p>
                </div>
                <div
                    className='card card_parallaxBack'
                    style={{
                        backgroundImage: `url(${card4})`,
                        backgroundColor: 'inherit',
                    }}
                >
                    <img
                        src={card4_cpap} alt=""
                        className='card4__img'
                    />
                    <h3>Eco-Friendly Packaging</h3>
                    <p>
                        Packaged in recyclable materials to support environmental sustainability
                    </p>
                </div>
            </Cards>
        </HighlightsContent>
    );
};

export default Highlights;