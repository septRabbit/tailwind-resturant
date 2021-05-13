import React from 'react';

function Location() {
  return (
    <div className='bg-gray-800 h-80 p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-10'>
        <div className='text-center'>
          <p className='text-white text-2xl'>Address</p>
          <p className='text-white text-lg mt-5'>
            No. 123, Lavuta Rd., Lavuta City
          </p>
        </div>
        <div className='text-center'>
          <p className='text-white text-2xl'>Hours</p>
          <p className='text-white text-lg mt-5'>
            Monday — Thursday • 11:00 am – 9:00 pm
          </p>
          <p className='text-white text-lg mt-5'>
            Friday & Saturday • 11:00 am – 10:00 pm
          </p>
          <p className='text-white text-lg mt-5'>Sunday • 11:00 am – 9:00 pm</p>
        </div>
        <div className='text-center'>
          <p className='text-white text-2xl mb-5'>Contact Us</p>
          <a
            href='mailto:lavuta@lavuta.com'
            className='text-white text-lg mt-8'
          >
            lavuta@lavuta.com
          </a>
          <p className='text-white text-lg mt-5'>0909-123-456</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
