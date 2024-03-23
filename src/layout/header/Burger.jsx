import React from 'react';
import styled from 'styled-components';

const MenuBurger = styled.div`
  width: 2rem;
  aspect-ratio: 1;
  position: relative;
  pointer-events: auto;
  
  .burger {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #0e0f19;
    cursor: pointer;
    transition: .3s ease-in;
    z-index: 3;

    > div {
      width: 35%;
      height: 35%;

      > div {
        width: 100%;
        height: 20%;
        border-radius: .5rem;
        background-color: #fff;
      }
    }

    &_light {
      filter: invert(1);
    }
    
    &_default {
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      &.hidden {
        transform: rotate(180deg);
      }
    }

    &_active {
      > div {
        position: relative;

        > div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);

          &:first-child {
            transform: translate(-50%) rotate(45deg);
          }

          &:last-child {
            transform: translate(-50%) rotate(-45deg);
          }
        }
      }

      &.hidden {
        transform: rotate(-180deg);
      }
    }
  }
  
  .hidden{
    opacity: 0;
    pointer-events: none;
  }
`;

const Burger = ({activateMenu,deactivateMenu,menuActiveStatus,isBackActive}) => {
    return (
        <MenuBurger>
            <div
                className={`burger burger_default ${menuActiveStatus ?'hidden' :''} ${isBackActive ?'burger_light' :''}`}
                onClick={activateMenu}
            >
                <div>
                    <div/>
                    <div/>
                </div>
            </div>
            <div
                className={`burger burger_active burger_light ${menuActiveStatus ?'' :'hidden'}`}
                onClick={deactivateMenu}
            >
                <div>
                    <div/>
                    <div/>
                </div>
            </div>
        </MenuBurger>
    );
};

export default Burger;