import React, {Fragment, useState} from 'react';
import styled from "styled-components";
import marqueeConfig from "../../../configs/marquee";
import products from "../../../configs/products";

const CatalogContent = styled.section`
  position: relative;
  z-index: 400;
`;
const Marquee = styled.div`
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  
  &>div{
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: move 20s linear infinite;
  }
  h2{
    white-space: nowrap;
    width: 100%;
    font-size: 4vw;
    display: flex;
    align-items: center;
    img{
      height: 5vw;
      aspect-ratio: 1;
    }
    span{
      margin-inline: 3vw;
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
  & > div {
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product {
    width: 28vw;
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
          border-radius: 1.3vw;
          color: #fdfdfd;
          margin-inline: auto;
          position: relative;
          transform: rotate(-9deg);
          z-index: 1000;

          hr{
            border: .1vw #fdfdfd solid;
            height: 30%;
          }
          
          &__content {
            height: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: .6vw;
            h3, span {
              line-height: 50%;
              font-weight: bold;
            }
            h3 {
              font-size: 1.8vw;
            }
            span {
              font-size: 1vw;
            }
          }
        }

        &>h3 {
          color: var(--color);
          font-size: 2.4vw;
          margin-top: 2vw;
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
           rotate: calc(var(--rotate) * 1.1);
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

const Catalog = () => {
    const [animatedStatus,setAnimatedStatus] = useState(false);

    const handleScrollMarqueeAnimation = () => {
        const element = document.querySelector('#marquee');
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;

        if (windowPositionY > windowHeight * 2) return;

        if (windowPositionY > 64 && windowPositionY < windowHeight * 2)
            element.style.top = `${windowPositionY/2.2}px`;
    };
    const handleScrollProductsAnim = () => {
        const windowHeight = window.innerHeight;
        const windowPositionY = window.scrollY;
        if (windowPositionY > windowHeight * 2) return;

        const productElements = document.querySelectorAll('.product__content');
        if(windowPositionY > windowHeight/1.3 && !animatedStatus)
            setAnimatedStatus(true);

        productElements.forEach((product, index) => {
            product.style.transform = `translateY(-${windowPositionY /
            products[index].positions.parallaxDivide}px)`;
        });
    };


    window.addEventListener('scroll',() => {
            handleScrollMarqueeAnimation();
            handleScrollProductsAnim();
        }
    );

    const renderMarqueeContent = () => {
        const content = marqueeConfig.map((item, index) =>
            <Fragment key={index}>
                <img src={item.svg} alt=""/>
                <span>{item.text}</span>
            </Fragment>
        );

        return content;
    };
    const renderProducts = () => {
        return <div>
            {
                products.map((product, index) =>
                <div
                    className='product'
                    key={index}
                >
                    <div
                        className={`product__content ${animatedStatus ?'animated' :''}`}
                        style={{
                            animationDelay: `${index/5}s`,
                            '--color': product.color,
                            '--top': `${product.positions.top_catalog}vw`,
                            '--rotate': `${product.positions.rotate_catalog}deg`,
                        }}
                    >
                        <div className='back'/>
                        <img
                            src={product.photos.main} alt={product.name}
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
        </div>
    };

    return (
        <CatalogContent>
            <Marquee id='marquee'>
                <div>
                    <h2>{renderMarqueeContent()}</h2>
                    <h2>{renderMarqueeContent()}</h2>
                </div>
            </Marquee>
            <Products className='container'>
                {
                    renderProducts()
                }
            </Products>
        </CatalogContent>
    );
};

export default Catalog;