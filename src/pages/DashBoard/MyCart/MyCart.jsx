/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();
    console.log(cart);

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (row) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className='text-center mb-6'>
                <h2 className='text-yellow-500 text-2xl'>---My Cart---</h2>
                <h2 className='text-3xl font-medium border-y-4 py-3'>WANNA ADD MORE?</h2>
            </div>
            <div className='flex justify-evenly uppercase font-bold items-center h-10 mb-2'>
                <h3 className='text-2xl'>Total Orders: {cart.length}</h3>
                <h3 className='text-2xl'>Total Price: ${total}</h3>
                <button className="rounded btn-sm text-white bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{row.name}</td>
                                <td className='text-end'>{row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="text-white bg-[#B91C1C] btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;