import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const point = 'http://localhost:4000'
type Props = {
  name:String ,
  req:Number,
  status:Boolean,
  APIKey:String,
  setUpdate:React.Dispatch<React.SetStateAction<boolean>>,
    update:Boolean
}
export default function TableChild({name,status,req,APIKey,setUpdate,update}:Props) {
  const navigate = useNavigate()
  const [confirm,setConfirm] = useState(false)
  const handleCopyText = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    await navigator.clipboard.writeText(APIKey.toString())

  }
  const handleDeleteClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    confirm?setConfirm(false):setConfirm(true)
    
  }
  const handleConfirmDelete = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    setConfirm(false)
    const response = await fetch(`${point}/user/deleteKey`, {
      method: "DELETE", 
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({_id:APIKey})
    })
    if(response.status === 401)
      return navigate('/')
    const data = await response.json()
    update ? setUpdate(false):setUpdate(true)
  }
  return (
    <>
       <tr>
              <td className="px-6 py-2 whitespace-nowrap text-sm font-medium col-span-2">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-start text-green-500">{status?"Active":"Inactive"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">{req.toString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">{APIKey}</td>
              <td className="px-8 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400 px-3" onClick={handleCopyText}><i className="fa-regular fa-copy text-lg"></i></button>
                <button type="button" className={` items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${confirm ? 'hidden':"inline-flex"}  disabled:opacity-50 disabled:pointer-events-none dark:text-red-600 dark:hover:text-red-700 px-4`} onClick={handleDeleteClick}><i className="fa-solid fa-trash text-lg"></i></button>
               <div className='inline-flex'>
               <button type="button" className={`items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${!confirm ? 'hidden':"inline-flex"} disabled:opacity-50 disabled:pointer-events-none dark:text-red-600 dark:hover:text-red-700 px-2 `} onClick={handleDeleteClick} ><i className="fa-regular fa-circle-xmark text-lg"></i></button>
               <button type="button" className={`items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${!confirm ? 'hidden':"inline-flex"} disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-700 px-2`} onClick={handleConfirmDelete} ><i className="fa-solid fa-circle-check text-lg"></i></button>
               </div>
              </td>
            </tr>
            
    </>
  )
}
