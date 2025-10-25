import React from 'react';
import coinImg from '../assets/icon-ratings.png'
import { Download } from 'lucide-react';
import { Link } from 'react-router';

const Card = ({card}) => {
  const {image,title,id,ratingAvg,downloads} = card
    return (
        <Link to={`/details/${id}`}>
          <div className='p-4  duration-300 hover:-translate-y-2 '>
            <div className="card bg-base-100 shadow-sm " >
  <figure className='p-3'><img src={image} alt="" className=' bg-gray-100 p-3 ' /></figure>
  <div className="card-body">
<h2 className="card-title">{title}</h2>
    <div className="card-actions justify-between">
      <button className="btn bg-blue-200 text-blue-500"> <Download></Download>{downloads}</button>
        <button className="btn bg-orange-100 text-orange-500"><img src={coinImg} alt=""  className='h-4'/>{ratingAvg}</button>
    </div>
  </div>
</div>
        </div></Link>
    );
};

export default Card;