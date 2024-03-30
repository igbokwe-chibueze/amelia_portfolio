/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { urlFor } from '../client';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants/icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronLeftIcon className={"w-45 h-45"}/>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronRightIcon className={"w-45 h-45"}/>
      </div>
    );
  };

const TestimonialCard = ({testimonials}) => {

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    customPaging: () => (
      <div 
        className="w-2 h-2 rounded-full m-2 
        bg-caribbean-current hover:bg-midnight-green"
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-64 tablet:max-w-5xl testimonial'>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className='bg-caribbean-current flex flex-col items-center rounded-md my-4 px-4 pb-2 shadow-lg shadow-gray-500 text-tea-green'>
              <img
              src={urlFor(testimonial.imgurl)}
                alt='customer'
                className='rounded-full object-cover w-32 h-32 -mt-4'
              />
              <p className='mt-2 max-w-sm text-center info-text'>{testimonial.feedback}</p>
              <div className='flex justify-center items-center'>
                <p className='text-xl'>({testimonial.company})</p>
              </div>
              <h3 className='mt-1 text-3xl text-center font-bold text-chartreuse-color'>
                {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialCard