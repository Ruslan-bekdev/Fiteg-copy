import React, {useState} from "react";
import './App.css';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";

import Menu from "./layout/menu/Menu";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import MainPage from "./pages/mainPage/MainPage";
import ProductPage from "./pages/productPage/ProductPage";

const AppContent = styled.div`
  position: relative;

  &.active{
    .wrapper{
      width: 720px;
      max-width: 70vw;
      height: 100vh;
      border-radius: 2vw;
      overflow-y: hidden;
      padding-top: 2vw;
      padding-inline: 2vw;
      box-sizing: border-box;

      .content{
        display: none;
      }
      .menu{
        display: inline;
      }
    }
    .footer{display: none}
    .main_overlay{
      background-color: #0e0f19;
    }
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100dvh;
  position: relative;
  z-index: 1;
  background-color: #fdfdfd;
  transition: width .2s ease-in-out;

  &>.menu{
    display: none;
  }

  &>.content {
    position: relative;
    z-index: 2;
    display: inline-block;
  }
`;
const Overlay = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fdfdfd;
  transition: background-color 0.2s ease-in-out;
`;

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 740);
    const [menuActiveStatus, setMenuActiveStatus] = useState(false);

    const activateMenu = () => {
        setMenuActiveStatus(true);
    };
    const deactivateMenu = () => {
        setMenuActiveStatus(false);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 740);
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return(
        <AppContent
            className={menuActiveStatus ?'active' :''}
        >
            <Wrapper className='wrapper'>
                <Menu
                    menuActiveStatus={menuActiveStatus}
                    deactivateMenu={deactivateMenu}
                />
                <div className='content'>
                        <Routes>
                            <Route path='/' element={
                                <MainPage
                                    isMobile={isMobile}
                                    windowWidth={windowWidth}
                                    windowHeight={windowHeight}
                                />
                            }/>
                            <Route path='/product/:id' element={
                                <ProductPage/>
                            }/>
                        </Routes>
                    </div>
            </Wrapper>
            <Header
                menuActiveStatus={menuActiveStatus}
                activateMenu={activateMenu}
                deactivateMenu={deactivateMenu}
            />
            <Footer/>
            <Overlay
                className='main_overlay'
                onClick={deactivateMenu}
            />
        </AppContent>
    );
};

export default App;