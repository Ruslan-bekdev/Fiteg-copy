import React, {useState,useRef,useEffect} from 'react';
import styled from "styled-components";
import title1 from "../../../assets/landing/title1.png"
import title2 from "../../../assets/landing/title2.png"
import {bodyBacks,titleTexts} from "../../../configs/landingBackAndTitles";

const LandingContent = styled.section`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease-in-out;
  overflow: hidden;
`;
const Back = styled.div`
  width: 101vw;
  height: 101dvh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  &.back_active{
    animation: zoom 2s cubic-bezier(0.4, 0, 0.4, 1);
    z-index: 500;
    transition: .2s;
  }
  
  @keyframes zoom {
    0% {
      width: 110vw;
      height: 110dvh;
    }
    100% {
      width: 101vw;
      height: 101dvh;
    }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 600;

  h2 {
    font-size: 72px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #0e0f19;
    opacity: 0;
    animation: titleMove .5s ease-in-out;

    @keyframes titleMove {
      0% {
        opacity: 0;
        transform: translateX(-50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    b{
      margin-right: 16px;
    }
    img {
      height: 72px;
      object-fit: contain;
    }
    .startButton{
      width: 56px;
      aspect-ratio: 1;
      border-radius: 50%;
      font-size: 50%;
      text-align: center;
      line-height: 56px;
      cursor: pointer;
      &_passive{
        border: 1px solid #000;
      }
      &_active{
        animation: spin 10s linear infinite;
        color: gold;
        font-size: 100%;
      }

      @keyframes spin {
        0%{
          transform: rotate(0);
        }
        50%{
          transform: rotate(180deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
    }
  }

  &.title_light{
    h2{
      color: #fff;
    }
  }
`;

const RenderAnimatedBack = ({bodyBackgroundIndex,isBackActive}) => {
  return(
      <div>
          {
              bodyBacks.map((item,index)=>
                  <Back
                      className={`${bodyBackgroundIndex === index
                          ?'back_active'
                          :'back_passive'}`
                      }
                      style={{
                          backgroundImage: `url(${item})`,
                          opacity: `${isBackActive ? 1 : 0}`
                      }}
                      key={index}
                  />
              )
          }
      </div>
  )
}

const Landing = () => {
    const backAnimationSpeed = 2400;
    const titleAnimationSpeed = backAnimationSpeed/50;

    const [title,setTitle] = useState(titleTexts.default);
    const [intervalId, setIntervalId] = useState(null);
    const [isBackActive, setIsBackActive] = useState(false);
    const [bodyBackgroundIndex, setBodyBackgroundIndex] = useState(null);
    const titleIntervalRef = useRef(null);

    const handleNextBodyBack = () => {
        setBodyBackgroundIndex(prevIndex => {
            if (prevIndex === null || prevIndex === bodyBacks.length - 1)
                return 0
            else
                return prevIndex + 1
        });
    };
    const startTitleAnimation = () => {
        setTitle(titleTexts.default);
        clearInterval(titleIntervalRef.current);
        if (bodyBackgroundIndex === null) return;

        setTitle('');
        titleIntervalRef.current = setInterval(() => {
            setTitle(prevTitle => {
                const nextChar = titleTexts.variants[bodyBackgroundIndex][prevTitle.length];
                return prevTitle + nextChar;
            });
        }, titleAnimationSpeed);
    };
    const startInterval = () => {
        if (!intervalId) {
            setIsBackActive(true);
            handleNextBodyBack();
            const id = setInterval(() => {
                handleNextBodyBack();
            }, backAnimationSpeed);
            setIntervalId(id);
            startTitleAnimation();
        }
    };
    const stopInterval = () => {
        if (intervalId) {
            setIsBackActive(false);
            clearInterval(intervalId);
            clearInterval(titleIntervalRef.current)
            setIntervalId(null);
            setTitle(titleTexts.default);
        }
    };
    const autoStopAnimation = () => {
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;
        if (windowPositionY > windowHeight)
            stopInterval();
    };

    useEffect(()=>{
        startTitleAnimation();
    },[bodyBackgroundIndex]);
    useEffect(()=>{
        if (title === titleTexts.variants[bodyBackgroundIndex]) {
            clearInterval(titleIntervalRef.current);
        }
    },[title]);
    useEffect(()=>{
        const backs = document.querySelectorAll('.back_passive')

        if (!backs) return;

        backs.forEach((back,index)=>{
            back.style.zIndex = 10 * index;
        });

        const titles = document.querySelectorAll('h2')
        const timing = .1;

        if (!titles) return;

        titles.forEach((title,index)=>{
            title.style.animationDelay = `${index * timing}s`;
            setTimeout(()=>{title.style.opacity = '1'},index * timing * 1000)
        });
    },[]);

    window.addEventListener('scroll',autoStopAnimation);

    return (
        <LandingContent>
            <RenderAnimatedBack
                bodyBackgroundIndex={backAnimationSpeed}
                isBackActive={isBackActive}
            />
            <Title className={`container ${isBackActive ?'title_light' :''}`}>
                <h2>
                    <b>Cage-Free Egg</b>
                    <img src={title1} alt=""/>
                </h2>
                <h2>
                    <b>Protein Smoothies</b>
                    <img src={title2} alt=""/>
                </h2>
                <h2>
                    <b>for</b>
                    {isBackActive
                        ?<span
                            onClick={stopInterval}
                            className='startButton startButton_active'
                        >
                            &#9733;
                        </span>
                        :<span
                            className='startButton startButton_passive'
                            onClick={startInterval}
                        >
                            &#9654;
                        </span>
                    }
                </h2>
                <h2>
                    <b>/{title}</b>
                </h2>
            </Title>
        </LandingContent>
    );
};

export default Landing;