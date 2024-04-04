import React, {Fragment} from 'react';
import styled from "styled-components";
import Accordion from "../../../components/product/Accordion";

const Main = styled.section`
  width: 98vw;
  max-width: 1920px;
  min-height: auto;
  margin-block: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  
  &>div{
    width: 50%;
    box-sizing: border-box;
    &:first-child{
      padding-right: 5%;
    }
  }
  
  h1{
    font-size: 2.7rem;
  }

  .nutritionalInfo {
    margin-block: 2rem;
    width: fit-content;
    aspect-ratio: 5;
    display: flex;
    align-items: center;
    background-color: #0e0f19;
    border-radius: calc(.9875rem + 1.86275vw);
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
  
  @media (max-width: 740px) {
    width: 90vw;
    max-width: 480px;
    flex-direction: column;
    text-align: center;
    
    .nutritionalInfo{
      margin-inline: auto;
    }

    &>div{
      width: 100%;
      box-sizing: border-box;
      &:first-child{
        padding-right: 0;
      }
    }
    
    p{
      margin-block: 7%;
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

const ProductMain = ({windowWidth,product}) => {
    return (
        <Main>
            {windowWidth < 740
                ?<Image
                    style={{
                        backgroundColor: product.color
                    }}
                >
                    <img src={product.images.main} alt=""/>
                </Image>
                :''
            }
            <div>
                <h1>{product.name}</h1>
                <div className='nutritionalInfo'>
                    {product.nutritionalInformation.map((item,index) =>
                        <Fragment key={index}>
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
                        </Fragment>
                    )}
                </div>
                <p>{product.description}</p>
                <Accordion
                    nutritionFacts={product.nutritionFacts}
                    ingredients={product.ingredients}
                />
            </div>
            {windowWidth >= 740
                ?<Image
                    style={{
                        backgroundColor: product.color
                    }}
                >
                    <img src={product.images.main} alt=""/>
                </Image>
                :''
            }
        </Main>
    );
};

export default ProductMain;