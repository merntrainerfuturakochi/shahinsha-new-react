import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import './home.css'

function Home() {


  const [state,setState]=useState([])

  async function hello(){

  var res=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
console.log("response value in backend",res.data.categories);
setState(res.data.categories)
  }

  useEffect(()=>{
  hello()
  },[])



  return (
    <div className='main'> 
{state?.map((li)=>(
 <Link to={`/abc/${li.strCategory}`}><div className='sub' key={li.idCategory}>
  <h3>{li.strCategory}</h3>
  <img className='image' src={li.strCategoryThumb} alt="" />
  <p>{li.strCategoryDescription}</p>
  </div>
  </Link> 
))}
    </div>
  )
}
export default Home