import React from 'react'
import './Loader.css'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
       <h1 className='text-6xl'>
       <span class="loader"></span>
       </h1>
    </div>
  )
}

export default Loading
