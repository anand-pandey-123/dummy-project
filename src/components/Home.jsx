import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home =()=>{
 const [products]= useContext(ProductContext);
 const {search}= useLocation();
 const category = decodeURIComponent(search.split("=")[1]);
  const [filterProducts, setfilterproducts]=useState(null);


 const getproductcategory =async ()=>{
  try{
   const {data}= await axios.get(`/products/category/${category}`);
   setfilterproducts(data);
  }catch(err){
    console.log(err);
  }
 }
 useEffect(()=>{
  if (!filterProducts || category=="undefined") setfilterproducts(products);
   if (category != "undefined") getproductcategory();

 },[category,products]);

console.log(filterProducts);
  return products ?(
    <>
    <Nav/>
    


    <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

      {filterProducts && filterProducts.map((p,i) =>(
          <Link key={p.id} to = {`/React-project/details/${p.id}`} className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex-col flex justify-center items-center'>
          <div className='mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110' 
          style={{backgroundImage: `url(${p.image})`}}>
    
          </div>
          <h1 className='hover:text-blue-500 text-sm font-semibold'>{p.title}</h1>
        </Link>
      ))}

    
    
   
   </div>
</> ) : (<Loading/>
  );
};

export default Home;