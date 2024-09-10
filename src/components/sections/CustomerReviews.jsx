import React from 'react';
import { reviews } from '../../constants';
import CustomerReviewCard from '../smallComponents/CustomerReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl text-center font-bold'>
        What Our <span>Customers</span> Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
