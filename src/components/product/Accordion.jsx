import React from 'react';
import styled from "styled-components";

const AccordionContent = styled.div`
  details{
    summary{
      font-size: 1.3rem;
      white-space: nowrap;
      h2{
        display: inline-block;
      }
      cursor: pointer;
    }
    p{
      margin-top: .8rem;
    }
  }
`;

const Accordion = ({nutritionFacts,ingredients}) => {
    return (
        <AccordionContent>
            <details>
                <summary>
                    <h2>{nutritionFacts.title}</h2>
                </summary>
                {
                    nutritionFacts.content.map((texts,index)=>
                        texts[0] === texts[1]
                            ?<br/>
                            :<p key={index}>{texts[0] + (texts[0] === '*' ?' ' :' - ') + texts[1]}</p>
                    )
                }
            </details>
            <details>
                <summary>
                    <h2>{ingredients.title}</h2>
                </summary>
                {
                    ingredients.content.map((value,index) =>
                        value === " "
                            ?<br/>
                            :<p key={index}>{value}</p>
                    )
                }
            </details>
        </AccordionContent>
    );
};

export default Accordion;