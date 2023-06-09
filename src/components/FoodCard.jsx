/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UseMenu from '../Hooks/UseMenu';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/UseCart';

const FoodCard = ({ item }) => {
    const { recipe, image, price, name, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item);
        const cartItem = { menuItemid: _id, name, image, price, email: user?.email }
        if (user && user?.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //update the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item Food Added On The cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order The Food?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login Page!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-11/12 h-[450px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mt-4 mr-6 p-2 bg-slate-900 text-white'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => { handleAddToCart(item) }} className="btn btn-outline border-0 border-b-2 hover:bg-yellow-500 border-orange-600">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;