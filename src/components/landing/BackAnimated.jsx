import React from "react";
import styled from "styled-components";

const Back = styled.div`
  width: 101vw;
  height: 101vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0;
  
  &.back_active{
    animation: opacity .2s ,zoom 2s cubic-bezier(0.4, 0, 0.4, 1);
    opacity: 1;
    z-index: 500 !important;
    transition: .2s;
  }
  
  @keyframes zoom {
    0% {
      width: 110vw;
      height: 110vh;
    }
    100% {
      width: 101vw;
      height: 101vh;
    }
`;

const BackAnimated = ({titleAndBackIndex,isBackActive,config}) => {
    return !isBackActive ?'' :(
        <div>
            {
                config.variants.map((item,index)=>
                    <Back
                        className={`${titleAndBackIndex === index
                            ?'back_active'
                            :'back_passive'}`
                        }
                        style={{
                            backgroundImage: `url(${item.back})`,
                            opacity: (titleAndBackIndex === index || titleAndBackIndex-1 === index || (titleAndBackIndex-1 === -1 && index === config.variants.length-1)) ?'1' :0,
                            zIndex: index * 10 + 10,
                        }}
                        key={index}
                    />
                )
            }
        </div>
    )
}

export default BackAnimated;