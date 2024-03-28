import React from 'react';
import styled from "styled-components";

const AccordionContent = styled.div`
  details{
    summary{
      font-size: 1.6rem;
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
                    Object.entries(nutritionFacts.content).map(([key,value]) =>
                        <p>{key + ' - ' + value}</p>
                    )
                }
            </details>
            <details>
                <summary>
                    <h2>{ingredients.title}</h2>
                </summary>
                {
                    ingredients.content.map((value) =>
                        <p>{value}</p>
                    )
                }
            </details>
        </AccordionContent>
    );
};

export default Accordion;