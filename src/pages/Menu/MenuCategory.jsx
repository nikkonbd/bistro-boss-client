/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from '../shared/menuItem/MenuItem';
import Cover from '../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg, text }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title} text={text}></Cover>}
            <div className='max-w-6xl mx-auto my-10 grid md:grid-cols-2 gap-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mb-6'>
                <Link to={`/shop/${title}`}>
                    <button className='btn btn-outline border-0 border-b-2 hover:bg-yellow-500'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;