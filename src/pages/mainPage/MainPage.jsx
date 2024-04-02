import React from 'react';
import styled from "styled-components";
import Landing from "./sections/Landing";
import Catalog from "./sections/Catalog";
import Highlights from "./sections/Highlights";
import Recipes from "./sections/Recipes";
import About from "./sections/About";
import Social from "./sections/Social";
import {useSelector} from "react-redux";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const MainPage = ({isMobile,windowWidth,windowHeight}) => {
    const textConfig = useSelector(state => state.languageTextSlice.config.mainPage);

    return (
        <Main>
            <Landing
                windowHeight={windowHeight}
                texts={textConfig.titleAndBack}
            />
            <Catalog
                isMobile={isMobile}
                windowHeight={windowHeight}
                texts={textConfig}
            />
            <Highlights
                windowHeight={windowHeight}
                texts={textConfig.highlights}
            />
            <Recipes
                windowHeight={windowHeight}
                texts={textConfig.recipes}
            />
            <About
                texts={textConfig.about}
            />
            <Social
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                roundedText={textConfig.socialRoundedText}
            />
        </Main>
    );
};

export default MainPage;