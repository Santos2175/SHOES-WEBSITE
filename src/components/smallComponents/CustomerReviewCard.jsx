import React from 'react';
import { star } from '../../assets/icons';

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full w-[120px] h-[120px] object-cover'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-end gap-2.5'>
        <img
          src={star}
          alt='star'
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin font-bold text-3xl'>{customerName}</h3>
    </div>
  );
};

export default CustomerReviewCard;
