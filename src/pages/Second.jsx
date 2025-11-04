import React from 'react'
import { useSelector } from 'react-redux'

function Second() {
   const a=useSelector((state)=>state.shahinsha.shahishaData)
  return (
    <div>
     {a?.map((li)=>(
        <h1>{li.name}</h1>
     ))} 
    </div>
  )
}

export default Second
