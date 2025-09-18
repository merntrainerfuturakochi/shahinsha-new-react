import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import './single.css'

function Single() {

  const a=useParams()

  const [state,setState]=useState()

  async function display(){
 const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${a.foodname}`)
 console.log("###############################",res.data.meals);
 setState(res.data.meals)
  }

  useEffect(()=>{
  display()
  },[])

  
  return (
    <div className='first'>
    {state?.map((li)=>(
      <Link to={`/xyz/${li.idMeal}`}>  <div className='second'>
      <h3>{li.strMeal}</h3>
      <img src={li.strMealThumb} alt="" />
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Single