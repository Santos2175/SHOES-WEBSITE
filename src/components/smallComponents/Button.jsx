import React from 'react';

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : 'bg-coral-red  text-white border-coral-red'
    }
    `}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='rounded-full h-5 w-5 ml-2'
        />
      )}
    </button>
  );
};

export default Button;
