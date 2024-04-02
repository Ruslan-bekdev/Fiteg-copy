import React from 'react';
import styled from "styled-components";
import Cards from "../../../components/highlights/Cards";

const HighlightsContent = styled.section`
  width: 100vw;
  min-height: auto;

  h2{
    font-size: 2.5rem;
  }
`;

const Highlights = ({windowHeight,texts}) => {
    const handleScrollCardBackAnimation = () => {
        const cards = document.querySelectorAll('.card_parallaxBack');
        const windowPositionY = window.scrollY;
        const backPosition = (windowPositionY - windowHeight * 2)/8;

        if (windowPositionY > windowHeight * 3 || !cards) return;

        cards.forEach((card)=>{
            card.style.backgroundPositionY = `${backPosition}%`;
        });
    };
    window.addEventListener('scroll', handleScrollCardBackAnimation);

    return (
        <HighlightsContent className='container'>
            <h2>{texts.title}</h2>
            <Cards
                texts={texts.cards}
            />
        </HighlightsContent>
    );
};

export default Highlights;