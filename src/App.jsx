import React from 'react';
import './App.css'
import Home from './components/Home';
import {Route, Routes, useLocation } from "react-router-dom";
import Details from './components/Details';
import { Link } from 'react-router-dom';
import Create from './components/Create';

const App= ()=> {
   const {search , pathname} = useLocation();
  

  return (
    <>
     <div className='h-screen w-screen font-regular flex'> 
       {(pathname !="/React-project/" || search.length > 0) && (<Link to="/React-project/" className='text-red-400 absolute left-[20%] top-[3%] w-[80px] h-[40px] rounded  flex items-center text-center justify-center border border-red-300 hover:bg-red-400 hover:text-black hover:scale-110' >Home</Link>   
       )}
      
      <Routes>
        <Route path="/React-project/"  element={<Home/>}/>
        <Route path="/React-project/create"  element={<Create/>}/>
        <Route path="/React-project/details/:id"  element={<Details/>}/>
      </Routes>   
     </div>
    </>
  );
}

export default App
