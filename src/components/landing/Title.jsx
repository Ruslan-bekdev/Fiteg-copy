import React from 'react';
import styled from "styled-components";
import title1 from "../../assets/landing/title1.png"
import title2 from "../../assets/landing/title2.png"

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 600;

  h2 {
    &:nth-of-type(2){
      display: flex;
      flex-direction: column;
    }
    font-size: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #0e0f19;
    opacity: 0;
    transition: color .2s ease-in-out;

    b{
      margin-right: 1rem;
    }
    img {
      height: 3rem;
      object-fit: contain;
    }
    .startButton{
      width: 3.5rem;
      aspect-ratio: 1;
      border-radius: 50%;
      font-size: 50%;
      text-align: center;
      line-height: 3.5rem;
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
  
  @media (max-width: 740px) {
    h2{
      &:last-child{
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const Title = ({title,texts,isBackActive,startInterval,stopInterval}) => {
    return (
        <TitleContent className={`container landing__title ${isBackActive ?'title_light' :''}`}>
            <h2>
                <b>{texts.otherTitles[0]}</b>
                <img src={title1} alt=""/>
            </h2>
            <h2>
                <b>{texts.otherTitles[1]}</b>
                <img src={title2} alt=""/>
            </h2>
            <h2>
                <b>{texts.otherTitles[2]}</b>
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
        </TitleContent>
    );
};

export default Title;