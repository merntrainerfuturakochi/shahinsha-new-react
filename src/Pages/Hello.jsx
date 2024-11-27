import React, { useContext } from 'react'
import { UserContext } from './Stattemanagement'

function Hello() {
 const {finalAnswer} = useContext(UserContext)
 return (
    <div>
      {finalAnswer?.map((li)=>(
        <h1>{li.name}</h1>
      ))}
<h1>Hello page</h1>
    </div>
  )
}

export default Hello
