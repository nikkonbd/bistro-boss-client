/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaShoppingBag } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/UseCart';
import { IoIosMenu } from "react-icons/io";

const DashBoard = () => {

    const [cart] = useCart();
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-[100vh] text-base-content bg-[#D1A054]">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to={'/dashboard/userhome'}><FaHome></FaHome>User Home</NavLink></li>
                        <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                        <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart>My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink></li>
                        {/* <li><NavLink><FaShoppingCart></FaShoppingCart>Add Review</NavLink></li>
                        <li><NavLink><FaShoppingCart></FaShoppingCart>My Booking</NavLink></li> */}
                        <div className='divider'></div>
                        <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to={'/menu'}><IoIosMenu></IoIosMenu>Menu</NavLink></li>
                        <li><NavLink to={'/shop/salads'}><FaShoppingBag></FaShoppingBag>Our Shop</NavLink></li>
                        <li><NavLink to={'/dashboard/contact'}><FaShoppingCart></FaShoppingCart>Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;