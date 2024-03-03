import React from 'react';
import styled from "styled-components";
import products from "../../configs/products";
import {NavLink} from "react-router-dom";

const MenuContent = styled.div`
  *{
    color: #0e0f19;
  }
  height: 100dvh;
  position: relative;
  top: 0;
  left: 0;
  padding-top: 2vw;
  padding-inline: 2vw;
  text-align: center;
  box-sizing: border-box;
  overflow-y: hidden;

  .menu__header {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: 120px;
      aspect-ratio: 5/2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3vw;
      background-color: #f2f3f4;
      cursor: pointer;
      @media (hover: hover) {
        &:hover {
          background-color: #ffc857;
        }
      }
    }
  }
  .baseLink{
    font-size: 48px;
    text-decoration: none;
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
  padding-top: 32px;
  
  .item{
    width: 100%;
    height: 360px;
    background-color: #069c6b;
    border-radius: 48px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    cursor: pointer;
    b{
      font-size: 24px;
      position: absolute;
      top: 24px;
      left: 32px;
    }
    img{
      height: 110%;
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
    const cardMargin = 16;

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
                <h4>лого</h4>
                <span>
                    <b>Язык</b>
                </span>
            </div>
            <NavLink to='/' className='baseLink'>
                <h3>Домой</h3>
            </NavLink>
            <Items className={menuActiveStatus ?'showed' :''}>
                {
                    renderItems()
                }
            </Items>
        </MenuContent>
    );
};

export default Menu;