import React from 'react';
import { useParams } from 'react-router';
import useData from './useData';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import Loading from './Loading';

const CardDetails = () => {
    const {id} = useParams()
    const [products] =useData()
   
    const detailsData = products.find(p => p.id == id)
      if (!detailsData) {
    return <div className="text-center text-gray-500 mt-10"><Loading></Loading></div>;
  }
    console.log(detailsData)
    return (
        <div className='bg-gray-100 py-8 p-20 '>
           <div className='flex gap-10  items-center py-14 border-b-2 border-gray-400'>
            <div className='bg-white p-6'><img src={detailsData.image} alt="" className='h-[300px]' /></div>
            <div>
                <h1 className='text-3xl font-bold'>{detailsData.title}</h1>
                <p className='text-gray-400 mb-3'>Develop By <span className='text-blue-500'>{detailsData.companyName}</span></p>
                <  hr />
                <div className='flex gap-10 my-5 justify-between items-center'>
                   <div>
                    <img src={downloadImg} alt="" />
                   <p className='mt-3'>Downloads</p>
                   <p className='text-3xl font-bold mt-3'>{detailsData.downloads}</p>
                   </div>


                     <div>
                    <img src={ratingImg} alt="" />
                   <p className='mt-3'>Average Rating</p>
                   <p className='text-3xl font-bold mt-3'>{detailsData.ratingAvg}</p>
                   </div>

                     <div>
                    <img src={reviewImg} alt="" />
                   <p className='mt-3'>Downloads</p>
                   <p className='text-3xl font-bold mt-3'>{detailsData.reviews}</p>
                   </div>
                </div>
                <button className='btn bg-green-300 text-white'>Install Now</button>
            </div>
           </div>
           <p className='mt-5 font-bold text-3xl'>Ratings</p>
           
        </div>
    );
};

export default CardDetails;
