"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

function Pictures() {
  return (
    <>
  <Swiper
   spaceBetween={20} // Default space between slides
   slidesPerView={3} // Default slides per view for larger screens
   centeredSlides={false}
   autoplay={{
     delay: 2500,
     disableOnInteraction: false,
   }}
   pagination={{
     clickable: true,
   }}
   navigation={true}
   modules={[Autoplay, Pagination, Navigation]}
   breakpoints={{
     // Mobile view
     640: {
       slidesPerView: 1, // Show 1 slide on smaller screens
       spaceBetween: 10, // Reduce space between slides for mobile
     },
     // Tablet view
     768: {
       slidesPerView: 2, // Show 2 slides on tablets
       spaceBetween: 15, // Medium gap
     },
     // Larger screens (default)
     1024: {
       slidesPerView: 3, // Show 3 slides on desktops
       spaceBetween: 20, // Default gap
     },
   }}
  

      className="mySwiper"
    >
      {/* Swiper slides containing cards */}
      <SwiperSlide>
        <div className="card card-side w-80 sm:w-100 md:w-115 lg:w-125 bg-base-100 shadow-xl">
          <figure>
            <img src="/picture1.png" alt="Movie" className="h-100" />
          </figure>
          <div className="card-body bg-[#343025] rounded-r-xl">
            <h2 className="card-title">New movie is released!</h2>
            <p className="text-white sm:text-red md:text-green-500 lg:text-blue-600">
              Click the button to watch on Jetflix app.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-side w-80 sm:w-100 md:w-115 lg:w-125 bg-base-100 shadow-xl">
          <figure>
            <img src="/picture2.png" alt="Movie" className="h-100" />
          </figure>
          <div className="card-body bg-[#343025] rounded-r-xl">
            <h2 className="card-title">New movie is released!</h2>
            <p className="text-white">
              Click the button to watch on Jetflix app.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-side w-80 sm:w-100 md:w-115 lg:w-125 bg-base-100 shadow-xl">
          <figure>
            <img src="/picture3.png" alt="Movie" className="h-100" />
          </figure>
          <div className="card-body bg-[#343025] rounded-r-xl">
            <h2 className="card-title">New movie is released!</h2>
            <p className="text-white">
              Click the button to watch on Jetflix app.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-side w-80 sm:w-100 md:w-115 lg:w-125 bg-base-100 shadow-xl">
          <figure>
            <img src="/picture4.png" alt="Movie" className="h-100" />
          </figure>
          <div className="card-body bg-[#343025] rounded-r-xl">
            <h2 className="card-title">New movie is released!</h2>
            <p className="text-white">
              Click the button to watch on Jetflix app.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  

 
</>
  )
}

export default Pictures