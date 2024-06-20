import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BannerContainer, BannerImage } from './MainBannerStyle';
import Banner1 from '/src/assets/banner1.png';
import Banner2 from '/src/assets/banner2.png';
import Banner3 from '/src/assets/banner3.png';

const images = [Banner1, Banner2, Banner3];

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
