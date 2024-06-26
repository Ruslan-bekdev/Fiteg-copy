import React, {useEffect} from 'react';
import styled from "styled-components";
import products_eng from "../../configs/products/products_eng";
import {useNavigate} from "react-router-dom";

const Items = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-top: 1rem;
  gap: 7vh;
  
  .menu__item{
    width: 100%;
    aspect-ratio: 2;
    max-height: 75vh;
    background-color: #069c6b;
    border-radius: calc(.9875rem + 1.86275vw);
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
    animation: move .5s ease-in-out;
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
    useEffect(() => {
        const items = document.querySelector('.menu_showed');

        if (!items) return;

        items.scrollTo(0, 0);
    }, [menuActiveStatus]);

    return (
        <Items className={menuActiveStatus ?'menu_showed' :''}>
            {
                products_eng.map((product, index) =>
                    <div
                        className='menu__item'
                        style={{
                            backgroundColor: product.color,
                            top: `${cardMargin * index}px`,
                            zIndex: 10 * index,
                            animationDelay: `${index * .1}s`,
                            '--offset': `${9 + index * 9}`,
                        }}
                        key={index}
                        onClick={()=>toProductPage({id: index})}
                    >
                        <b>{index+1}</b>
                        <img
                            src={product.images.main} alt={product.name}
                            style={{transform: `rotate(${product.positions.rotate_menu}deg)`}}
                        />
                    </div>
                )
            }
        </Items>
    );
};

export default MenuItemsList;