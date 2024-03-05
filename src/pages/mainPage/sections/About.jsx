import React from 'react';
import styled from "styled-components";
import poster from "../../../assets/about-us-video-poster.png";
import {Link} from "react-router-dom";

const AboutContent = styled.section`
  width: 100%;
  background-color: #0e0f19;
  border-radius: 2.5vw;
  padding: 64px;
  box-sizing: border-box;
  color: #fff;
  
  h2{
    width: 100%;
    text-align: center;
    font-size: 64px;
    margin-bottom: 48px;
  }
  
  .content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    .paragraphs{
      width: 40%;
      
      p{
        margin-bottom: 32px;
        font-size: 42px;
      }
      
      p:not(:first-child){
        max-width: 75%;
        margin-block: 16px 0;
        font-size: 32px;
      }
    }
  }
`;

const VideoPoster = styled.div`
  height: fit-content;
  flex-grow: 1;
  position: sticky;
  top: 64px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: end;

  &::after{
    content: '▼';
    font-size: 124px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-75%) rotate(-90deg);
    z-index: 100;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 2.5vw;
    transition: .2s ease-in-out;

    @media (hover: hover) {
      &:hover{
        scale: 1.02;
      }
    }
  }

  .videoLink {
    width: fit-content;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.5vw;
    background-color: #272730;
    margin-top: 16px;
    cursor: pointer;
    text-decoration: none;
    transition: .2s ease-in-out;

    b {
      font-size: 24px;
      display: inline-block;
      position: relative;
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
`;

const About = () => {
    const videoLink = 'https://apf.lv/cms/assets/92b27cc2-9e04-43f7-ad11-14e70c279103';

    return (
        <AboutContent>
            <h2>About us</h2>
            <div className='content'>
                <VideoPoster>
                    <img src={poster} alt=""/>
                    <Link
                        to={videoLink}
                        target='_blank'
                        className='videoLink'
                    >
                        <b>
                            Watch video
                        </b>
                    </Link>
                </VideoPoster>
                <div className="paragraphs">
                    <p>
                        At APF, we blend over 60 years of poultry farming heritage with modern innovation, standing proudly as one of the top three poultry farms in the Baltics.
                        Our story began in the heart of Latvia's pristine countryside, where the fresh air and pure water create the perfect environment for high-quality egg production.
                        We've grown from a small-scale operation into a visionary leader in sustainable and ethical farming practices.
                    </p>
                    <p>
                        Our ethos is simple yet profound: we see every challenge as an opportunity to innovate.
                        By embracing circular economy principles, we are constantly finding new ways to add value to our eggs and their byproducts.
                        This approach has not only elevated our standards but also fostered a culture of respect and collaboration within our team and local community.
                    </p>
                    <p>
                        With state-of-the-art facilities, including a modern egg sorting center capable of processing 90,000 eggs per hour, we demonstrate our commitment to efficiency and quality.
                        Annually producing up to 115 million eggs, APF is a testament to Latvia's capabilities in advanced and sustainable agriculture.
                    </p>
                    <p>
                        Our vision extends far beyond traditional poultry farming.
                        We are on a transformative journey to become a leading poultry agroholding, integrating principles of the circular economy to set new industry standards.
                        At APF, we don't just produce eggs;
                        we're cultivating a legacy of innovation and sustainability that feeds the body, nurtures the soul, and protects our planet.
                        Join us as we redefine the future of poultry farming, one egg at a time.
                    </p>
                </div>
            </div>
        </AboutContent>
    );
};

export default About;