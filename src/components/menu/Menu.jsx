import React from 'react';
import styled from "styled-components";
import products from "../../configs/products";
import {NavLink} from "react-router-dom";

const MenuContent = styled.div`
  height: 100dvh;
  position: relative;
  top: 0;
  left: 0;
  padding-top: 2vw;
  padding-inline: 2vw;
  text-align: center;
  box-sizing: border-box;
  overflow-y: hidden;

  h2 > * {
    font-size: 5vw;
    color: #0e0f19;
    text-decoration: none;
  }

  .menu__header {
    font-size: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: 16vw;
      height: 6vw;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3vw;
      background-color: #f2f3f4;
      cursor: pointer;
      @media (hover: hover) {
        &:hover {
          background-color: #ffc857;
          color: #0e0f19;
        }
      }
    }
  }
`;
const Items = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 100vh;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-top: 5vw;
  
  .item{
    width: 100%;
    min-height: 32vw;
    background-color: #069c6b;
    border-radius: 3vw;
    position: sticky;
    top: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    cursor: pointer;
    b{
      font-size: 2vw;
      position: absolute;
      top: 1vw;
      left: 2vw;
    }
    img{
      height: 120%;
      object-fit: contain;
    }
    
    &:not(:first-child){
      margin-top: 4%;
    }
  }
  &.showed>div {
    animation: move .6s ease-in-out;
  }

  @keyframes move {
    0% {
      transform: translateY(calc(var(--offset) * -.8px));
    }
    50% {
      transform: translateY(calc(var(--offset) * 1.6px));
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Menu = ({menuActiveStatus}) => {
    const cardTopPosition = 0;
    const cardMargin = 42;

    const renderItems = () => {
        return products.map((product,index) =>
            <div
                className='item'
                style={{
                    backgroundColor: product.color,
                    top: `${cardTopPosition + cardMargin * index}px`,
                    zIndex: 1000 * index,
                    animationDelay: `${index * .1}s`,
                    '--offset': `${15 + index * 15}`,
                }}
                key={index}
            >
                <b>{index+1}</b>
                <img
                    src={product.photos.main} alt={product.name}
                    style={{transform: `rotate(${product.positions.rotate_menu}deg)`}}
                />
            </div>
        );
    };

    return (
        <MenuContent>
            <div className='menu__header'>
                <h3>лого</h3>
                <span>
                    <b>Язык</b>
                </span>
            </div>
            <h2>
                <NavLink to='/'>
                    Home
                </NavLink>
            </h2>
            <Items className={menuActiveStatus ?'showed' :''}>
                {
                    renderItems()
                }
            </Items>
        </MenuContent>
    );
};

export default Menu;