import PropTypes from 'prop-types';

const CustomBtn = ({
  classProps,
  children,
  label,
  showLabelOnHover,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  btnType,
  onBtnClick,
  disabled,
}) => {
  const handleClick = () => {
    if (onBtnClick && !disabled) {
      onBtnClick();
    }
  };

  return (
    <button
      className={`z-20 flex justify-center items-center border gap-4 group
      text-lg tablet:text-2xl font-bold leading-none rounded-full
      hover:bg-[#6BC800] disabled:bg-[#81926D] disabled:opacity-90 disabled:cursor-not-allowed ${classProps}
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-chartreuse-color text-midnight-green border-midnight-green"
      }`}
      type={btnType || "button"}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className={showLabelOnHover ? "hidden group-hover:flex" : ""}>
        {label || "See More"}
      </div>

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

CustomBtn.propTypes = {
  classProps: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  showLabelOnHover: PropTypes.bool,
  iconURL: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
  onBtnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomBtn.defaultProps = {
  classProps: '',
  showLabelOnHover: false,
  btnType: 'button',
  disabled: false,
};

export default CustomBtn;
