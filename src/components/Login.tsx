import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import {toastWarning,toastError } from '../Toast';
const point = 'https://apidashboard-backend.onrender.com'
type Props={
    form:boolean,
    setForm :React.Dispatch<React.SetStateAction<boolean>>
}
type Data = {
  success:Boolean,
  message:String
}
export default function Login({form,setForm}:Props) {
    const navigate = useNavigate()
    const [show,setShow] = useState('password')
    const [password,setPassword] = useState('123456789')
    const [email,setEmail] = useState('trainapiisnow@gmail.com')
    const [visibility,setVisibility] = useState('show')
    const [loading,setLoading] = useState(false)

    const handlePasswordVisibility = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        show === 'password' ? setShow('text'): setShow('password')
        visibility === "show" ? setVisibility("hide"): setVisibility("show")
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(email === "")
        return toastWarning("Can't leave email empty")
      if(password === "")
        return toastWarning("Can't leave password empty")
      setLoading(true)
      try{
        const response = await fetch(`${point}/user/login`, {
          method: "POST", 
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({password,email})
        })
        const data:Data = await response.json()
        if(data.success){
         
          return navigate('/dashboard')
        }
          
        
        else if( response.status === 401 || 404  ){
          setTimeout(()=>{setLoading(false)},500)
          return toastWarning(data.message)
        }
            
         
        else 
        return toastError("Internal Server error")
      }catch(err){
        console.log(err)
        toastError("Internal Server error")
      }

    }
  return (
    <>
      <form className={` px-14  bg-neutral-900 rounded-2xl w-3/4 h-4/5  flex flex-col justify-center ${loading?'cursor-wait':''}`} onSubmit={handleSubmit}>
              <h1 className=' text-4xl overflow-hidden font-semibold my-3 overflow-y-hidden'>Welcome back !</h1>
              <p className='py-3'>Don't have an account!? <span className='text-red-500 underline'>< button className='text-lg underline' onClick={()=>{setForm(false)}}>Create Account</button></span></p>
              <div className='flex justify-center items-start flex-col'>
               <div >
               <label htmlFor="email" className=' text-white tracking-wide text-lg overflow-y-hidden' >Email:</label>
               </div>
                <div className='w-8/12'>
                <input className='border border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400 text-black' placeholder='Your Email Address' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
              </div>
              <div className='flex justify-center items-start flex-col mt-3'>
               <div>
               <label htmlFor="password" className='  tracking-wide text-lg text-white overflow-y-hidden' >Password:</label>
               </div>
                <div className='w-3/4 flex items-center overflow-y-hidden'>
                <input className='border border-slate-400 w-full p-3 my-3 rounded outline-slate-400 tracking-wide text-black ' placeholder='Enter Password' type={show} value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="border border-slate-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label relative right-14" onClick={handlePasswordVisibility} >{visibility}</button>
                </div>
              </div>
              <div className='flex justify-center items-start flex-col mt-3 p-10'>
            <p className='invisible'> q</p>
              </div>
              <div className='flex flex-row-reverse w-full my-3 px-3 overflow-y-hidden'>
                <button className='bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded'>Login</button>
              </div>
              <ToastContainer />
        </form> 
       

    </>
  )
}
