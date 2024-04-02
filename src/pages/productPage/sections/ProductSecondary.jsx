import React from 'react';
import styled from "styled-components";
import Carousel from "../../../components/product/Carousel";

const Secondary = styled.section`
  width: 98vw;
  max-width: 1740px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2%;
  position: relative;

  @media (min-width: 1230px) {
    width: 85vw;
    margin-inline: auto;
  }
  
  @media (max-width: 740px) {
    width: 90vw;
    gap: 0;
    flex-direction: column;
    min-height: auto;
  }
`;
const Caption = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div{
    width: 55%;
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
  
  @media (max-width: 740px) {
    div{
      width: 50%;
      text-align: right;
      &:nth-of-type(2n){
        text-align: left;
      }
    }
  }
  @media (max-width: 1230px) {
    width: 100%;
    margin-top: 5%;
    div{
      width: 80%;
      h3{
        font-size: 2rem !important;
        margin-bottom: 2rem !important;
        margin-top: 3rem;
      }
    }
  }
`;

const ProductTest = ({product}) => {
    return (
        <Secondary>
            <Carousel
                images={product.images.gallery}
            />
            <Caption>
                {
                    product.features.map((feature,index)=>
                        <div key={index}>
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