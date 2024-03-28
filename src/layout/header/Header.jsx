import React from 'react';
import Burger from "./Burger";
import styled from "styled-components";
import Logo from "./Logo";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const HeaderContent = styled.header`
  width: 100vw;
  height: 6vh;
  position: fixed;
  top: 2vw;
  left: 0;
  padding-inline: 2.5vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9998;
  pointer-events: none;
`;

const Header = ({menuActiveStatus,activateMenu,deactivateMenu}) => {
    const {isBackActive} = useSelector(state => state.landingSlice);
    const location = useLocation();
    const isMainPage = location.pathname === '';

    return (
        <HeaderContent>
            <Logo
                menuActiveStatus={menuActiveStatus}
                isBackActive={isBackActive}
                isMainPage={isMainPage}
            />
            <Burger
                menuActiveStatus={menuActiveStatus}
                activateMenu={activateMenu}
                deactivateMenu={deactivateMenu}
                isBackActive={isBackActive}
                isMainPage={isMainPage}
            />
        </HeaderContent>
    );
};

export default Header;