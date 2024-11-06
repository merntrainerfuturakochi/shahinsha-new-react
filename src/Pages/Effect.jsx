import { useEffect, useState } from "react"
import axios from 'axios'
import {styled} from 'styled-components'

const Main=styled.div`
    width: 100%;
    min-height:100vh;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Sub=styled.div`

    background-color: lightgray;
    margin: 15px;
    border-radius: 14px;

`
const Title=styled.h3`
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

function Effect(){


    const [apiData,setApidata]=useState([])

    async function display(){
        const responseData=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')  
        console.log(responseData.data.categories);
        setApidata(responseData.data.categories)
     
    }

    useEffect(()=>{
     
  display()
      
    },[])


    
  console.log("api data",apiData);
  

    return(
        <Main>
        {apiData.map((li)=>(
            <Sub>
          <Title>{li.strCategory}</Title>
          <img src={li.strCategoryThumb} alt="" />
          </Sub>
        ))}

</Main>
    )
}

export default Effect