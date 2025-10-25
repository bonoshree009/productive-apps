import React from 'react';
import coinImg from '../assets/icon-ratings.png'
import { Download } from 'lucide-react';

const Card = ({card}) => {
    return (
        <div className='p-4  duration-300 hover:-translate-y-2 '>
            <div className="card bg-base-100 shadow-sm " >
  <figure className='p-3'>
    <img
      src={card.image}
      alt="Shoes" className=' bg-gray-100 p-3 ' />
  </figure>
  <div className="card-body">
<h2 className="card-title">{card.title}</h2>
    <div className="card-actions justify-between">
      <button className="btn bg-blue-200 text-blue-500"> <Download></Download>{card.downloads}</button>
        <button className="btn bg-orange-100 text-orange-500"><img src={coinImg} alt=""  className='h-4'/>{card.ratingAvg}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;