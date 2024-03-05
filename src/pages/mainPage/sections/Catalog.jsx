import React, {Fragment, useEffect, useState} from 'react';
import styled from "styled-components";
import marquee from "../../../configs/marquee";
import products from "../../../configs/products";

const CatalogContent = styled.section`
  height: 120dvh;
  position: relative;
`;
const Marquee = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  
  &.animated>div{
    animation: move 24s linear infinite;
  }
  
  &>div{
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  h2{
    white-space: nowrap;
    width: 100%;
    font-size: 42px;
    display: flex;
    align-items: center;
    img{
      height: 56px;
      aspect-ratio: 1;
    }
    span{
      margin-inline: 32px;
    }
  }
  
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
const Products = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .product {
    width: 290px;
    min-width: 15vw;
    height: 100%;

   &__content {
     width: 100%;
     aspect-ratio: 1;
     position: relative;
     top: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     opacity: 0;
     transition: .2s ease-in-out;
     
     &.animated{
       animation: productShow .4s ease-in-out, productMove 7s ease-in-out infinite;
       top: var(--top);
       opacity: 1;
     }
     
     .back{
       width: 80%;
       aspect-ratio: 1;
       background-color: var(--color);
       border-radius: 50%;
       transition: scale .2s cubic-bezier(.27,0,.12,1.28);
     }

     img {
        width: 100%;
        aspect-ratio: 1;
        position: absolute;
        bottom: 0;
        transform: rotate(var(--rotate));
        transition: rotate .2s cubic-bezier(.27,0,.12,1.28);
     }
   
     .product__desc {
        width: 100%;
        position: absolute;
        bottom: 0;
        transform: translateY(50%);
        transition: .2s ease-in-out;

        .nutritionalInfo {
          width: 60%;
          aspect-ratio: 3/1;
          display: flex;
          align-items: center;
          background-color: #0e0f19;
          border-radius: 2.5vw;
          color: #fdfdfd;
          margin-inline: auto;
          position: relative;
          transform: rotate(-9deg) translateY(-30%);
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
            h3, span {
              line-height: 50%;
              font-weight: bold;
            }
            h3 {
              font-size: 32px;
            }
            span {
              font-size: 12px;
            }
          }
        }

        &>h3 {
          color: var(--color);
          font-size: 32px;
          text-align: center;
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
`;

const RenderProducts = ({animatedStatus}) => {
    return(
        <Products>
            {
                products.map((product, index) =>
                    <div
                        className='product'
                        key={index}
                    >
                        <div
                            className={`product__content ${animatedStatus ?'animated' :''}`}
                            style={{
                                animationDelay: `${index/4}s`,
                                '--color': product.color,
                                '--top': `${product.positions.top_catalog}dvh`,
                                // для больших устройств 1.5 делитель
                                '--rotate': `${product.positions.rotate_catalog}deg`,
                            }}
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
                    </div>)
            }
        </Products>
    )};

const Catalog = () => {
    const [animatedStatus,setAnimatedStatus] = useState(false);

    const handleScrollMarqueeAnimation = () => {
        const element = document.querySelector('#marquee');
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;

        if (windowPositionY > windowHeight * 2 || !element) return;

        element.style.top = `${windowPositionY/2.2}px`;
    };
    const handleScrollProductsAnim = () => {
        const productElements = document.querySelectorAll('.product');
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;

        if (windowPositionY > windowHeight * 2 || !productElements) return;

        if(windowPositionY > windowHeight/1.2 && !animatedStatus)
            setAnimatedStatus(true);

        productElements.forEach((product, index) => {
            if (products[index].positions.parallaxDivide) {
                product.style.transform = `translateY(-${windowPositionY /
                products[index].positions.parallaxDivide}dvh)`;
                // для больших устройств 2 делитель
            }
        });
    };


    window.addEventListener('scroll',() => {
            handleScrollMarqueeAnimation();
            handleScrollProductsAnim();
        }
    );

    const renderMarqueeContent = () => {
        const content = marquee.map((item, index) =>
            <Fragment key={index}>
                <img src={item.svg} alt=""/>
                <span>{item.text}</span>
            </Fragment>
        );

        return content;
    };

    useEffect(()=>{
        const marquee = document.querySelector('#marquee');

        if (!marquee) return;

        marquee.classList.add('animated');
    },[]);

    return (
        <CatalogContent>
            <Marquee id='marquee'>
                <div>
                    <h2>{renderMarqueeContent()}</h2>
                    <h2>{renderMarqueeContent()}</h2>
                </div>
            </Marquee>
            <RenderProducts
                animatedStatus={animatedStatus}
                className='container'
            />
        </CatalogContent>
    );
};

export default Catalog;