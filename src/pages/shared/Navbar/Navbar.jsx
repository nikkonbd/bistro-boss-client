/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/UseCart';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact US</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/shop/salads'}>Our Shop</Link></li>
        <li><Link to={'/secret'}>Secret</Link></li>
        <li><Link to={'/dashboard/mycart'}>
            <button className="flex gap-1">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {
            user ? <>
                <li><span>{user?.displayName}</span></li>
                <li><Link><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></Link></li>
            </> : <li><Link to={'/login'}>Login</Link></li>
        }
    </>
    return (
        <div className=''>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navItems}
                        </ul>
                    </div>
                    <div className='text-center'>
                        <a className="normal-case text-xl">Bistro Boss</a>
                        <p>Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;