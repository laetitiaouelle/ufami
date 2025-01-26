import React, { useState } from 'react'

function Ubox() {
    const [selected, setSelected] = useState<Boolean>(false)
  return (
    <div onClick={()=>setSelected(!selected)}  className=' cursor-pointer w-6 h-6 border-[1px] border-black flex items-center justify-center ' >
       {
        selected && ( <div className=' w-[12.8px] h-[12.8px] border-[0.8px] border-black bg-[#EECF1C] rounded-full ' ></div>)
       }
    </div>
  )
}

export default Ubox