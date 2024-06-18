import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerContainer = styled.div`
  margin-bottom: 20px;
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

  const images = ['/src/assets/banner1.png', '/src/assets/banner3.png', '/src/assets/banner4.png'];

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
