import React from 'react';
import Slider from 'react-slick';

export default function ProjectPreview({images, className}) {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  return (
    <Slider {...settings}>
      {images.map((src, idx) => (
        <img src={src} alt='' key={idx} className={className}/>
      ))}
    </Slider>
  );
}
