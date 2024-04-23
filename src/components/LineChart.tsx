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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


export default function LineChart() {
    const data = {
        labels: [
          '10/04/2018', '10/05/2018', 
          '10/06/2018', '10/07/2018', 
          '10/08/2018', '10/09/2018', 
          '10/10/2018', '10/11/2018', 
          '10/12/2018', '10/13/2018', 
          '10/14/2018', '10/15/2018'
        ],
        datasets: [
          {
            label: 'Temperature',
            data: [22,19,27,23,22,24,17,25,23,24,20,19],
            fill: false,          // Don't fill area under the line
            borderColor: 'green'  // Line color
          }
        ]
      };
  return (
    <>
      <div className='w-full h-full displayFlex'>
      <Line data={data}/>
      </div>
    </>
  )
}
