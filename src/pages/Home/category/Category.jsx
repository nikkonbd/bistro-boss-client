/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <div className='max-w-6xl mx-auto my-16'>
            <div className='text-center mb-8'>
                <hr className='w-[300px] mx-auto mb-3' />
                <p>---From 11:00am to 10:00pm---</p>
                <h2 className='text-4xl font-medium'>ORDER ONLINE</h2>
                <hr className='w-[300px] mx-auto mt-4' />
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper center"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase font-medium -mt-16 text-white text-center'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white -mt-16 text-center'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white -mt-16 text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white -mt-16 text-center'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white text-center -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    {/* <h3 className='text-3xl uppercase font-medium text-center'>Salads</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white -mt-16 text-center'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase font-medium text-white -mt-16 text-center'>Soups</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;