import React, { useContext } from 'react'
import { Userreducer } from './Stattemanagement'


function Hello() {
const {state,dispatch}=useContext(Userreducer)

function removedatas(){
  dispatch(null)
}
 return (
    <div>
  {state?.map((li)=>(
    <>
    <h3>{li.name}</h3>
    </>
  ))}

  <button onClick={removedatas}>Remove datas</button>
    </div>
  )
}

export default Hello
