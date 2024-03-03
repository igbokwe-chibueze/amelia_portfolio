/* eslint-disable react/prop-types */
import { urlFor } from '../client';


const BrandsComponent = ({brands}) => {
  return (
    <>
    <div className='flex justify-center items-center space-x-8'>
        {brands.map((brand) => (
            <div
            key={brand._id}
            className="w-16 tablet:w-28 wide-desktop:w-52"
            >
            {/* Display the image of the current brand */}
            <a href={ brand.brandlink} target="_blank" rel="noopener noreferrer">
                <img
                src={urlFor(brand.imgUrl)}
                alt={brand.name}
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0"
                />
                <p className='p-text text-center'>{brand.name}</p>
            </a>
            </div>
        ))}
        </div>
    </>
  )
}

export default BrandsComponent