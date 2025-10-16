import React, { useContext } from 'react'
import { Appcontext } from '../App'


function Second() {


  let b=useContext(Appcontext)
  return (
    <div>
      <h1>Second page {b.name}</h1>
      <h1>{b.age}</h1>
    </div>
  )
}

export default Second
