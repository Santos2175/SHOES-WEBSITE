import React from 'react';
import Button from '../smallComponents/Button';
import { arrowRight } from '../../assets/icons';
import { shoe8 } from '../../assets/images';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col w-full max-container gap-10'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You{' '}
          <span className='mt-3 text-coral-red inline-block'>Super</span>{' '}
          <span className='mt-3 text-coral-red inline-block'>Quality</span>{' '}
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium conmfort and styling, our meticuliously crafted
          footwear is designed to elevate your experience, providing you with
          unmatatched quality, innovation and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='view details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
