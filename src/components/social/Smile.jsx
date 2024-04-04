import React from 'react';
import styled from "styled-components";

const SmileContent = styled.div`
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
      border-radius: calc(.9875rem + 1.86275vw);
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

const Smile = ({isWindowHorizontal}) => {
    return (
        <SmileContent className={'lol'}>
            <div className="smile">
                <div className='smile__main'>
                    <div
                        style={{
                            border: `.2${isWindowHorizontal ?'vh' :'vw'} #000 solid`,
                        }}
                    />
                </div>
                <div
                    style={{width: `1${isWindowHorizontal ?'vh' :'vw'}`}}
                    className='smile__side_left'
                />
                <div
                    style={{width: `1${isWindowHorizontal ?'vh' :'vw'}`}}
                    className='smile__side_right'
                />
            </div>
        </SmileContent>
    );
};

export default Smile;