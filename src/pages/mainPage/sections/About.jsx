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

const About = () => {
    const videoLink = 'https://apf.lv/cms/assets/92b27cc2-9e04-43f7-ad11-14e70c279103';

    return (
        <AboutContent>
            <h2>About us</h2>
            <div className='content'>
                <Video
                    videoLink={videoLink}
                />
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