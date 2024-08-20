import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from '../Photos/image1.jpg';
import image2 from '../Photos/image2.jpg';
import image3 from '../Photos/image3.jpg';
import image4 from '../Photos/image4.jpg';
import image5 from '../Photos/image5.jpg';
import image6 from '../Photos/image6.jpg';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-800 text-2xl"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-800 text-2xl"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: i => (
      <div className="w-3 h-3 bg-white rounded-full mx-1" />
    ),
    appendDots: dots => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {dots}
      </div>
    ),
  };

  return (
    <div className="relative p-4">
      <Slider {...settings}>
        {[image1, image2, image3, image4, image5, image6].map((image, index) => (
          <div key={index} className="p-1 relative">
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full rounded-lg border border-gray-300 object-cover h-64 md:h-80 lg:h-96" // Adjusted height
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
