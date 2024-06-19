import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '/src/assets/banner1.png';
import Banner2 from '/src/assets/banner2.png';
import Banner3 from '/src/assets/banner3.png';

const BannerContainer = styled.div`
  margin-bottom: 20px;
  z-index: 1;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [Banner1, Banner2, Banner3];

  return (
    <BannerContainer>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <BannerImage src={src} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default MainBanner;
