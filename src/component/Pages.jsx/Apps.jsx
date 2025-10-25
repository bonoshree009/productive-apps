import React from 'react';
import useData from '../useData';
import Card from '../Card';

const Apps = () => {
 const  [products,loading,error]= useData()
    console.log(products)

    return (
        <div>
         <div className='text-center py-5'>
                <h1 className='text-4xl font-bold mb-3'>Our All Applications</h1>
            <p className='text-gray-500 mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p></div>
            <div className='flex justify-between px-14 '>
                <p className='text-xl font-bold'> <span>10</span> Apps Found</p>
                <input type="text" placeholder='Search Apps' className='border-2 border-gray-200 p-2'/>
            </div>
           <div className='grid grid-cols-2 md:grid-cols-4  px-10'>  {
                products.map(card => (
                    <Card card={card}></Card> 
                ))
             }</div>
        </div>
    );
};

export default Apps;