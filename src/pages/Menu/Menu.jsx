/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import Popularmenu from '../Home/PopularMenu/Popularmenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" text="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div>
                <Popularmenu></Popularmenu>
            </div>
            <Cover img={menuImg} title="DESSERTS" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <div>
                <Popularmenu></Popularmenu>
            </div>
            <Cover img={menuImg} title="pizza" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <div>
                <Popularmenu></Popularmenu>
            </div>
            <Cover img={menuImg} title="our menu" text="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div>
                <Popularmenu></Popularmenu>
            </div>
            <Cover img={menuImg} title="our menu" text="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div>
                <Popularmenu></Popularmenu>
            </div>
        </div>
    );
};

export default Menu;