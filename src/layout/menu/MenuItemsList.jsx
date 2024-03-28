import React from 'react';
import styled from "styled-components";
import products from "../../configs/products";
import {useNavigate} from "react-router-dom";

const Items = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 100%;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-top: 1rem;
  gap: 7dvh;
  
  .menu__item{
    width: 100%;
    aspect-ratio: 2;
    max-height: 75dvh;
    background-color: #069c6b;
    border-radius: 2vw;
    position: sticky;
    top: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    cursor: pointer;
    
    b{
      font-size: 1rem;
      position: absolute;
      top: 1rem;
      left: 1.2rem;
    }
    img{
      height: 110%;
      object-fit: contain;
    }
    
    &:not(:first-child){
      margin-top: 4%;
    }
  }
  &.menu_showed>div {
    animation: move .6s ease-in-out;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(calc(var(--offset) * 1.4px));
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const MenuItemsList = ({deactivateMenu,menuActiveStatus}) => {
    const cardMargin = 16;
    const navigate = useNavigate();

    const toProductPage = ({id}) => {
        deactivateMenu();
        navigate(`/product/${id}`);
    };

    return (
        <Items className={menuActiveStatus ?'menu_showed' :''}>
            {
                products.map((product,index) =>
                    <div
                        className='menu__item'
                        style={{
                            backgroundColor: product.color,
                            top: `${cardMargin * index}px`,
                            zIndex: 10 * index,
                            animationDelay: `${index * .1}s`,
                            '--offset': `${15 + index * 15}`,
                        }}
                        key={index}
                        onClick={()=>toProductPage({id: index})}
                    >
                        <b>{index+1}</b>
                        <img
                            src={product.photos.main} alt={product.name}
                            style={{transform: `rotate(${product.positions.rotate_menu}deg)`}}
                        />
                    </div>
                )
            }
        </Items>
    );
};

export default MenuItemsList;