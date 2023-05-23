/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({ img, title, text }) => {
    return (
        <Parallax
            bgImage={img}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: { img },
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div>
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="bg-slate-800 bg-opacity-60">
                            <div className='px-64 py-28'>
                                <h1 className="mb-5 text-6xl font-medium uppercase">{title}</h1>
                                <p className="mb-3">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;