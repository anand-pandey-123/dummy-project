import React, { createContext, useState ,useEffect} from 'react'
import axios from './axios';


export const ProductContext = createContext();
const Context = (props) => {
  const [products, setProducts]= useState(null);

  const getproducts =async ()=>{
    try{
      const {data} =await axios("/products");
      setProducts(data);
    }
    catch(err){
      console.log(err);
    }
  }
 console.log(products);
  useEffect(()=>{
    getproducts();
  },[]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context
