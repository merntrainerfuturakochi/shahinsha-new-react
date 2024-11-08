import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components'

const Main = styled.div`
    width: 100%;
    min-height:100vh;
    background-color: #391307;

`
function Detailpage() {
    const [state,setState]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        async function  display() {
            const responseDta=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php') 
            console.log("final answer",responseDta.data.categories);
          setState(responseDta.data.categories)
        }
        
        display()
    
    },[])

    setTimeout(()=>{
navigate('/')
    },5000)

    const {name}=useParams()

    console.log("url values",name);
    console.log("api values",state);

   const filterredvalues= state.filter((li)=>{
        return li.strCategory==name
    })
    console.log("final answer in filtered value",filterredvalues);
    
    
  return (
    <Main>
        {filterredvalues.map((li)=>(
            <>
            <img src={li.strCategoryThumb} alt="" />
            <h3 style={{color:"wheat"}}>{li.strCategory}</h3>
            <p style={{color:"wheat"}}>{li.strCategoryDescription}</p>
            </>
        ))}
    </Main>
  )
}

export default Detailpage