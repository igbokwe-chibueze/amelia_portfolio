/* eslint-disable react/prop-types */
const CustomBtn = ({
  children,
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-4 px-4 py-2 border font-montserrat text-lg leading-none hover:bg-rose-500
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
      onClick={onClick}
    >
      {label}

      {/* Use the iconUrl if i want to use an svg icon */}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
      
      {/* Use this instead of iconUrl if i want to use a jsx icon component */}
      {children}
    </button>
  );
};

export default CustomBtn;
