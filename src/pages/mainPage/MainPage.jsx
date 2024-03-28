import React from 'react';
import styled from "styled-components";
import Landing from "./sections/Landing";
import Catalog from "./sections/Catalog";
import Highlights from "./sections/Highlights";
import Recipes from "./sections/Recipes";
import About from "./sections/About";
import Social from "./sections/Social";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const MainPage = ({isMobile,windowWidth,windowHeight}) => {
    return (
        <Main>
            <Landing windowHeight={windowHeight}/>
            <Catalog isMobile={isMobile} windowHeight={windowHeight}/>
            <Highlights windowHeight={windowHeight}/>
            <Recipes windowHeight={windowHeight}/>
            <About/>
            <Social windowWidth={windowWidth} windowHeight={windowHeight}/>
        </Main>
    );
};

export default MainPage;