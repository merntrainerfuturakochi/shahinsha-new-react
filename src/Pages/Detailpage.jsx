import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'


function Detailpage() {  
  const {id}=useParams()
  const navigate=useNavigate()

  setTimeout(()=>{
navigate('/')
  },5000)

  const [state,setState]=useState([])

  async function apiFetching(params) {
    var res=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log("id valuess.",res.data.meals);
    setState(res.data.meals)
    
  }

  useEffect(()=>{
  apiFetching()
  },[])





  return (
    <div>
{state?.map((li)=>(
  <div>
  <h3>{li.strArea}</h3>
  <h1>{li.strCategory}</h1>
  <img width={"250px"} height={"250px"} src={li.strMealThumb} alt="" />
  <p>{li.strInstructions}</p>
  </div>
))}
    </div>
  )
}

export default Detailpage