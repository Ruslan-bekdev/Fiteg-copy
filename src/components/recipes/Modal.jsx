import React, {useEffect} from 'react';
import styled from "styled-components";

const Overlay = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  background-color: #0e0f19;
  z-index: 1000;
  
  &.active{
    display: inline-block;
  }
`;
const ModalContent = styled.div`
  max-width: 100%;
  height: 90dvh;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fdfdfd;
  text-align: left;
  padding: 5vw 5vw;
  z-index: 2000;
  transition: .2s ease-in-out;
  border-radius: calc(.9875rem + 1.86275vw);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  h4{
    font-size: 5vw;
  }
  h5{
    font-size: 2.5vw;
    margin-block: 2vw 1.7vw;
  }
  li{
    font-size: 2vw;
    margin-left: 3vw;
  }
  .numbered ul{
    list-style-type: decimal;
  }

  @media (max-width: 740px) {
    width: 75vw;
  }
`;

const Modal = ({texts,index,isModalActive,deactivateModal}) => {
    const contentConfig = texts[index].content;
    useEffect(() => {
        document.body.style.overflow = isModalActive?'hidden':'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalActive]);

    return !isModalActive ?'' :(
        <>
            <ModalContent className='container'>
                <h4>
                    {
                        contentConfig.title
                    }
                </h4>
                {
                    Object.entries(contentConfig.lists).map(([key,value],index) =>
                        <div
                            className={index === 1 ?'numbered' :''}
                            key={index}
                        >
                            <h5>{key}</h5>
                            <ul>
                                {
                                    value.map((item,index)=>
                                        <li key={index}>{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </ModalContent>

            <Overlay
                className={isModalActive ?'active' :''}
                onClick={deactivateModal}
            />
        </>
    )
};

export default Modal;