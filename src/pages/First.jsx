import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTostore } from '../Redux/UserSlice'
import { Link } from 'react-router'
function First() {

    const dispatch=useDispatch()

    const [state,setState]=useState()

    async function display() {
          const a=await axios.get('https://jsonplaceholder.typicode.com/users') 
          dispatch(addTostore(a.data))
setState(a.data)
    }

    useEffect(()=>{
display()
    },[])

  return (
    <div>
      {state?.map((li)=>(
        <h1>{li.name}</h1>
      ))}
      <Link to={'/second'}>Movet to second page</Link>
    </div>
  )
}

export default First
