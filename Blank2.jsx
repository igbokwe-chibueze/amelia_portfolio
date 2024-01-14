/* eslint-disable react/prop-types */

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServiceCard