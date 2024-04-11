/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { urlFor } from '../client';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants/icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ChevronLeftIcon className={"w-[50px] h-[50px]"}/>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
    <div className={className} onClick={onClick}>
        <ChevronRightIcon className={"w-40 h-40"}/>
    </div>
    );
};


const GraphicsDesignCard = ({ graphicsDesigns }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        customPaging: (index) => (
            <div className='flex justify-center items-center'>
                <img
                    src={urlFor(graphicsDesigns[index].mainImage)}
                    alt={graphicsDesigns[index].title}
                    className="rounded object-cover flex-wrap"
                />
            </div>
        ),
      };
    
    return (

        <div 
            className="max-w-64 tablet:max-w-4xl graphics-design"
        >
            <Slider {...settings}>
                {graphicsDesigns.map((graphics, index) => (
                    <div key={index}>
                        <div className="flex justify-center items-center p-2 bg-white rounded-lg shadow-md h-auto mx-2">
                            {/* Display the image of the current graphics design */}
                            {graphics.mainImage && (
                                <Link
                                    to={`/graphicsDesignDetails/${graphics._id}/${encodeURIComponent(graphics.title)}`}
                                >
                                    <img
                                        src={urlFor(graphics.mainImage)}
                                        alt={graphics.title}
                                        className="w-[450px] h-[350px] object-cover"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default GraphicsDesignCard;