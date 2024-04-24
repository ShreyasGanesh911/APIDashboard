import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function Landing() {
    const [form , setForm] = useState(true)
  return (
    <>
     <section className='page bg-black py-24 text-white flex justify-center items-center flex-col'>
     <div className=' w-full h-3/4 flex justify-around ' style={{height:"90vh"}} >
      <div className=' w-1/2 h-full  bg-black flex justify-center items-center '> 
        <div className='w-11/12 h-full  flex justify-center items-center'>
          <div className='displayFlex w-full h-5/6 bg-orange-400 flex-col'  >
            <h1 className='text-6xl p-3'>Train API</h1>
            <p className='text-xl pb-2  '>Fueling Growth Through Seamless Connections.</p>
            <hr className='w-3/4 py-2' />
            <p>Since 2022</p>
        </div>
        </div>
      </div>
      <div className=' w-1/2 h-full flex justify-center items-center bg-black'>
        {
            form ?
        <Login form = {form} setForm={setForm}/>:
        <Signup form = {form} setForm={setForm}/>
}
        
        
      </div>
      </div>  

    </section> 
    </>
  )
}
