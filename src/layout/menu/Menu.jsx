import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import MenuItemsList from "./MenuItemsList";

const MenuContent = styled.div`
  *{
    color: #0e0f19;
  }
  height: 100dvh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  overflow-y: hidden;

  .menu__header {
    height: 6vh;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: end;

    span {
      padding: .6rem 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: calc(.9875rem + 1.86275vw);
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

const Menu = ({deactivateMenu,menuActiveStatus}) => {
    const [paddingSetStatus, setPaddingSetStatus] = useState(false);

    const updatePadding = () => {
        const itemsList = document.querySelector('.menu_showed');
        const item = document.querySelector('.menu__item');

        if (!itemsList || !item) return;

        const itemsListHeight = itemsList.clientHeight;
        const itemHeight = item.clientHeight;

        itemsList.style.paddingBottom = `calc(${itemsListHeight - itemHeight}px - var(--rem)`;
        setPaddingSetStatus(true);
    };

    useEffect(() => {
        let interval;

        if (!paddingSetStatus && menuActiveStatus) {
            interval = setInterval(() => {
                updatePadding();
            }, 100);
        }

        window.addEventListener('resize', updatePadding);
        window.addEventListener('mousemove', updatePadding);
        window.addEventListener('click', updatePadding);

        return () => {
            window.removeEventListener('resize', updatePadding);
            window.removeEventListener('mousemove', updatePadding);
            window.removeEventListener('click', updatePadding);
            clearInterval(interval);
        };
    }, [paddingSetStatus,menuActiveStatus]);

    return (
        <MenuContent className='menu'>
            <div className='menu__header'>
                <span>
                    <b>Язык</b>
                </span>
            </div>
            <MenuItemsList
                menuActiveStatus={menuActiveStatus}
                deactivateMenu={deactivateMenu}
            />
        </MenuContent>
    );
};

export default Menu;