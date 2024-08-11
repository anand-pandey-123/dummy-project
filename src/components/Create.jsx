import React, { useContext } from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom';
import { ProductContext } from '../utils/Context';



const Create = () => {
   const [products, setproducts]  = useContext(ProductContext);
  const[title, settitle]= useState("");
  const[image, setimage]= useState("");
  const[category, setcategory]= useState("");
  const[price, setprice]= useState("");
  const[description, setdescription]= useState("");

  const AddProducthandler =(e)=>{
    e.preventDefault();


    if(title.trim().length <5 || image.trim().length <5|| category.trim().length <5 || price.trim().length <1 || description.trim().length <5){
      alert("No field must be empty");
      return;
    }


    const product={
      title, image, category, price, description
    };
   setproducts([...products , product]);
   toast.success("New Product Added");

  }



  return (
    <form onSubmit={AddProducthandler} className=' flex flex-col items-center p-[5%] w-screen h-screen'>
      <h1 className='text-3xl w-1/2 mb-5 '>Add New Product</h1>
    <input type="text" 
    placeholder='Title' 
    className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3'
    onChange={(e)=> settitle(e.target.value)}
    value={title} />

   <input type="url" 
    placeholder='Image link' 
    className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3'
    onChange={(e)=> setimage(e.target.value)}
    value={image} />

  <div className='w-1/2 flex justify-between'>
    <input type="text" 
    placeholder='Category' 
    className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3'
    onChange={(e)=> setcategory(e.target.value)}
    value={category} />

   <input type="number" 
    placeholder='Price' 
    className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3 '
    onChange={(e)=> setprice(e.target.value)}
    value={price} />
  </div>
 
    <textarea name="" id="" rows="10" className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3 ' placeholder='Enter Product Description'
    onChange={(e)=> setdescription(e.target.value)}
    value={description}></textarea>


   <div className='w-1/2'>
      <button className='self-start py-2 px-5 border rounded border-blue-200 text-blue-400'>Submit</button>
   </div>
     





    </form>
  )
}

export default Create
