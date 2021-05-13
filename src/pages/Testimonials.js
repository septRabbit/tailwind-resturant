import React from 'react';

function Testimonials() {
  return (
    <div className='bg-gray-100 text-gray-800 p-8 bg-cover bg-testimonial-image'>
      <p className='text-center text-white mb-30 uppercase underline text-4xl mt-18'>
        Testimonials
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-20'>
        <div className='max-w-md py-2 px-4 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center md:justify-end -mt-16'>
            <img
              className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/10/wGmFIN.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-3xl font-semibold p-4'>
              不吃會後悔!
            </h2>
            <p className='text-gray-600 p-4'>兔兔教的快點來吃!</p>
          </div>
          <div className='flex justify-end mt-4'>
            <a href='#' className='text-xl font-medium text-indigo-500'>
              踹兔
            </a>
          </div>
        </div>
        <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center md:justify-end -mt-16'>
            <img
              className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/12/A9gtTL.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-3xl font-semibold p-4'>
              兔兔教揪團
            </h2>
            <p className='text-gray-600 p-4'>
              不吃空氣燒肉了，來吃Pizza、牛排、義大利麵。
            </p>
          </div>
          <div className='flex justify-end mt-4'>
            <a href='#' className='text-xl font-medium text-indigo-500'>
              小白
            </a>
          </div>
        </div>
        <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center md:justify-end -mt-16'>
            <img
              className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/12/XlGIJs.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-3xl font-semibold p-4'>
              超級好吃
            </h2>
            <p className='text-gray-600 p-4'>義大利麵加磨細的腳皮更好吃喔!</p>
          </div>
          <div className='flex justify-end mt-4'>
            <a href='#' className='text-xl font-medium text-indigo-500'>
              小毛
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
