type Props = {
    title:string
    data:number
}
export default function Card({title,data}:Props) {
  return (
    <>
      <div className='text-white  rounded-2xl w-1/4 h-52 bg-neutral-900 displayFlex'>
            <div className=" w-5/6 h-5/6  displayFlex flex-col">
                <h1 className="text-7xl overflow-hidden text-center ">{data}</h1>
                <p className="pt-4">{title}</p>
            </div>
      </div>
    </>
  )
}
