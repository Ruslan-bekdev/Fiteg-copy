import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import styled from "styled-components";
import Burger from "./components/menu/Burger";
import React, {useState} from "react";
import Menu from "./components/menu/Menu";
import {Route, Routes} from "react-router-dom";

const AppContent = styled.div`
    
`;
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100dvh;
  position: relative;
  z-index: 888;
  background-color: #fdfdfd;
  transition: width .2s ease-in-out;
  &.active{
    width: 720px;
    max-width: 50vw;
    border-radius: 48px;
    overflow-y: hidden;
  }

  .content {
    position: relative;
    z-index: 222;
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
  &.dark{
    background-color: #0e0f19;
  }
`;

const App = () => {
    const [menuActiveStatus, setMenuActiveStatus] = useState(false);

    const activateMenu = () => {
        setMenuActiveStatus(true);
    };
    const deactivateMenu = () => {
        setMenuActiveStatus(false);
    };

    return(
        <AppContent>
            <Burger
                menuActiveStatus={menuActiveStatus}
                activateMenu={activateMenu}
                deactivateMenu={deactivateMenu}
            />
            <Overlay className={menuActiveStatus ?'dark' :''} onClick={deactivateMenu}/>
            <Wrapper className={menuActiveStatus ?'active' :''}>
                {menuActiveStatus
                    ?<Menu menuActiveStatus={menuActiveStatus}/>
                    :<div className='content'>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                        </Routes>
                    </div>
                }
            </Wrapper>
        </AppContent>
    );
};

export default App;