import React from 'react';
import styled from "styled-components";

const RecommendationsContent = styled.div`
  width: 100%;
  max-width: 1740px;
  padding-inline: 2vw;
  margin-bottom: 5rem;
  
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
  cursor: pointer;

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
      img{
        width: 100%;
        transition: .1s ease-in-out;
      }
    }
    
    span{
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
                                onClick={()=>toProductLink({id:index})}
                                style={{backgroundColor: product.color}}
                            >
                                <div>
                                    <img src={product.photos.main} alt=""/>
                                </div>
                                <span>{product.name}</span>
                            </div>
                    )
                }
            </ProductList>
        </RecommendationsContent>
    );
};

export default Recommendations;