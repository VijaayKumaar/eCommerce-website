import React from 'react'
 import  Carousel from "react-multi-carousel"
 import { styled } from '@mui/material';
import { bannerData } from '../constants/Data';
import "react-multi-carousel/lib/styles.css";




    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    
    const Image = styled('img')(({ theme }) => ({
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }));
    
    const banner = () => {
        return (
            <Carousel
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
                responsive={responsive}
            >
                {
                    bannerData.map(image => (
                        <Image src={image.url} alt="banner" id={image.id} />
                    ))
                }
            </Carousel>
        )
            }  
export default banner
