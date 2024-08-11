import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import axios from '../utils/axios';
import Loading from './Loading';

const Details = () => {
  const [product, setproduct]= useState(null);
  const {id}= useParams();
  // console.log(id);
   const getsingleproduct= async() =>{
    try{
      const {data}= await axios.get(`/products/${id}`)
      setproduct(data);

    }catch(err){
      console.log(err);
    }
   }

   useEffect(()=>{
     getsingleproduct();
   },[]);

  return product? (
    <div className='w-[70%] flex items-center h-[80%] m-auto py-[10%] bg-zinc-50 rounded-md'>
      <img 
      className='mr-5 object-contain h-[80%] w-[40%]'
      src={`${product.image}`} alt="" />
      <div className='content w-[50%]'>
        <h1 className='text-3xl font-bold'
        >{product.title}</h1>
        <h3 className='text-zinc-500 my-5'
        >{product.category}</h3><br></br>
        <h2 className='text-red-700 mb-3'>$ {product.price}</h2>
        <p className='italic font-semibold mb-[5%]'
        >{product.description}</p>
        <Link className='py-2 px-5 border rounded border-blue-200 text-blue-500 mr-10 hover:bg-blue-400 hover:text-black hover:scale-110' 
        >Edit</Link>
        <Link className='py-2 px-5 border rounded border-red-200 text-red-500 hover:bg-red-400 hover:text-black hover:scale-110'
        >Delete</Link>
      </div>
    </div>): (<Loading></Loading>
  );
}

export default Details
