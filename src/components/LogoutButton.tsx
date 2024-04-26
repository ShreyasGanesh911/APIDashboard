import React from 'react'
import { useNavigate } from 'react-router-dom'
const point = 'http://localhost:4000'
export default function LogoutButton() {
    const navigate = useNavigate()
    const handleClick = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const response = await fetch(`${point}/user/logout`, {
            method: "GET", 
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.json()
          if(data.success)
            return navigate('/')
    }
  return (
    <>
       <div className='w-full flex flex-row-reverse'><button className='border border-black text-black  font-bold py-2 px-3 rounded bg-yellow-300 hover:bg-yellow-400' onClick={handleClick}>Logout</button></div>
    </>
  )
}
