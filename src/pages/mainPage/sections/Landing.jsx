import React, {useState,useRef,useEffect} from 'react';
import styled from "styled-components";
import {bodyBacks,titleTexts} from "../../../configs/landingBackAndTitles";
import Title from "../../../components/landing/Title";
import BackAnimated from "../../../components/landing/BackAnimated";

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

const Landing = () => {
    const backAnimationSpeed = 2400;
    const titleAnimationSpeed = backAnimationSpeed/50;

    const [title,setTitle] = useState(titleTexts.default);
    const [intervalId, setIntervalId] = useState(null);
    const [isBackActive, setIsBackActive] = useState(false);
    const [bodyBackgroundIndex, setBodyBackgroundIndex] = useState(null);
    const titleIntervalRef = useRef(null);

    const handleNextBodyBack = () => {
        if (bodyBacks.length === 0) return;
        setBodyBackgroundIndex(prevIndex => {
            const newBackIndex = (prevIndex === null || prevIndex === bodyBacks.length - 1)
                ? 0
                : prevIndex + 1;
            return newBackIndex;
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
            <BackAnimated
                bodyBackgroundIndex={bodyBackgroundIndex}
                isBackActive={isBackActive}
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