import React from "react";
import Slider from "react-slick";
import banner1 from '../assets/herobanner/banner1.avif';
import banner2 from '../assets/herobanner/banner2.avif';
import banner3 from '../assets/herobanner/banner3.avif';
import banner4 from '../assets/herobanner/banner4.avif';
import banner5 from '../assets/herobanner/banner5.avif';
import banner6 from '../assets/herobanner/banner6.avif';
import banner7 from '../assets/herobanner/banner7.avif';

const banners = [banner1,banner2,banner3,banner4,banner5,,banner6,banner7];


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {
          banners.map((banner) => (
            <div className="p-1">
              <img src={banner} className="w-full"/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default SimpleSlider;
