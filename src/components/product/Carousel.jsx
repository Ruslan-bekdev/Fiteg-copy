import React, {useRef,useState,useEffect} from 'react';
import styled from "styled-components";

const CarouselContent = styled.div`
  flex-grow: 1;
  height: 100%;
  max-width: 40%;
  overflow: hidden;
  
  &>div{
    border-radius: calc(.9875rem + 1.86275vw);
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
    max-width: none;
  }
`;


const Carousel = ({images}) => {
    const containerRef = useRef();
    const [current, setCurrent] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const autoScrollInterval = 3000;

    const nextCurr = () => {
        setCurrent((prev) => prev + 1);
    };

    useEffect(() => {
        if (current === images.length) {
            containerRef.current.style.transitionDuration = '0s';
            setTimeout(()=>{
                setCurrent(0);
            },200);
        }
        if (current === 0) {
            containerRef.current.style.transitionDuration = '0s';
            setTranslateX(containerRef.current.clientWidth * current);
        }
        else {
            containerRef.current.style.transitionDuration = '.2s';
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
                                <>
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
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </CarouselContent>
    );
};

export default Carousel;