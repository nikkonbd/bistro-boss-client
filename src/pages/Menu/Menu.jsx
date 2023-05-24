/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import UseMenu from '../../Hooks/UseMenu';
import MenuCategory from './MenuCategory';
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = UseMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" text="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div>
                <div className='mx-auto text-center md:w-3/12 mb-8 mt-8'>
                    <p className='text-yellow-500 pb-3'>------Don't miss------</p>
                    <h2 className='text-4xl font-medium border-y-4 py-3'>TODAY'S OFFER</h2>
                </div>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* desserts menu items */}
            <MenuCategory
                items={desserts}
                title='desserts'
                text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                coverImg={dessertBg}
            ></MenuCategory>
            <div>
            </div>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title='pizza'
                text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                coverImg={pizzaBg}
            ></MenuCategory>
            <div>
            </div>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title='salads'
                text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                coverImg={saladBg}
            ></MenuCategory>
            <div>
            </div>
            {/* salad menu items */}
            <MenuCategory
                items={soup}
                title='soups'
                text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                coverImg={soupBg}
            ></MenuCategory>
            <div>
            </div>
        </div>
    );
};

export default Menu;