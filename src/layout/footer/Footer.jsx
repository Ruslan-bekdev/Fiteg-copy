import React from 'react';
import styled from "styled-components";
import logo from "../../assets/footer/logo.svg";
import {Link} from "react-router-dom";

const FooterContent = styled.footer`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.5vw 2vw;
  display: flex;
  align-items: end;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 9998;
  transition: .2s ease-in-out;
  
  &>b, &>b *{
    color: #000;
    font-size: 1.2vw;
  }

  @media (max-width: 740px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  
  img{
    width: 10vw;
    object-fit: contain;
    margin-right: -6vw;
    margin-top: -.8vw;
  }
  b{
    font-size: 1.2vw;
    color: #000;
  }

  @media (max-width: 740px) {
    img{
      width: 20vw;
      margin-right: -12vw;
      margin-top: -.8vw;
    }
    b{
      font-size: 2.2vw;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContent className='footer'>
            <Logo>
                <img
                    src={logo}
                    alt='logo image'
                />
                <b>
                    APF <br/>
                    Holdings
                </b>
            </Logo>
            <b>
                Website by <Link to='#'>Ruslan</Link>
            </b>
        </FooterContent>
    );
};

export default Footer;