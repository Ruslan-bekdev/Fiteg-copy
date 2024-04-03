import React, {useEffect, useState} from 'react';
import Menu from "../layout/menu/Menu";
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import ProductPage from "../pages/productPage/ProductPage";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {setDefaultLanguage} from "../store/languageTextSlice";
import {defaultLanguage} from "../configs";

const AppStyled = styled.div`
  position: relative;

  &.active{
    .wrapper{
      width: 720px;
      max-width: 40vw;
      height: 100vh;
      border-radius: calc(.9875rem + 1.86275vw);
      overflow-y: hidden;
      padding-top: 2vw;
      padding-inline: 2vw;
      box-sizing: border-box;

      .content{
        display: none;
      }
      .menu{
        display: inline-block;
      }
      
      @media (max-width: 740px) {
        max-width: 70vw;
        padding-inline: 4vw;
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
    width: 100vw;
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

const AppContent = () => {
    const dispatch = useDispatch();
    const config = useSelector(state => state.languageTextSlice.config);
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
    const saveConfigToLocalStorage = () => {
        localStorage.setItem('config', JSON.stringify(config));
    };
    const getConfigFromLocalStorage = () => {
        const storedConfig = localStorage.getItem('config');
        return storedConfig ?JSON.parse(storedConfig) :defaultLanguage;
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 740);
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };
    useEffect(() => {
        dispatch(setDefaultLanguage(getConfigFromLocalStorage()));
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        config && saveConfigToLocalStorage();
    }, [config]);

    return !config ?<></> :(
        <AppStyled
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
                            <ProductPage
                                windowWidth={windowWidth}
                            />
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
        </AppStyled>
    );
};

export default AppContent;