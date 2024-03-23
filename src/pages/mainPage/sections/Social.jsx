import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import spongeTexture from "../../../assets/social/spongeTexture.png";
import instagram from "../../../assets/social/instagram.svg";

const SocialContent = styled.section`
  width: 100vw;
  background-color: #fdc757;
  position: relative;
  margin-top: 0;

  .item {
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
    
    img {
      width: 2vw;
      aspect-ratio: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity .3s ease-in-out;
    }

    .svg_text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: 40s svgRotation infinite linear;
      pointer-events: none;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      transition-delay: .3s;
    }
    
    &.showed {
      img{
        opacity: 1;
      }
      .svg_text{
        opacity: 1;
      }
      .smile{
        opacity: 1;
      }
    }
    
    @keyframes svgRotation {
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
    min-height: calc(38 * var(--rem));
  }
`;

const Smile = styled.div`
  width: 50%;
  aspect-ratio: 1;
  position: absolute;
  bottom: 0;
  left: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: .3s ease-in-out;
  transition-delay: .1s;

  @media (hover: hover) {
    .item:hover &{
      transform: translate(-5%) rotate(5deg) scale(1.1);
    }
  }

  .smile {
    width: 40%;
    height: 12%;
    position: relative;
    transform: rotate(20deg) scale(3);
    opacity: 0;
    transition: opacity .5s ease-in-out;

    &__main {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;

      & > div {
        width: 100%;
        height: 300%;
        border-radius: 50%;
        background-color: transparent;
        border: .2vw #000 solid;
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
      }
    }

    &__side_left, .smile__side_right {
      width: 1vw;
      aspect-ratio: 5;
      background-color: #000;
      border-radius: 2vw;
      position: absolute;
      top: 0;
      box-sizing: border-box;
    }

    &__side_left {
      transform: translate(-8%, -50%) rotate(-24deg);
    }

    &__side_right {
      right: 0;
      transform: translate(8%, -50%) rotate(16deg);
    }
  }
`;

const Social = ({windowWidth, windowHeight}) => {
    const [isWindowHorizontal,setIsWindowHorizontal] = useState(windowWidth > windowHeight);
    const [itemAnimStatus,setItemAnimStatus] = useState(false);

    const handleScrollItemAnim = () => {
        const bodyHeight = document.body.clientHeight;
        const item = document.querySelector('.item');
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
                className={`item ${itemAnimStatus ?'showed' :''}`}
                style={{
                    backgroundImage: `url(${spongeTexture})`,
                    width: `45${isWindowHorizontal ?'vw' :'dvh'}`,
                    maxWidth: `45${isWindowHorizontal ?'dvh' :'vw'}`
                }}
                onClick={()=>alert('Имитация ссылки на Инстаграм')}
            >
                <img
                    style={{width: '15%'}}
                    src={instagram} alt="instagram icon"
                />
                <Smile>
                    <div className="smile">
                        <div className='smile__main'>
                            <div
                                style={{
                                    border: `.2${isWindowHorizontal ?'dvh' :'vw'} #000 solid`,
                                }}
                            />
                        </div>
                        <div
                            style={{width: `1${isWindowHorizontal ?'dvh' :'vw'}`}}
                            className='smile__side_left'
                        />
                        <div
                            style={{width: `1${isWindowHorizontal ?'dvh' :'vw'}`}}
                            className='smile__side_right'
                        />
                    </div>
                </Smile>

                <svg
                    style={{
                        width: `68${isWindowHorizontal ?'vw' :'dvh'}`,
                        height: `68${isWindowHorizontal ?'dvh' :'vw'}`,
                        maxWidth: `100${isWindowHorizontal ?'dvh' :'vw'}`,
                        maxHeight: `100${isWindowHorizontal ?'vw' :'dvh'}`
                    }}
                    className='svg_text'
                    viewBox="0 0 100 100"
                    width="100" height="100"
                >
                    <defs>
                        <path id="circle"
                              d="
                                        M 50, 50
                                        m -37, 0
                                        a 37,37 0 1,1 74,0
                                        a 37,37 0 1,1 -74,0
                                    "
                        />
                    </defs>
                    <text
                        style={{
                            fontSize: '.2rem',
                            letterSpacing: '.11rem',
                        }}
                    >
                        <textPath href="#circle">
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                            Хорошего дня!
                        </textPath>
                    </text>
                </svg>
            </div>
        </SocialContent>
    );
};

export default Social;