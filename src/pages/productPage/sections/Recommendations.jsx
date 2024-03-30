import React from 'react';
import styled from "styled-components";

const RecommendationsContent = styled.section`
  width: 100%;
  max-width: 1740px;
  min-height: auto;
  padding-inline: 4vw;
  margin-bottom: 5rem;
  box-sizing: border-box;
  
  h2{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1230px) {
    width: 85vw;
    margin-inline: auto;
  }
`;
const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2%;

  &>div{
    width: 48%;
    background-color: #fd6c0a;
    aspect-ratio: 5/3;
    position: relative;
    border-radius: calc(.9875rem + 1.86275vw);
    margin-bottom: 10%;
    
    &>div{
      width: 100%;
      height: 120%;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      img{
        width: 100%;
        transition: .1s ease-in-out;
      }
    }
    
    h3{
      position: absolute;
      bottom: 0;
      transform: translateY(150%);
    }
    
    @media(hover: hover){
      &:hover>div img{
        transform: scale(1.1) rotate(-6deg);
      }
    }
  }
  
  @media (max-width: 740px) {
    h3{
      font-size: 1.4rem;
    }
  }
`;

const Recommendations = ({products,id,toProductLink}) => {
    return (
        <RecommendationsContent>
            <h2>Next up</h2>

            <ProductList>
                {
                    products.map((product,index) =>
                        +index === +id
                            ? ''
                            : <div
                                style={{backgroundColor: product.color}}
                            >
                                <div
                                    onClick={()=>toProductLink({id:index})}
                                >
                                    <img src={product.images.main} alt=""/>
                                </div>
                                <h3>{product.name}</h3>
                            </div>
                    )
                }
            </ProductList>
        </RecommendationsContent>
    );
};

export default Recommendations;