import React, {useEffect} from 'react';
import styled from "styled-components";
import MenuItemsList from "./MenuItemsList";

const MenuContent = styled.div`
  *{
    color: #0e0f19;
  }
  height: 100dvh;
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  overflow-y: hidden;

  .menu__header {
    height: 10vh;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: end;

    span {
      padding: .6rem 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2vw;
      background-color: #f2f3f4;
      cursor: pointer;
      @media (hover: hover) {
        &:hover {
          background-color: #ffc857;
        }
      }
    }
  }
`;

const Menu = ({menuActiveStatus}) => {

    const updatePadding = () => {
        const itemsList = document.querySelector('.showed');
        const itemHeight = document.querySelector('.item').clientHeight;

        if (!itemsList) return;

        const itemsListHeight = itemsList.clientHeight;

        itemsList.style.paddingBottom = `calc(${itemsListHeight - itemHeight}px - var(--rem)`;
    };
    window.addEventListener('resize', updatePadding);

    useEffect(()=>{
        updatePadding();
    },[]);

    return (
        <MenuContent className='menu'>
            <div className='menu__header'>
                <span>
                    <b>Язык</b>
                </span>
            </div>
            <MenuItemsList
                menuActiveStatus={menuActiveStatus}
            />
        </MenuContent>
    );
};

export default Menu;