import React from 'react';
import styled from "styled-components";

const RecommendationsContent = styled.section`
  width: 98vw;
  max-width: 1740px;
  min-height: auto;
  margin-bottom: 10%;
  
  h2{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1230px) {
    width: 85vw;
    margin-inline: auto;
  }
  @media (max-width: 740px) {
    width: 90vw;
    max-width: 480px;
    margin-bottom: 20%;
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
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      position: absolute;
      bottom: 0;
      transform: translateY(calc(100% + .5rem));
    }
    
    @media(hover: hover){
      &:hover>div img{
        transform: scale(1.1) rotate(-6deg);
      }
    }
  }
  
  @media (max-width: 740px) {
    h3{
      font-size: 1.2rem;
    }
  }
`;

const Recommendations = ({products,title,id,toProductLink}) => {
    return (
        <RecommendationsContent>
            <h2>{title}</h2>

            <ProductList>
                {
                    products.map((product,index) =>
                        +index === +id
                            ? ''
                            : <div
                                style={{backgroundColor: product.color}}
                                key={index}
                            >
                                <div
                                    onClick={()=>toProductLink({id:index})}
                                >
                                    <img src={product.images.main} alt=""/>
                                </div>
                            </div>
                    )
                }
            </ProductList>
        </RecommendationsContent>
    );
};

export default Recommendations;