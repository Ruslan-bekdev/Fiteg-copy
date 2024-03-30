import React from 'react';
import poster from "../../assets/aboutUs/video-poster.png";
import styled from "styled-components";

const VideoContent = styled.div`
  flex-grow: 1;
  height: fit-content;
  position: sticky;
  top: 64px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: end;

  &::after{
    content: '▼';
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-80%) rotate(-90deg);
    z-index: 100;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    max-height: 40vh;
    object-fit: contain;
    border-radius: calc(.9875rem + 1.86275vw);
    transition: .2s ease-in-out;

    @media (hover: hover) {
      &:hover{
        scale: 1.02;
      }
    }
  }

  .videoLink {
    width: fit-content;
    padding: .75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(.9875rem + 1.86275vw);
    background-color: #272730;
    margin-top: .75rem;
    cursor: pointer;
    text-decoration: none;
    transition: .2s ease-in-out;
    margin-inline: auto;

    b {
      font-size: 1rem;
      display: inline-block;
      color: #fff;
      transition: .2s ease-in-out;
    }

    @media (hover: hover) {
      &:hover {
        background-color: #ffc857;
        b{
          color: #0e0f19;
        }
      }
    }
  }

  @media (max-width: 740px) {
    width: fit-content;
    top: 0;
    left: 100%;
    
    img{
      max-height: 40dvh;
    }
  }
`;

const Video = ({videoLink}) => {
    return (
        <VideoContent>
            <img
                src={poster} alt=""
                onClick={()=>window.open(videoLink, '_blank')}
            />
            <a
                href={videoLink}
                target='_blank'
                className='videoLink'
            >
                <b>
                    Watch video
                </b>
            </a>
        </VideoContent>
    );
};

export default Video;