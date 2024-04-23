import React from 'react'
import TableChild from './TableChild'
type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Modal({setShow}:Props) {
  return (
    <>
     <div className='w-full h-full bg-opacity-40 bg-gray-700 fixed  z-40 float-start top-0 bottom-0 left-0 right-0 flex justify-center items-center' style={{height:"100vh",width:"100vw"}}>
        <div className=' w-3/4 h-3/4 opacity-100 text-black flex justify-start items-start rounded-2xl flex-col bg-black'>
            <div className='flex flex-row-reverse w-full'>
            <button  onClick={()=>setShow(false)} className='  w-10 h-10 mx-10 my-4 rounded-md  border border-white overflow-hidden bg-yellow-300 hover:bg-yellow-400 displayFlex'>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
            </div>
        <div className='pt-12 w-full flex justify-center items-start'>
        <table className="w-11/12 divide-y bg-neutral-900 dark:divide-neutral-700 border  text-white">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase ">API key</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase ">Req</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase ">Address</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium  uppercase ">Action</th>    
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <TableChild/>
            <TableChild/>
            <TableChild/>
          </tbody>
        </table>
        </div>
        </div>
    </div> 
    </>
  )
}
