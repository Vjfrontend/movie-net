import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100} w-full absolute '>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Movie Net</h1>
      <div>
        <button className='text-white pr-4'>sign in</button>
        <button className='bg-red-600 px-6 py-2 rounded  cursor-pointer text-white'>sign up</button>


      </div>
    </div>
  )
}


