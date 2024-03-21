import React from 'react';
import {recipes} from "../../configs/recipes";
import styled from "styled-components";

const ItemsContent = styled.div`
  width: 100%;
  box-sizing: content-box;
  display: flex;
  margin-top: 10%;
  padding-bottom: 12%;
  gap: 2%;
  position: relative;

  .counter {
    height: 100%;
    font-size: 4rem;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      width: 5rem;
      
      &::-moz-range-track{
        background: #0e0f19;
        height: .2rem;
      }
    }
    
    @media (max-width: 1230px) {
      display: none;
    }
  }

  .images {
    gap: 4vh;
    display: flex;
    flex-direction: column;

    .image {
      max-width: 40vw;
      position: sticky;
      object-fit: cover;
      border-radius: 1rem;
      @media (max-width: 740px){
        height: 30vh;
      }
    }
  }
`;
const Caption = styled.div`
  height: 100%;
  position: sticky;
  text-align: left;
  
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    margin-block: .5rem;
  }
  span {
    width: fit-content;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2vw;
    background-color: #f2f3f4;
    cursor: pointer;
    
    b {
      font-size: 1.5rem;
      padding-right: 1rem;
      display: inline-block;
      position: relative;
      &::after {
        content: '+';
        width: .5rem;
        aspect-ratio: 1;
        font-size: 2rem;
        line-height: 0;
        margin-left: .5rem;
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

const Items = ({activeCardIndex,activateModal}) => {
    return (
        <ItemsContent>
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
        </ItemsContent>
    );
};

export default Items;