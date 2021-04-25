import React from 'react';
import styled from "styled-components";

import Carousel from "./CarouselBasic";
import SlideOne from "./CarouselSlide";
import SlideTwo from "./CarouselSlide";
import SlideThree from "./CarouselBasic";

const ImageCarousel: React.FC = () => {
    return (
        <div>
            <Carousel>
                <SlideOne/>
                <SlideTwo/>
            </Carousel>
        </div>
    );

}

export default ImageCarousel;