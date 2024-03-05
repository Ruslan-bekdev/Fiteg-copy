import React from 'react';
import styled from "styled-components";
import Landing from "./sections/Landing";
import Catalog from "./sections/Catalog";
import Highlights from "./sections/Highlights";
import Recipes from "./sections/Recipes";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
    return (
        <Main>
            <Landing/>
            <Catalog/>
            <Highlights/>
            <Recipes/>
        </Main>
    );
};

export default MainPage;