import React from 'react';
import styled from "styled-components";
import logo from "../../assets/footer/logo.svg";
import {Link} from "react-router-dom";

const FooterContent = styled.footer`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.5vw;
  display: flex;
  align-items: end;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 9998;
  
  &>b, &>b *{
    color: #000;
    font-size: 1.8vw;
  }
`;

const Logo = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: start;
  
  img{
    width: 18vw;
    object-fit: contain;
    margin-right: -11vw;
    margin-top: -.8vw;
  }
  b{
    font-size: 1.8vw;
    color: #000;
  }
`;

const Footer = () => {
    return (
        <FooterContent>
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