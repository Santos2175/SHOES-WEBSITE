import React from 'react';
import Button from '../smallComponents/Button';
import { arrowRight } from '../../assets/icons';
import { offer } from '../../assets/images';

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='offer'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col '>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block'>Special</span> Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premiere selections to incredible savings, we
          offer unparalled value that separates us from others.
        </p>
        <p className='mt-5 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='flex flex-wrap mt-11 gap-4'>
          <Button label='Shop now' iconURL={arrowRight}></Button>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
