import React from 'react';
import Burger from "./Burger";
import styled from "styled-components";
import Logo from "./Logo";
import {useSelector} from "react-redux";

const HeaderContent = styled.header`
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 2vw;
  left: 0;
  padding-inline: 2vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9998;
  pointer-events: none;
`;

const Header = ({menuActiveStatus,activateMenu,deactivateMenu,windowHeight}) => {
    const {isBackActive} = useSelector(state => state.landingSlice);

    return (
        <HeaderContent>
            <Logo
                menuActiveStatus={menuActiveStatus}
                windowHeight={windowHeight}
                isBackActive={isBackActive}
            />
            <Burger
                menuActiveStatus={menuActiveStatus}
                activateMenu={activateMenu}
                deactivateMenu={deactivateMenu}
                isBackActive={isBackActive}
            />
        </HeaderContent>
    );
};

export default Header;