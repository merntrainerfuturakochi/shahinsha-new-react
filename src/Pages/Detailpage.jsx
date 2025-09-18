import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detailpage() {

  const [state,setState]=useState()

  const a=useParams()

  console.log(a.id);

 async function display(){
  const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${a.id}`)
  console.log("-------------------",res.data.meals);
  setState(res.data.meals)
  }

  useEffect(()=>{
  display()
  },[])



  
  return (
    <div>
      {state?.map((li)=>(
        <>
        <h3>Area ={li.strArea}</h3>
        <h3>category ={li.strCategory}</h3>
        <h3>name ={li.strMeal}</h3>
        <img src={li.strMealThumb} alt="" />
<a href={li.strSource}>Moredetails</a>
        </>
      ))}
    </div>
  )
}

export default Detailpage