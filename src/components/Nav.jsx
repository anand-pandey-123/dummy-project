import React from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Nav = ()=>{
  const [products]= useContext(ProductContext);
  let distinct_category= products && products.reduce((acc, cv)=>[...acc,cv.category],[]);
  distinct_category= [...new Set(distinct_category)];
  // console.log(distinct_category);

  const color =()=>{
    return `rgba(${(Math.random()*255).toFixed()},
    ${(Math.random()*255).toFixed()},
    ${(Math.random()*255).toFixed()},0.4)`;
  };
  // console.log(color());


    return(
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
      <a className='py-2 px-5 border rounded border-blue-200 text-blue-400 hover:bg-blue-300 hover:text-black hover:scale-110' 
         href="/React-project/create">Add new Product</a>
      <hr className='w-[80%] my-3'/>
      <h1 className='text-2xl   w-[80%]  text-bold mb-3'>Category Filter</h1>
      <div className='w-[80%]' >
          {distinct_category.map((c,i)=>(
             <Link  key={i} to={`/React-project/?category=${c}`} className=' mb-3 flex items-center hover:scale-105'> 
             <span style={{backgroundColor:color()}} className='mr-2 w-[15px] h-[15px]  rounded-full '></span>
           {c}</Link>
          ))}

      </div>
         
     </nav>
    );
}

export default Nav;