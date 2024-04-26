import { useEffect, useState } from 'react'
import Card from '../components/Card'
import LineChart from '../components/LineChart'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import APIStats from '../components/APIStats'
import LogoutButton from '../components/LogoutButton'
type Keys = {
    active :Boolean,
    _id:String,
    APIkey : Number,
    requests:Number
}
export default function Home() {
    const navigate = useNavigate()
    const [keys,setKeys] = useState<[Keys]>([{_id:"",active:true,APIkey:0,requests:0}])
    const [show,setShow] = useState(false)
    const [name,setName] = useState('')
    const [loading , setLoading] = useState(true)
    const [credentials,setCredentials] = useState({requests:0,remaining:0,start:"",endTime:"",totalKeys:0})
    const point = 'http://localhost:4000'
    const getData = async()=>{
        const response = await fetch(`${point}/user/about`, {
        method: "GET", 
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(response.status === 401)
        return navigate('/')
      const data = await response.json()
      const {responce} = data
      setName(data.responce.name || '')
      setCredentials({requests:responce.requests,remaining:responce.remaining,start:responce.start,endTime:responce.end,totalKeys:responce.totalKeys})
      setKeys(data.responce.keys)
      setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[setShow,show])
  return (
    <>
    
     <section className='page bg-black py-24 text-white flex justify-start items-center flex-col'>
        {show ? <Modal setShow={setShow} APIkey={keys}/> :<></>}
            <div className=' w-3/4 px-14 my-2'>
           <LogoutButton/>
                {loading ?<div className='w-2/4 h-32 animate-pulse bg-neutral-900'></div>:<h1 className='text-4xl py-3'>Welcome back <span className='text-yellow-300 font-mono capitalize'>{name}</span>
                  
                </h1>
                }
              
            </div>
            { 
              loading ? <div className='w-4/5 animate-pulse bg-neutral-900 h-60 my-5'>

              </div>:
              <div className='flex justify-around items-center w-3/4 py-8  '>
              {<Card title='Requests' data={credentials.requests}/>}
              {<Card title='API keys' data={credentials.totalKeys}/>}
              {<Card title='days remaining' data={credentials.remaining}/>}
              </div>
            }
            {
              loading ? <div className='w-3/4 h-32 flex justify-around items-center' style={{height:"40vh"}}>
                <div className='w-7/12 animate-pulse bg-neutral-900 ' style={{height:"40vh"}}></div>
                <div className='w-1/4 h-64 ml-5 animate-pulse bg-neutral-900' style={{height:"40vh"}}></div>
              </div>:
              <div className='flex justify-around items-center w-3/4 py-10  '>
              <div className='text-white  rounded-lg  w-7/12 bg-neutral-900 overflow-hidden' style={{height:"40vh"}}>
               <LineChart/>
              </div>
             <APIStats setShow={setShow} Timeend={credentials.endTime} start = {credentials.start} />
              </div>
            }
           
        </section> 
        
    </>
  )
}
