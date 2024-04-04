import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import spongeTexture from "../../../assets/social/spongeTexture.png";
import instagram from "../../../assets/social/instagram.svg";
import Smile from "../../../components/social/Smile";

const SocialContent = styled.section`
  width: 100vw;
  max-height: 100vh;
  background-color: #fdc757;
  position: relative;
  margin-top: 0;

  .social__item {
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: pointer;

    @media (hover: hover) {
      &:hover .lol{
        transform: translate(-5%) rotate(5deg) scale(1.1);
      }
      &:hover>img{
        transform: translate(-50%, -50%) scale(1.3);
      }
    }
    
    img {
      width: 2vw;
      aspect-ratio: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: .3s ease-in-out;
    }
    
    &.showed {
      img{
        opacity: 1;
      }
      .roundedText{
        opacity: 1;
      }
      .smile{
        opacity: 1;
      }
    }
    
    @keyframes textRotation {
      0%{
        transform: translate(-50%, -50%) rotate(0);
      }
      100%{
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
  
  @media (max-width: 740px) and (min-height: 740px){
    min-height: calc(60 * var(--rem));
  }
  @media (min-width: 740px) and (max-width: 1230px){
    height: calc(38 * var(--rem));
  }
`;

const Social = ({windowWidth, windowHeight}) => {
    const [isWindowHorizontal,setIsWindowHorizontal] = useState(windowWidth > windowHeight);
    const [itemAnimStatus,setItemAnimStatus] = useState(false);

    const handleScrollItemAnim = () => {
        const bodyHeight = document.body.clientHeight;
        const item = document.querySelector('.social__item');
        const windowPositionY = window.scrollY;

        if (!item) return;

        if (windowPositionY < bodyHeight-windowHeight*1.3) {
            return setItemAnimStatus(false);
        }

        setItemAnimStatus(true);
    };
    window.addEventListener('scroll',handleScrollItemAnim);

    useEffect(()=>{
        setIsWindowHorizontal(windowWidth > windowHeight)
    },[windowWidth,windowHeight])

    return (
        <SocialContent>
            <div
                className={`social__item ${itemAnimStatus ?'showed' :''}`}
                style={{
                    backgroundImage: `url(${spongeTexture})`,
                    width: `45${isWindowHorizontal ?'vw' :'vh'}`,
                    maxWidth: `45${isWindowHorizontal ?'vh' :'vw'}`
                }}
                onClick={()=>window.open('https://www.instagram.com/', '_blank')}
            >
                <img
                    style={{width: '15%'}}
                    src={instagram} alt="instagram icon"
                />
                <Smile
                    isWindowHorizontal={isWindowHorizontal}
                />
            </div>
        </SocialContent>
    );
};

export default Social;