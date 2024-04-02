import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import Modal from "../../../components/recipes/Modal";
import Items from "../../../components/recipes/Items";

const RecipesContent = styled.section`
  width: 100%;
  height: fit-content;
  box-sizing: content-box;
  h2{
    font-size: 3rem;
  }
`;

const Recipes = ({windowHeight,texts}) => {
    const cardTopPosition = Math.floor(windowHeight/100*10);
    const cardMargin = Math.floor(windowHeight/100);

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isModalActive, setIsModalActive] = useState(false);

    const activateModal = () => {
        setIsModalActive(true);
    };
    const deactivateModal = () => {
        setIsModalActive(false);
    };

    const handleShowActiveText = () => {
        const images = document.querySelectorAll('.recipe__image');

        if (!images) return;

        images.forEach((item,index) => {
            const itemRect = item.getBoundingClientRect();
            const itemTop = itemRect.top;
            if (index === images.length -1 && itemTop <= cardTopPosition + cardMargin * index) {
                return setActiveCardIndex(index);
            }
            if (itemTop === cardTopPosition + cardMargin * index) {
                return setActiveCardIndex(index)
            }
        });
    };
    window.addEventListener('scroll', handleShowActiveText);

    useEffect(() => {
        const images = document.querySelectorAll('.recipe__image');
        const caption = document.querySelector('.recipe__caption')
        const counter = document.querySelector('.recipe__counter')

        if (!images || !caption || !counter) return;

        images.forEach((li, index) => {
            li.style.top = `${cardTopPosition + cardMargin * index}px`
            li.style.zIndex = 10 * index
        });

        caption.style.top = `${cardTopPosition}px`
        counter.style.top = `${cardTopPosition}px`
    }, []);

    return (
        <RecipesContent className='container'>
            <h2>{texts.title}</h2>
            <Items
                activeCardIndex={activeCardIndex}
                activateModal={activateModal}
                texts={texts.cards}
                buttonText={texts.buttonText}
            />
            <Modal
                texts={texts.cards}
                index={activeCardIndex}
                isModalActive={isModalActive}
                deactivateModal={deactivateModal}
            />
        </RecipesContent>
    );
};

export default Recipes;