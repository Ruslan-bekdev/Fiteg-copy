import React from 'react';
import styled from "styled-components";
import Video from "../../../components/about/Video";

const AboutContent = styled.section`
  width: 100%;
  min-height: auto;
  background-color: #0e0f19;
  border-radius: calc(.9875rem + 1.86275vw);
  padding: 4rem;
  box-sizing: border-box;
  color: #fff;
  z-index: 10;
  margin-bottom: -3%;
  
  h2{
    width: 100%;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  
  .content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    
    .paragraphs{
      width: 40%;
      
      p {
        &:first-child {
          margin-block: 3rem;
          font-size: 1.5rem;
        }
        &:not(:first-child) {
          max-width: 75%;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
      }
    }
  }
    
  @media (max-width: 740px) {
    h2{
      text-align: left;
    }
    
    .content {
      flex-direction: column;

      .paragraphs {
        width: 100%;

        p {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

const About = ({texts}) => {
    const videoLink = 'https://apf.lv/cms/assets/92b27cc2-9e04-43f7-ad11-14e70c279103';

    return (
        <AboutContent>
            <h2>{texts.title}</h2>
            <div className='content'>
                <Video
                    videoLink={videoLink}
                    buttonText={texts.posterButtonText}
                />
                <div className="paragraphs">
                    <p>{texts.caption[0]}</p>
                    <p>{texts.caption[1]}</p>
                    <p>{texts.caption[2]}</p>
                    <p>{texts.caption[3]}</p>
                </div>
            </div>
        </AboutContent>
    );
};

export default About;