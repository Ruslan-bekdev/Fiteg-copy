import React from 'react';
import styled from "styled-components";
import Accordion from "../../../components/product/Accordion";

const Main = styled.div`
  width: 100%;
  max-width: 1920px;
  margin-inline: auto;
  padding-inline: 2vw;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  
  &>div{
    width: 50%;
    box-sizing: border-box;
    &:first-child{
      padding-right: 12%;
    }
  }
  
  h1{
    font-size: 4rem;
  }

  .nutritionalInfo {
    margin-block: 2rem;
    width: fit-content;
    aspect-ratio: 5;
    display: flex;
    align-items: center;
    background-color: #0e0f19;
    border-radius: 1rem;
    color: #fdfdfd;

    hr{
      border: .1vw #fdfdfd solid;
      height: 30%;
    }

    &__content {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: .2rem 1rem;

      h3, span {
        line-height: 50%;
        font-weight: bold;
      }
      h3 {
        font-size: 1.8rem;
        span{
          font-size: .8rem;
          font-weight: bold;
        }
      }
      span {
        font-size: .6rem;
      }
    }
  }
`;
const Image = styled.div`
  height: fit-content;
  padding: 5%;
  box-sizing: border-box;
  border-radius: calc(.9875rem + 1.86275vw);
  
  img{
    width: 100%;
    object-fit: contain;
  }
`;

const ProductMain = ({product}) => {
    return (
        <Main>
            <div>
                <h1>{product.name}</h1>
                <div className='nutritionalInfo'>
                    {product.nutritionalInformation.map((item,index) =>
                        <>
                            {index !== 0 && <hr/>}
                            <div className='nutritionalInfo__content'>
                                <h3>
                                    {item.value}
                                    <span>{item.x}</span>
                                </h3>
                                <span>
                                    {item.underText}
                                </span>
                            </div>
                        </>
                    )}
                </div>
                <p>{product.description}</p>
                <Accordion
                    nutritionFacts={product.nutritionFacts}
                    ingredients={product.ingredients}
                />
            </div>
            <Image
                style={{
                    backgroundColor: product.color
                }}
            >
                <img src={product.photos.main} alt=""/>
            </Image>
        </Main>
    );
};

export default ProductMain;