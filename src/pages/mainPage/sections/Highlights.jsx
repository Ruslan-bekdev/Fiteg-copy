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

        if (!cards) return;

        cards.forEach((card,index) => {
            const top = card.getBoundingClientRect().top;
            const height = card.clientHeight;

            if (top-height > windowHeight) return;

            const backPosition = height/200 * (top/(windowHeight/100));

            index === 0 &&
            console.log(backPosition)

            if (index === 0)
                card.style.backgroundPositionY = `${backPosition > 0 ?backPosition :0}px`;
            else
                card.style.backgroundPositionY = `${backPosition-height/3}px`;
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