import React from 'react';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
          <img src={errorImg} alt="" />
          <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
          <p className='text-gray-500'>The page you are looking for is not available.</p>
           <button className='btn text-2xl px-10 py-8 bg-linear-to-r from-[#632EE3]
        to-[#9F62F2] text-white text center items-center my-5'><Link to='/'>Go Back</Link> </button>
        </div>
    );
};

export default ErrorPage;