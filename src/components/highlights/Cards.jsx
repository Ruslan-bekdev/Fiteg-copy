import React from 'react';
import card4 from "../../assets/highlights/card4.png";
import card4_cpap from "../../assets/highlights/card4-cpap.svg";
import title2 from "../../assets/landing/title2.png";
import card3 from "../../assets/highlights/card3.png";
import card1 from "../../assets/highlights/card1.png";
import styled from "styled-components";

const CardsContent = styled.div`
  width: 100%;
  aspect-ratio: 12/9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;
  margin-top: 5rem;
  
  .card{
    width: 33%;
    flex-grow: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: left;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: calc(.9875rem + 1.86275vw);
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    position: relative;
    
    .card2__img{
      height: 3rem;
      object-fit: contain;
    }
    .card4__img{
      width: 3rem;
      object-fit: contain;
      position: absolute;
      left: 2rem;
      bottom: 2rem;
    }
    h3{
      font-size: 2rem;
      line-height: 3rem;
      margin-bottom: .4rem;
      white-space: nowrap;
    }
    p{
      font-size: 1.2rem;
    }
    
    &:first-child,
    &:last-child{
      display: block;
      width: 60%;
      
      h3,p{
        max-width: 60%;
      }
      h3{
        font-size: 3rem;
        white-space: normal;
      }
    }
  }
  
  @media (max-width: 740px) {
    aspect-ratio: 2/3;
    gap: 1%;

    .card{
      width: 100%;

      &:first-child,
      &:last-child{
        h3,p{
          max-width: 50%;
        }
      }
    }
  }
`;

const Cards = () => {
    return (
        <CardsContent>
            <div
                className='card card_parallaxBack'
                style={{
                    backgroundImage: `url(${card4})`,
                    backgroundColor: '#f3f4f5',
                    paddingBottom: `5rem`,
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
        </CardsContent>
    );
};

export default Cards;