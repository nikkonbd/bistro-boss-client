/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {
                noNavbarFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;