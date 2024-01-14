/* eslint-disable react/prop-types */
const CustomBtn = ({
  classProps,
  children,
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`flex justify-center items-center border text-lg tablet:text-2xl font-bold leading-none 
      hover:bg-[#6BC800] disabled:bg-[#81926D] disabled:opacity-90 disabled:cursor-not-allowed ${classProps}
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-black text-white border-black"
      } rounded-full ${fullWidth && "w-full"}`}
      onClick={onClick}
      disabled={disabled}
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
