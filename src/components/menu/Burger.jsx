import React from 'react';
import styled from 'styled-components';

const MenuBurger = styled.div`
  .burger{
    width: 35px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 4vw;
    top: 6vh;
    cursor: pointer;
    transition: .3s ease-in;
    z-index: 3;
    
    >div{
      width: 35%;
      height: 35%;
      
      >div{
        width: 100%;
        height: 2px;
        border-radius: 8px;
      }
    }
  }
  
  .burger_default{
    background-color: #0e0f19;
    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      >div{
        background-color: #fff;
      }
    }
    &.hidden{
      transform: rotate(180deg);
    }
  }
  .burger_light{
    background-color: #fff;
    &>div>div{
      background-color: #0e0f19;
    }
  }
  .burger_active{
    >div{
      position: relative;
      >div{
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
    &.hidden{
      transform: rotate(-180deg);
    }
  }
  
  .hidden{
    opacity: 0;
    pointer-events: none;
  }
`;

const Burger = ({activateMenu,deactivateMenu,menuActiveStatus}) => {

    return (
        <MenuBurger>
            <div
                className={`burger burger_default ${menuActiveStatus ?'hidden' :''}`}
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