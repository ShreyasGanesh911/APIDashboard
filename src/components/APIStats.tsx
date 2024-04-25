import React from 'react'
type Props = {
    setShow:React.Dispatch<React.SetStateAction<boolean>>,
    start:String,
    Timeend:String
}
export default function APIStats({setShow,start,Timeend}:Props) {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        setShow(true)
    }
  return (
    <>
                <div className='text-white  rounded-lg w-1/4 h-64 ml-5 bg-neutral-900 overflow-hidden ' style={{height:"40vh"}}>
            <div className='flex items-center flex-col '>
            
            <h1 className='text-center text-3xl py-2'>API Stats</h1>
            <div className='w-2/4 h-auto py-3  displayFlex '> 
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-2 rounded " onClick={handleClick}>Manage API</button></div>
            <div className='mt-9'>
                <p className='text-center'>Plan : <span className='text-yellow-300'>Basic</span></p>
            <p>Subscription start : <span className='text-yellow-300'>{start}</span></p>
            <p>Subscription end   : <span className='text-yellow-300'>{Timeend}</span></p>
                </div>
            </div>
            <div className='w-full displayFlex p-3 mt-3  '>
                <div className='bg-black w-11/12 text-center  displayFlex flex-col rounded-lg'>
                    <p className='py-2'>For More Info contact</p>
                     <a  href="mailto:someone@example.com" className='text-yellow-300 pb-2'>trainAPI@gmail.com</a></div>
            </div>
           </div>  
    </>
  )
}
