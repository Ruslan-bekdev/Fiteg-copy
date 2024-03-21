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
  padding-top: 2vw;
  padding-inline: 2vw;
  text-align: center;
  box-sizing: border-box;
  overflow-y: hidden;

  .menu__header {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
        const itemsListHeight = itemsList.clientHeight;
        const itemHeight = document.querySelector('.item').clientHeight;

        if (!itemsList) return;

        itemsList.style.paddingBottom = `calc(${itemsListHeight - itemHeight}px - var(--rem)`;
    };
    window.addEventListener('resize', updatePadding);

    useEffect(()=>{
        updatePadding();
    },[]);

    return (
        <MenuContent>
            <div className='menu__header'>
                <h4>лого</h4>
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