/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// Rating
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [revews, setRevews] = useState([]);
    const [rating, setRating] = useState(3);
    useEffect(() => {
        fetch('revews.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRevews(data)
            })
    }, [])
    return (
        <div>
            <div className='mx-auto text-center md:w-3/12 mb-8 mt-12'>
                <p className='text-yellow-500 pb-3'>---What Our Clients Say---</p>
                <h2 className='text-4xl font-medium border-y-4 py-3'>TESTIMONIALS</h2>
            </div>
            <div className='max-w-6xl mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        revews.map(rivew => <SwiperSlide key={rivew._id}>
                            <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rivew.rating}
                                    onChange={setRating}
                                />
                            </div>
                            <div className='text-center px-40 py-8 mb-8'>
                                <p>{rivew.details}</p>
                                <h2 className='text-2xl font-medium text-warning'>{rivew.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;