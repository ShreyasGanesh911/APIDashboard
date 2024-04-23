import React from 'react'

export default function Footer() {
  return (
    <>
     <section className='w-full h-72 bg-black border-t text-white displayFlex flex-col' >
     {/* <h1 className='h-5/6  displayFlex px-10 mx-20 from-stone-50 text-2xl font-semibold text-yellow-300 font-mono'> Train API </h1>
     <hr className='w-3/4'/>
     <p className='my-6 overflow-hidden'>All rights reserved</p> */}
     <div className='w-3/4 h-5/6  flex justify-evenly items-center'>
        <div className='w-1/3 border h-4/5 displayFlex flex-col '>
        <h1 className='   text-center  from-stone-50 text-2xl font-semibold text-yellow-300 font-mono'> Train API </h1>
        <p className='my-6 overflow-hidden'>Fueling Growth Through <span className='font-mono'>Seamless</span> Connections.</p>
        </div>
        <div className='w-1/4  h-4/5 displayFlex bg-slate-900 rounded'>
            <div className='w-9/12 h-5/6 '></div>
        </div>
        <div className='w-1/4  h-4/5 displayFlex bg-slate-900 rounded'>
            <div className='w-9/12 h-5/6  displayFlex flex-col '>
            <div className='displayFlex my-3'><i className="fa-solid fa-envelope text-4xl"></i></div>
            <p className='text-yellow-300 text-center text-xl'>contact@trainAPI.com</p>
            </div>
        </div>
     </div>
     <hr className='w-3/4' />
     <p className='font-semibold py-3'>© 2024 TrainAPI All rights reserved</p>
    </section> 
    </>
  )
}
//Fueling Growth Through Seamless Connections.