/* eslint-disable no-unused-vars */
import React from 'react';
import chef from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero min-h-screen my-20" style={{ backgroundImage: `url(${chef})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-slate-300">
                        <div className='p-16 text-black'>
                            <h1 className="mb-5 text-4xl font-medium uppercase">Bistro Boss</h1>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;