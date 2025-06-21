'use client'
import React from 'react'
import ReviewCard from './ReviewCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Slider = () => {
  return (
     <Carousel
          arrows={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
        >
            <div>
                <ReviewCard image="/images/u1.jpg" name="John Doe" role="Engineer" />
            </div>
            <div>
                <ReviewCard image="/images/u2.jpg" name="Jessica Doe" role="Content C reator" />
            </div>
            <div>
                <ReviewCard image="/images/u3.jpg" name="Jason Doe" role="Web Development" />
            </div>
        </Carousel>
  )
}

export default Slider