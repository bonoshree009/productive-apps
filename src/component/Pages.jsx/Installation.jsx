import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router';


const Installation = () => {
    const [installApp,setinstallApp] =useState([])
    const [sortorder,setsortorder] =useState('None')

    useEffect(()=>{
        const saveList = JSON.parse(localStorage.getItem('install')) ;
            if(saveList){
                setinstallApp(saveList)
            }
    
    },[])


     const sortitems= (()=>{
        if (sortorder === 'hightolow'){
            return [...installApp].sort((a,b) => b.size - a.size)
        }
        else if (sortorder === 'lowtohigh'){
             return [...installApp].sort((a,b) => a.size - b.size)
        }
        else{
            return installApp
        }
     }) ()   //iffe-function

     const handleremove = (id)=>{
            toast("App Uninstalled!");
                  
                const existingList = JSON.parse(localStorage.getItem('install'))
                let updateList = existingList.filter(p=> p.id !== id)
                setinstallApp(updateList)
                localStorage.setItem('install',JSON.stringify(updateList))

     }
    return (
        <div >
         <div className='text-center py-5'>
                <h1 className='text-4xl font-bold mb-3'>Your Installed Apps</h1>
            <p className='text-gray-500 mb-4'>Explore All Trending Apps on the Market developed by us</p></div>

             <div className='flex justify-between  items-center px-14 '>

                <p className='text-xl font-bold'><span>{sortitems.length}</span> Apps Found</p>
                        <div className="dropdown">
          <label className='w-full'> <select  className=' select select-bordered' value={sortorder} onChange={e=>  setsortorder(e.target.value)}>
    <option value='None'> Sort By Size</option>
     <option value={'hightolow'}>High TO Low</option>
      <option value={'lowtohigh'}>Low TO High</option>
  </select></label>
</div>
            </div>
                       {
                        sortitems.map(app=>{
                          return ( 
                          <div className='flex flex-col md:flex-row justify-between p-4 mx-2 md:mx-10 items-center my-6 bg-gray-200 '> 


                     <div className='flex  gap-2 :gap-10  items-center  '>
                       <div className='bg-white p-6'><img src={app.image} alt="" className=' h-5 md:h-[60px] ' /></div>
                      <div>
                <h1 className='text-xl font-bold'>{app.title}</h1>
                <p className='text-gray-400 mb-3'>Develop By <span className='text-blue-500'>{app.companyName}</span></p>
                
                <div className='flex flex-row gap-3  justify-between items-center'>
                   <div className='flex items-center gap-1'>
                    <img src={downloadImg} alt=""  className='h-2.5 md:h-5'/>
                  
                   <p className=' font-bold mt-3'>{app.downloads}</p>
                   </div>
                   
                     <div className='flex items-center gap-1'>
                    <img src={ratingImg} alt=""  className='h-2.5 md:h-5' />
                  
                   <p className=' font-bold mt-3'>{app.ratingAvg}</p>
                   </div>

                     <div className='flex items-center gap-1'>
                    
                   
                   <p className=' font-bold mt-3'>{app.size} MB</p>
                   </div>
                </div>
            </div>
           </div>



                                <div>
                                   
                                    <button className='btn p-3 bg-green-500 text-white' onClick={()=> handleremove(app.id)}>Uninstall</button>
                                     
                                </div>
                            
                            </div>
                        )} )
                       }
           <ToastContainer />
          <div className='flex justify-center my-5'> <NavLink to='/' className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go To Home</NavLink></div>
        </div>
    );
};

export default Installation;