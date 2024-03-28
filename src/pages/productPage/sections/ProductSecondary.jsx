import React from 'react';
import styled from "styled-components";

const Secondary = styled.div`
  width: 100%;
  max-width: 1740px;
  padding-inline: 2vw;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2%;
  margin-top: 10rem;

  &>div{
    box-sizing: border-box;
  }

  @media (min-width: 1230px) {
    width: 85vw;
    margin-inline: auto;
  }
`;
const Caption = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div{
    width: 45%;
    text-align: left;
    h3{
      font-size: 2rem;
      margin-bottom: .4rem;
    }

    &:nth-child(2n){
      margin-left: 100%;
      transform: translateX(-100%);
    }
  }
`;
const Carousel = styled.div`
  flex-grow: 1;

  &>div{
    width: 100%;
    max-height: 80%;
    aspect-ratio: 3/4;
    position: sticky;
    top: 2rem;
    border-radius: calc(.9875rem + 1.86275vw);
    background-image: url("https://fiteg2.lv/_ipx/q_95&s_480x663/images/gallery-02.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const ProductTest = ({product}) => {
    return (
        <Secondary>
            <Carousel>
                <div/>
            </Carousel>
            <Caption>
                {
                    product.features.map((feature)=>
                        <div>
                            <h3>{feature.title}</h3>
                            <p>{feature.caption}</p>
                        </div>
                    )
                }
            </Caption>
        </Secondary>
    );
};

export default ProductTest;