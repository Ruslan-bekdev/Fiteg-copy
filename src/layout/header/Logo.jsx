import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import styled from "styled-components";

const LogoImg = styled.img`
  height: 2rem;
  max-height: 6vw;
  object-fit: contain;
  z-index: 9999;
  pointer-events: auto;
  transition: .2s ease-in-out;
  
  &.light{
    filter: invert(1);
  }
  
  &.hidden{
    opacity: 0;
  }
`;

const Logo = ({isBackActive, menuActiveStatus, isMainPage}) => {
    const [logoShowedStatus,setLogoShowedStatus] = useState(true);

    const handleShowOrHideLogo = () => {
      const positionY = window.scrollY;

      (positionY < 10)
        ?setLogoShowedStatus(true)
        :setLogoShowedStatus(false);
    };

    window.addEventListener('scroll',handleShowOrHideLogo)

    return (
        <LogoImg
            src={logo} alt="fiteg logo"
            className={`
                ${logoShowedStatus ?'' :'hidden'}
                ${isBackActive && !menuActiveStatus && isMainPage ?'light' :''}
            `}
        />
    );
};

export default Logo;