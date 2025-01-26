import React, { useState } from 'react'

function Uradio() {
    const [selected, setSelected] = useState<boolean>(false)
  return (
    <div onClick={()=>setSelected(!selected)}  className=' cursor-pointer w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ' >
       {
        selected && ( <div className=' w-[12.8px] h-[12.8px] border-[0.8px] border-black bg-[#EECF1C] rounded-full ' ></div>)
       }
    </div>
  )
}

export default Uradio
