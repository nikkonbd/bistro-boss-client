/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import UseMenu from '../Hooks/UseMenu';

const FoodCard = ({ item }) => {

    const { recipe, image, price, name } = item;
    return (
        <div>
            <div className="card w-11/12 h-[450px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mt-4 mr-6 p-2 bg-slate-900 text-white'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-2 hover:bg-yellow-500 border-orange-600">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;