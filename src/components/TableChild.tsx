import React, { useState } from 'react'

export default function TableChild() {
  const [confirm,setConfirm] = useState(false)
  const handleCopyText = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    await navigator.clipboard.writeText("hello there")

  }
  const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    console.log("Clicked")
    confirm?setConfirm(false):setConfirm(true)
    
  }
  return (
    <>
       <tr>
              <td className="px-6 py-2 whitespace-nowrap text-sm font-medium col-span-2">John Brownswswss</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-green-500">Active</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">oewfuhpiwufhwpiufhpewfh</td>
              <td className="px-8 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400 px-3" onClick={handleCopyText}><i className="fa-regular fa-copy text-lg"></i></button>
                <button type="button" className={` items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${confirm ? 'hidden':"inline-flex"}  disabled:opacity-50 disabled:pointer-events-none dark:text-red-600 dark:hover:text-red-700 px-4`} onClick={handleDeleteClick}><i className="fa-solid fa-trash text-lg"></i></button>
               <div className='inline-flex'>
               <button type="button" className={`items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${!confirm ? 'hidden':"inline-flex"} disabled:opacity-50 disabled:pointer-events-none dark:text-red-600 dark:hover:text-red-700 px-2 `} onClick={handleDeleteClick} ><i className="fa-regular fa-circle-xmark text-lg"></i></button>
               <button type="button" className={`items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${!confirm ? 'hidden':"inline-flex"} disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-700 px-2`} ><i className="fa-solid fa-circle-check text-lg"></i></button>
               </div>
              </td>
            </tr>
    </>
  )
}
