import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';

const useData = () => {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const [error,seterror] = useState(null)
     useEffect(()=>{
        setloading(true)
       Axios.get('../data.json').then(res => setproducts(res.data))
       .catch(err => seterror(err))
       .finally(() =>setloading(false))

     }, [])
    return [products,loading,error];
};

export default useData;