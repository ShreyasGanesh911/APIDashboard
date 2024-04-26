import React, { useEffect,useState } from 'react'
import TableChild from './TableChild'
import Link from './Link'
import CreateAPI from './CreateAPI'
import { useNavigate } from 'react-router-dom'
import LoadingTable from './Loading/LoadingTable'
const point = 'http://localhost:4000'
type Keys = {
  active :Boolean,
  _id:String,
  APIkey : Number,
  requests:Number
}
type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    APIkey:[Keys]
}

export default function Modal({setShow,APIkey}:Props) {
  const [update,setUpdate] = useState(false)
  const [loading,setLoading] = useState(true)
  const [apikeys,setApiKeys] = useState<[Keys]>([{_id:"",active:true,APIkey:0,requests:0}])
  const navigate = useNavigate()
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
    const {keys} = data.responce
    setApiKeys(keys)
    setLoading(false)

  }

  
  useEffect(()=>{
    getData()
  },[setUpdate,update])
  return (
    <>
     <div className='w-full h-full bg-opacity-40 bg-gray-700 fixed  z-10 float-start top-0 bottom-0 left-0 right-0 flex justify-center items-center rounded-sm' style={{height:"100vh",width:"100vw"}} >
        <div className=' w-3/4 h-3/4  opacity-100 text-black flex  justify-start items-center rounded-2xl flex-col bg-black '>
            <div className='flex flex-row-reverse w-full z-50 mb-6 py-2 overflow-hidden bg-black rounded'>
            <button  onClick={()=>setShow(false)} className='  w-10 h-10 mx-10 my-8 rounded-md Z-50  border  border-white overflow-hidden bg-yellow-300 hover:bg-yellow-400 displayFlex'>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div>
        <div className={`${update} pt-36 h-auto  w-3/4 bg-black  flex justify-center items-center py-5  flex-col absolute rounded pb-12`}>
        {
            loading ? <LoadingTable/>:<>
                      {
            apikeys.length >0 ?
            <>
                    <table className="w-11/12 divide-y bg-neutral-900 dark:divide-neutral-700 border h-auto  text-white">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-5 text-start text-xs font-medium w-1/5  uppercase ">Name</th>
              <th scope="col" className="px-6 py-5 text-start text-xs font-medium w-1/5  uppercase ">Status</th>
              <th scope="col" className="px-6 py-5 text-start text-xs font-medium w-1/5  uppercase ">Req</th>
              <th scope="col" className="px-6 py-5 text-start text-xs font-medium w-1/5  uppercase ">API KEY</th>
              <th scope="col" className="px-6 py-5 text-end text-xs font-medium w-1/5 uppercase ">Action</th>    
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {
              apikeys.map((e)=>{
                return (<TableChild name={e.APIkey.toString()} APIKey={e._id} req={e.requests} status={e.active} setUpdate ={setUpdate} update={update}/>)
              })
            }
 

          </tbody>
        </table>
            </>:
            <div className={`${update}  h-auto  w-11/12 bg-neutral-900  flex justify-center items-center   flex-col  py-12`}>
                <p className='text-gray-400 text-6xl p-2 overflow-hidden'>No API Keys </p>
                <p className='text-white p-3'>Try creating one to get started</p>
            </div>
          }
            </>
        }
        { 
          loading ? <LoadingTable/> :<CreateAPI setUpdate ={setUpdate} update={update}/>
        }
            
            { 
          loading ? <LoadingTable/> :<Link/>
        }

        </div>            
      
        </div>
    </div> 
    </>
  )
}
