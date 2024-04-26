import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const point = 'https://apidashboard-backend.onrender.com'
type Responce = {
  date:String,
  requests:Number
}
type Data = {
  message:String,
  responce : [Responce],
  success: Boolean
}
export default function LineChart() {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  const [label,setLabel] = useState<String[]>()
  const [reqData,setReqData] = useState<Number[]>()
  const [result,setResult] = useState(true)
  const getData = async()=>{
    const response = await fetch(`${point}/user/allRequests`, {
      method: "GET", 
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if(response.status === 401)
      return navigate('/')
    const dates:Array<String> = []
    const reqs:Array<Number> = []
    const data:Data = await response.json()

    const responce:[Responce] = data.responce || []
    if(!responce.length){
      setLoading(false)
      return setResult(false)
    }
        
    responce.map((e)=>{
      return(
        dates.push(e.date) &&
        reqs.push(e.requests)
      )
        
    })
    setLabel(dates)
    setReqData(reqs)
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
    const data = {
        labels: label,
        datasets: [
          {
            label: 'Requests',
            data: reqData,
            fill: true,          
            borderColor: 'cyan' ,
            backgroundColor:"blue",
            pointRadius:5,
            tension:0.3,
            borderWidth:2
            
          }
        ],
        
      }

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Requests made per date"
        },
        legend: {
          display: true
        },

      },
      scales:{
        y: {
          ticks: {
            color: 'yellow',
            stepSize:2,
          }    
        },
        x:{
          ticks: {
            color: 'yellow'
          } 
        }
      }
      

    }
  return (
    <>
      {!loading ? <>
        <div className='w-full h-full displayFlex overflow-hidden p-2 text-black'>
      {result ? <Line data={data} options={options} />:<>
        <p className='text-gray-400 text-2xl py-2'>No requests have been made using this account </p>
      </>}
      </div>
      </> :
      <div className='w-full h-full displayFlex overflow-hidden p-2 text-black animate-pulse dark:bg-gray-900'></div>
      }
    </>
  )
}
