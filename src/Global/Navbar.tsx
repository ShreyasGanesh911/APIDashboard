import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav className='fixed top-0 text-white z-20 bg-black bg-opacity-90 border-b'  style={{width:"100vw"}}>
        <div className='  h-24 flex justify-start items-center  '>
            <h1 className='h-5/6  displayFlex px-10 mx-20 from-stone-50 text-2xl font-semibold text-yellow-300 font-mono'> Train API </h1>
        </div>    
    </nav> 
    </>
  )
}
