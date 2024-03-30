import React from 'react';
import styled from "styled-components";
import Carousel from "../../../components/product/Carousel";

const Secondary = styled.section`
  width: 100%;
  max-width: 1740px;
  min-height: auto;
  padding-inline: 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 2%;
  position: relative;

  @media (min-width: 1230px) {
    width: 85vw;
    margin-inline: auto;
  }

  @media (max-width: 740px) {
    gap: 0;
    flex-direction: column;
  }
`;
const Caption = styled.div`
  width: 60%;
  height: min-content;
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

  @media (max-width: 740px) {
    width: 100%;
    margin-top: 5%;
    div{
      width: 70%;
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