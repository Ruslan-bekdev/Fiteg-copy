import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import {recipes} from "../../../configs/recipes";

const RecipesContent = styled.section`
  width: 100%;
  height: fit-content;
  box-sizing: content-box;
  h2{
    font-size: 46px;
  }
`;

const RecipesItems = styled.div`
  display: flex;
  margin-top: 81px;
  padding-bottom: 94px;
  gap: 36px;
  position: relative;

  .counter {
    height: 100%;
    font-size: 48px;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      width: 50px;
      
      &::-moz-range-track{
        background: #0e0f19;
        height: .4vw;
      }
    }
  }

  .images {
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
      position: sticky;
      height: 700px;
      object-fit: contain;
      border-radius: 48px;
    }
  }
`;
const Caption = styled.div`
  height: 100%;
  position: sticky;
  text-align: left;
  
  h3 {
    font-size: 64px;
  }
  p {
    font-size: 32px;
    margin-block: 32px;
  }
  span {
    width: fit-content;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3vw;
    background-color: #f2f3f4;
    cursor: pointer;
    
    b {
      font-size: 24px;
      padding-right: 16px;
      display: inline-block;
      position: relative;
      &::after {
        content: '+';
        width: 8px;
        aspect-ratio: 1;
        font-size: 32px;
        line-height: 0;
        margin-left: 8px;
        position: absolute;
        bottom: 33%;
      }
    }
    @media (hover: hover) {
      &:hover {
        background-color: #ffc857;
      }
    }
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  background-color: #0e0f19;
  z-index: 1000;
  
  &.active{
    display: inline-block;
  }
`;
const Modal = styled.div`
  max-width: 100%;
  height: 90dvh;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fdfdfd;
  text-align: left;
  padding: 5vw 5vw;
  z-index: 2000;
  transition: .2s ease-in-out;
  border-radius: 3vw;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  h4{
    font-size: 5vw;
  }
  h5{
    font-size: 2.5vw;
    margin-block: 2vw 1.7vw;
  }
  li{
    font-size: 2vw;
    margin-left: 3vw;
  }
  .numbered ul{
    list-style-type: decimal;
  }
`;

const RenderModal = ({index,isModalActive,deactivateModal}) => {
    const contentConfig = recipes[index].content;

    return !isModalActive ?'' :(
        <>
            <Modal className='container'>
                <h4>
                    {
                        contentConfig.title
                    }
                </h4>
                {
                    Object.entries(contentConfig.lists).map(([key,value],index) =>
                        <div className={index === 1 ?'numbered' :''}>
                            <h5>{key}</h5>
                            <ul>
                                {
                                    value.map((item)=>
                                        <li>{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </Modal>

            <Overlay
                className={isModalActive ?'active' :''}
                onClick={deactivateModal}
            />
        </>
    )
}

const Recipes = () => {
    const cardTopPosition = 160;
    const cardMargin = 20;
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isModalActive, setIsModalActive] = useState(false);

    const handleShowActiveText = () => {
        const images = document.querySelectorAll('.image');

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
    const activateModal = () => {
      setIsModalActive(true);
    };
    const deactivateModal = () => {
      setIsModalActive(false);
    };
    window.addEventListener('scroll', handleShowActiveText);

    useEffect(() => {
        const images = document.querySelectorAll('.image');
        const caption = document.querySelector('.caption')
        const counter = document.querySelector('.counter')

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
            <h2>Ways to use</h2>
            <RecipesItems>
                <span className='counter'>
                    <b>{activeCardIndex+1}</b>
                    <input type="range" disabled
                           min="0" max={recipes.length-1}
                           value={activeCardIndex}
                    />
                </span>
                <div className='images'>
                    {
                        recipes.map((recipe,index) =>
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className='image'
                                key={index}
                            />
                        )
                    }
                </div>
                <Caption className='caption'>
                    <h3>{recipes[activeCardIndex].title}</h3>
                    <p>{recipes[activeCardIndex].caption}</p>
                    <span>
                        <b
                            onClick={activateModal}
                        >
                            Recipe suggestion
                        </b>
                    </span>
                </Caption>
            </RecipesItems>
            <RenderModal
                index={activeCardIndex}
                isModalActive={isModalActive}
                deactivateModal={deactivateModal}
            />
        </RecipesContent>
    );
};

export default Recipes;