import React, {useEffect} from 'react';
import styled from "styled-components";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import ProductMain from "./sections/ProductMain";
import ProductSecondary from "./sections/ProductSecondary";
import Marquee from "./sections/Marquee";
import Recommendations from "./sections/Recommendations";
import products from "../../configs/products";

const Product = styled.main`
  padding-top: 8vh;
`;
const Back = styled.div`
  width: 100%;
  max-width: 1920px;
  margin-inline: auto;
  
  &>*{
    width: fit-content;
    margin-block: 2rem;
    margin-left: 2vw;
    padding-block: .6rem;
    padding-inline: .9rem 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(.9875rem + 1.86275vw);
    background-color: #f2f3f4;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    @media (hover: hover) {
      &:hover {
        background-color: #ffc857;
      }
    }
  }

  @media (max-width: 740px) {
    &>*{
      margin-block: 0 4rem;
      margin-left: 4vw;
      padding-block: 1.2rem;
      padding-inline: 1.8rem;
    }
  }
`;

const ProductPage = ({windowWidth}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const toProductLink = ({id}) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <Product>
            <Back>
                <NavLink to='/'>
                    {'< Назад'}
                </NavLink>
            </Back>
            <ProductMain
                product={products[id]}
                windowWidth={windowWidth}
            />
            <ProductSecondary
                product={products[id]}
            />
            <Marquee/>
            <Recommendations
                products={products}
                id={id}
                toProductLink={toProductLink}
            />
        </Product>
    );
};

export default ProductPage;