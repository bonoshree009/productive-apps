import React from 'react';
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center my-7'>
           <p className='text-9xl font-bold text-blue-400 flex items-center'>L
            <img src={logo} alt="" className=" h-24 animate-spin"/>
            Ding</p>
        </div>
    );
};

export default Loading;