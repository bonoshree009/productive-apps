import React from 'react';
import Banner from './Banner';
import useData from './useData';
import Card from './Card';
import { Link, NavLink } from 'react-router';

const Home = () => {
    const  [products,loading,error]=useData()
    
    const homedata = products.slice(0,8)
    return (
        <div>
            <Banner></Banner>
            <div className='text-center py-5'>
                <h1 className='text-4xl font-bold mb-3'>Trending Apps</h1>
            <p className='text-gray-500 mb-4'>Explore All Trending Apps on the Market developed by us</p></div>
           <div className='grid grid-cols-2 md:grid-cols-4  px-10'>  {
                homedata.map(card => (
                    <Card card={card}></Card>
                ))
             }</div>
 <div className='flex justify-center '> <button className='btn text-2xl px-10 py-8 bg-linear-to-r from-[#632EE3]
  to-[#9F62F2] text-white text center items-center my-5'><NavLink to='./apps'>See All</NavLink> </button> 
</div>



        </div>
    );
};

export default Home;