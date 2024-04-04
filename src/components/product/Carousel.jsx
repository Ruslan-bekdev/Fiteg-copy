import React, {useRef,useState,useEffect,Fragment} from 'react';
import styled from "styled-components";

const CarouselContent = styled.div`
  flex-grow: 1;
  max-width: 40%;
  
  &>div{
    max-height: 80%;
    border-radius: calc(.9875rem + 1.86275vw);
    position: sticky;
    top: 5vh;
    overflow: hidden;
  }

  .slides{
    width: 100%;
    height: 100%;
    display: flex;
    list-style: none;

    li{
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;

      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 740px) {
    width: 100%;
    max-width: 480px;
    height: auto;
    margin-inline: auto;
  }
`;


const Carousel = ({images}) => {
    const containerRef = useRef();
    const [current, setCurrent] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const autoScrollInterval = 2000;

    const nextCurr = () => {
        setCurrent((prev) => prev + 1);
    };

    useEffect(() => {
        containerRef.current.style.transitionDuration = '0s';
        if (current === images.length) {
            setTimeout(()=>{
                setCurrent(0);
            },200);
        }
        if (current === 0) {
            setTranslateX(containerRef.current.clientWidth * current);
        }
        else {
            containerRef.current.style.transitionDuration = '.3s';
            setTranslateX(containerRef.current.clientWidth * current);
        }
    }, [current]);

    useEffect(() => {
        const autoScroll = setInterval(()=>{
            nextCurr();
        },autoScrollInterval);
        window.addEventListener('resize',()=>setCurrent(prev => prev))

        return () => {
            clearInterval(autoScroll);
            window.addEventListener('resize',()=>setCurrent(prev => prev))
        };
    }, []);

    return (
        <CarouselContent>
            <div>
                <ul
                    ref={containerRef}
                    className='slides'
                    style={{ transform: `translate3d(${-translateX}px,0,0)` }}
                    onClick={nextCurr}
                >
                    {
                        images.map((image,index)=> {
                            return(
                                <Fragment key={index}>
                                    <li>
                                        <img
                                            src = {image}
                                            alt = "product image"
                                        />
                                    </li>
                                    {images.length-1 === index
                                        ?<li>
                                            <img
                                                src={images[0]}
                                                alt="product image"

                                            />
                                        </li>
                                        :''
                                    }
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </CarouselContent>
    );
};

export default Carousel;