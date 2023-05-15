
import React from 'react';
import { useProductContext } from '../context/ProductFilter';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
});

const ProductImage = styled('img')({
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '4px',
  transition: 'transform .3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const ProductDetails = styled('div')({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  color:"green",

  fontSize:"30px"
});

const ProductTitle = styled('h3')({
  fontSize: '18px',
  fontWeight: 500,
  marginBottom: '8px',
});

const ProductPrice = styled('p')({
  fontSize: '16px',
  fontWeight: 500,
  color: 'blue',
});

function ProductList() {
  const { all_products } = useProductContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {all_products .map((product) => (
        <NavLink to={`/SingleProduct/${product.id}`} key={product.id}>
          <ProductContainer>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
              <ProductTitle>₹{product.price}</ProductTitle>
              <ProductPrice>{product.company}</ProductPrice>
            </ProductDetails>
          </ProductContainer>
        </NavLink>
      ))}
    </Slider>
  );
}


export default ProductList;
