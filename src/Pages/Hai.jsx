import React, { useContext } from 'react'
import { Userreducer } from './Stattemanagement'

function Hai() {
const {state}=useContext(Userreducer)

  
  return (
<>
{state?.map((li)=>(
  <h1>{li.name}</h1>
))}
</>
  )
}

export default Hai
