import React, { useState } from 'react';
import useData from '../useData';
import Card from '../Card';
import Loading from '../Loading';


const Apps = () => {
 const  [products,loading]= useData()
 const [search,setsearch] =useState((''))


 //console.log(search)
 const handleseach =(e)=>{
        setsearch(e.target.value)
      
       

 }
 const term = search.trim().toLocaleLowerCase()
 const searchproducts =term? products.filter(pro => pro.title.toLocaleLowerCase().includes(term)) : products
console.log(searchproducts)

if(loading ){
    return <Loading></Loading>

}
  

    return (
        <div>
         <div className='text-center py-5'>
                <h1 className='text-4xl font-bold mb-3'>Our All Applications</h1>
            <p className='text-gray-500 mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p></div>
            <div className='flex justify-between px-14 '>

                <p className='text-xl font-bold'>(<span>{searchproducts.length}</span>)Apps Found</p>

         <label className="input">
                 <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
             </svg>
             <input type="search"  placeholder="Search" onChange={handleseach} value={search}/>
          </label>
            </div>
            {searchproducts.length  == 0 ?
                (<h1 className='text-4xl py-16 text-blue-600 font-bold text-center'>No apps Found</h1>) :(
            <div className='grid grid-cols-1 md:grid-cols-4  px-10'>  {
                searchproducts.map(card => ( <Card card={card}></Card> ))
                }
                </div>
                )}
        </div>
    );
};

export default Apps;