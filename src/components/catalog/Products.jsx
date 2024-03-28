import React, {useState,useEffect} from 'react';
import products from "../../configs/products";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const ProductsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .product {
   &__content {
     width: 100%;
     aspect-ratio: 1;
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     
     .back{
       width: 80%;
       aspect-ratio: 1;
       background-color: var(--color);
       border-radius: 50%;
     }

     img {
        width: 100%;
        aspect-ratio: 1;
        transform: rotate(var(--rotate));
     }
   
     .product__desc {
        width: 100%;
        position: absolute;
        bottom: 0;
        transform: translateY(50%);

        .nutritionalInfo {
          width: fit-content;
          aspect-ratio: 3/1;
          display: flex;
          align-items: center;
          background-color: #0e0f19;
          border-radius: 1rem;
          color: #fdfdfd;
          margin-inline: auto;
          position: relative;
          z-index: 10;

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
            padding: .4rem .8rem;
            
            h3, span {
              line-height: 50%;
              font-weight: bold;
            }
            h3 {
              font-size: 2.4rem;
            }
            span {
              font-size: 1rem;
            }
          }
        }

        &>h3 {
          color: var(--color);
          font-size: 1.8rem;
          text-align: center;
        }
     }
    }
  }
  
  &.desktop{
    height: 100%;
    align-items: center;

    .product {
      width: 30vw;
      height: 100%;

      &__content {
        top: 100%;
        justify-content: center;
        transition: .2s ease-in-out;
        opacity: 0;

        &.animated{
          opacity: 1;
          animation: productShow .4s ease-in-out, productMove 7s ease-in-out infinite;
          top: var(--top);
        }

        .back{
          transition: scale .2s cubic-bezier(.27,0,.12,1.28);
        }

        img {
          position: absolute;
          bottom: 0;
          transition: rotate .2s cubic-bezier(.27,0,.12,1.28);
        }

        .product__desc {
          transition: .2s ease-in-out;

          .nutritionalInfo {
            transform: rotate(-9deg) translateY(-30%);
          }
        }

        @media (hover: hover){
          background-color: inherit;
          cursor: pointer;

          .back{
            scale: 0;
          }
          .product__desc{
            opacity: 0;
            width: 0;
          }

          &:hover{
            width: 110%;

            .back{
              scale: 1;
            }
            img{
              rotate: calc(7deg);
            }
            .product__desc{
              opacity: 1;
              width: 100%;
            }
          }
        }
      }

      @keyframes productMove {
        0%{
          transform: translateY(0);
        }
        50%{
          transform: translateY(10%);
        }
        100%{
          transform: translateY(0);
        }
      }
      @keyframes productShow {
        0%{
          opacity: 0;
          top: 100%;
        }
        100%{
          opacity: 1;
          top: var(--top);
        }
      }
    }
  }
  &.mobile{
    display: flex;
    flex-direction: column;
    gap: 5dvh;
    padding-bottom: 12rem;

    .product {
      width: 75%;
      transform: none !important;

      &:not(:first-child){
        margin-top: 10%;
      }

      &__content {
        justify-content: space-between;

        .back{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        img {
          width: 100%;
          aspect-ratio: 1;
          transform: rotate(var(--rotate));
        }

        .product__desc {
          &>h3 {
            color: var(--color);
            font-size: 3rem;
            text-align: center;
          }
        }
      }
    }
  }
`;

const Products = ({animatedStatus,isMobile}) => {
    const navigate = useNavigate();

    const toProductPage = ({id}) => {
        navigate(`/product/${id}`)
    };

    return(
        <ProductsContent
            className={isMobile ?'mobile' :'desktop'}
        >
            {products.map((product, index) =>
                <div
                    className='product catalog__product'
                    key={index}
                >
                    <div
                        className={`product__content ${(!isMobile && animatedStatus) ?'animated' :''}`}
                        style={{
                            animationDelay: `${index / 4}s`,
                            '--color': product.color,
                            '--top': `${!isMobile ? (product.positions.top_catalog / 1.5) : ''}dvh`,
                            '--rotate': `${product.positions.rotate_catalog}deg`,
                        }}
                        onClick={()=>toProductPage({id: index})}
                    >
                        <div className='back'/>
                        <img
                            src={product.photos.catalog} alt={product.name}
                        />
                        <div className='product__desc'>
                            <div className='nutritionalInfo'>
                                <div className='nutritionalInfo__content'>
                                    <h3>
                                        {
                                            product.nutritionalInformation.eggWhites
                                        }
                                    </h3>
                                    <span>
                                    egg whites
                                </span>
                                </div>
                                <hr/>
                                <div className='nutritionalInfo__content'>
                                    <h3>
                                        {
                                            product.nutritionalInformation.protein
                                        }
                                    </h3>
                                    <span>
                                    protein
                                </span>
                                </div>
                            </div>
                            <h3>
                                {product.name}
                            </h3>
                        </div>
                    </div>
                </div>)}
        </ProductsContent>
    )};

export default Products;