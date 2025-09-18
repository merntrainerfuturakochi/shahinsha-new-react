import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import {Link} from 'react-router'

function Home() {
  const [apivalue,setApivalue]=useState()
async function display() {
    const res=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log("******************************",res.data.categories );
setApivalue(res.data.categories)
}
useEffect(()=>{
 display()
},[])
console.log("api values",apivalue);
  return (
    <div className='main'>
{apivalue?.map((li)=>(
<Link to={`/abc/${li.strCategory}`}> <div className='sub'>
  <img src={li.strCategoryThumb} alt="" />
  <h3>{li.strCategory}</h3>
  </div>
  </Link> 
))}
    </div>
  )
}
export default Home