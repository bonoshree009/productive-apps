import React from 'react';
import bannarImg from '../assets/hero.png'
import playstoreImg from '../assets/google-play-store-logo_1273375-804.jpg'
import appsotreImg from '../assets/App_Store_(iOS).svg.png'


const Banner = () => {
    return (
        <div className='text-center pt-9 constiner max-auto bg-gray-200'>
         <h1 className='text-6xl font-bold '>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
         <p className='text-gray-400 my-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
         <button className='btn font-bold bg-white'> <img src={playstoreImg} alt=""  className='h-8 '/><a href='https://play.google.com/store/games?hl=en'>Google Play</a></button>
         <button  className='btn font-bold bg-white ml-4'> <img src={appsotreImg} alt=""  className='h-5'/><a href='https://www.apple.com/app-store/'>App store</a></button>
         <div className='flex items-center justify-center mt-4'>  <img src={bannarImg} alt=""  className=''/></div>

         <div className='bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white py-16'>
            <h1 className='text-3xl font-bold mb-4'>Trusted by Millions, Built for You</h1>
           <div className='flex justify-around items-center '> 
            <div><p>Total Downloads</p> <h1 className='text-5xl font-bold'>29.6M</h1> <p>21% more than last month</p></div>
             <div><p>Total Reviews</p> <h1 className='text-5xl font-bold'>906K</h1> <p>21% more than last month</p></div>
              <div><p>Active Apps</p> <h1 className='text-5xl font-bold'>132+</h1> <p>31 more will Launch</p></div>
              </div>
         </div>
        </div>
    );
};

export default Banner;