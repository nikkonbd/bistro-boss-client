/* eslint-disable no-unused-vars */
import React from 'react';
import featured1 from '../../assets/home/featured1.jpg';
import featured from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div>
            <div className="min-h-screen bg-fixed bg-gradient-to-r from-blue-950 to-blue-600" style={{ backgroundImage: `url(${featured})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className='mx-auto text-center md:w-3/12 pt-12 pb-8'>
                        <p className='text-yellow-500 pb-3'>---Check it out---</p>
                        <h2 className='text-2xl font-medium border-y-4 py-3'>FROM OUR MENU</h2>
                    </div>
                    <div className="md:flex max-w-6xl items-center mx-auto">
                        <img className='w-[500px] h-[360px]' src={featured1} alt="" />
                        <div className='p-16 text-white'>
                            <h3 className='text-xl'>March 20, 2023</h3>
                            <h3 className='text-xl pb-4'>WHERE CAN I GET SOME?</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                            <button className="btn text-white hover:bg-yellow-600 btn-outline border-0 border-b-2">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;