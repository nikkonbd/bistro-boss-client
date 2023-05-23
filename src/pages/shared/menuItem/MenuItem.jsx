/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MenuItem = ({ item }) => {
    const { recipe, image, price, name } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase font-medium'>{name}------------------</h3>
                <p className=''>{recipe}</p>
            </div>
            <p className='text-yellow-700'>${price}</p>
        </div>
    );
};

export default MenuItem;