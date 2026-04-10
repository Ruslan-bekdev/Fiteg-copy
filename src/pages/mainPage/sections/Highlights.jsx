import React, {useEffect} from 'react';
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
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.card_parallaxBack');
            if (!cards.length) return;

            const viewportCenter = window.innerHeight / 2;

            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const offset = (cardCenter - viewportCenter) / 2;

                card.style.backgroundPosition = `50% calc(50% + ${i === 0 ?Math.max(offset, -15) :offset}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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