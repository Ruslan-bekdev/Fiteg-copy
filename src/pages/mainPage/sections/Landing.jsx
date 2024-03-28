import React, {useState,useRef,useEffect} from 'react';
import styled from "styled-components";
import config from "../../../configs/landingBackAndTitles";
import Title from "../../../components/landing/Title";
import BackAnimated from "../../../components/landing/BackAnimated";
import {useDispatch, useSelector} from "react-redux";
import {setBackActiveStatus} from "../../../store/landingSlice";

const LandingContent = styled.section`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease-in-out;
  overflow: hidden;
  margin-top: 0;
`;

const Landing = ({windowHeight}) => {
    const dispatch = useDispatch();
    const {isBackActive} = useSelector(state => state.landingSlice);

    const backAnimationSpeed = 2400;
    const titleAnimationSpeed = backAnimationSpeed/50;

    const [title,setTitle] = useState(config.default);
    const [intervalId, setIntervalId] = useState(null);
    const [titleAndBackIndex, setTitleAndBackIndex] = useState(null);
    const titleIntervalRef = useRef(null);

    const handleNextBodyBack = () => {
        setTitleAndBackIndex(prevIndex => {
            const newBackIndex = (prevIndex === null || prevIndex === config.variants.length - 1)
                ? 0
                : prevIndex + 1;
            return newBackIndex;
        });
    };
    const startTitleAnimation = () => {
        setTitle(config.default);
        clearInterval(titleIntervalRef.current);
        if (titleAndBackIndex === null) return;

        setTitle('');
        titleIntervalRef.current = setInterval(() => {
            setTitle(prevTitle => {
                const nextChar = config.variants[titleAndBackIndex].title[prevTitle.length];
                return prevTitle + nextChar;
            });
        }, titleAnimationSpeed);
    };
    const startInterval = () => {
        if (!intervalId) {
            dispatch(setBackActiveStatus(true));
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
            dispatch(setBackActiveStatus(false));
            clearInterval(intervalId);
            clearInterval(titleIntervalRef.current)
            setIntervalId(null);
            setTitle(config.default);
        }
    };
    const autoStopAnimation = () => {
        const windowPositionY = window.scrollY;
        if (windowPositionY > windowHeight)
            stopInterval();
    };

    useEffect(()=>{
        startTitleAnimation();
    },[titleAndBackIndex]);
    useEffect(()=>{
        if (title === config.variants[titleAndBackIndex || 0].title) {
            clearInterval(titleIntervalRef.current);
        }
    },[title]);
    useEffect(()=>{
        const titles = document.querySelectorAll('.landing__title h2');
        const timing = .1;

        if (!titles) return;

        titles.forEach((title,index)=>{
            title.style.animationDelay = `${index * timing}s`;
            setTimeout(()=>{title.style.opacity = '1'},index * timing * 1000)
        });

        return () => {
            dispatch(setBackActiveStatus(false));
        };
    },[]);
    window.addEventListener('scroll',autoStopAnimation);

    return (
        <LandingContent>
            <BackAnimated
                titleAndBackIndex={titleAndBackIndex}
                isBackActive={isBackActive}
                config={config}
            />
            <Title
                title={title}
                isBackActive={isBackActive}
                startInterval={startInterval}
                stopInterval={stopInterval}
            />
        </LandingContent>
    );
};

export default Landing;