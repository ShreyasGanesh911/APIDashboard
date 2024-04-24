import React, { useState } from 'react'
import Card from '../components/Card'
import APIList from '../components/APIList'
import LineChart from '../components/LineChart'
import Modal from '../components/Modal'

export default function Home() {
    const [show,setShow] = useState(false)
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        console.log("clicked")
        setShow(true)
    }

  return (
    <>
    
     <section className='page bg-black py-24 text-white flex justify-start items-center flex-col'>
        {show ? <Modal setShow={setShow}/> :<></>}
            <div className=' w-3/4 px-14 my-5'>
                <h1 className='text-4xl py-3'>Welcome back <span className='text-yellow-300 font-mono '>Shreyas</span></h1>
            </div>
           <div className='flex justify-around items-center w-3/4 py-8  '>
           {<Card title='Requests' data={89}/>}
           {<Card title='Latency' data={92}/>}
           {<Card title='days remaining' data={30}/>}
           </div>
           <div className='flex justify-around items-center w-3/4 py-10  '>
           <div className='text-white  rounded-2xl  w-7/12  bg-neutral-900' style={{height:"40vh"}}>
            <LineChart/>
           </div>
           <div className='text-white  rounded-2xl w-1/4 h-64 ml-5 bg-neutral-900 ' style={{height:"40vh"}}>
            <div className='relative '>
            
            <h1 className='text-center text-3xl py-2'>API Keys</h1>
            <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-1 px-2 rounded relative float-right bottom-10 mx-2" onClick={handleClick}>
                <div className='border w-5 my-1 border-black'></div>
                <div className='border w-5 border-black'></div>
                <div className='border w-5 my-1 border-black'></div>
            </button>
            </div>
            

           <div className='w-full bg-black  mb-2 text-center text-white flex items-center justify-around' >
                <p className='text-xl'>Key</p>
                <p className='text-xl'>Status</p> 
           </div>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
            <APIList/>
           </div>
           </div>
           
        </section> 
        
    </>
  )
}
