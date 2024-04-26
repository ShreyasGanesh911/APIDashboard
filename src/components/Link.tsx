import React from 'react'
const point = 'http://localhost:4000'
export default function Link() {
    const link = `${point}/user/make?authKey=[ Your key here  ]`
    const handleCopyText = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        await navigator.clipboard.writeText(link)
    
      }
  return (
    <>
      <div className='w-11/12 bg-neutral-900 mt-12 rounded flex flex-col justify-center items-center p-6 min-h-44 h-auto'>
          <h2 className='text-white px-4 text-xl  font-normal w-full'>How to use </h2>

          <div className='w-full bg-black h-20 displayFlex text-white mt-6'>
            <div className='w-5/6  h-4/6 displayFlex'>
           <h1 className='bg-neutral-900 p-3'> {link}</h1>
           
           <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400 px-3" onClick={handleCopyText}><i className="fa-regular fa-copy text-lg"></i></button>
            </div>
          </div>
        </div>  
    </>
  )
}
