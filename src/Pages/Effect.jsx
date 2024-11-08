import { useEffect, useState } from "react"
import axios from 'axios'
import { styled } from 'styled-components'
import { Link } from "react-router-dom"

const Main = styled.div`
    width: 100%;
    min-height:100vh;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Sub = styled.div`

    background-color: lightgray;
    margin: 15px;
    border-radius: 14px;

`
const Title = styled.h3`
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

function Effect() {
    const [state,setState]=useState([])


    useEffect(function(){
        async function  display() {
        const responseDta=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php') 
        console.log("final answer",responseDta.data.categories);
      setState(responseDta.data.categories)
    }
    
    display()
},[])


    return (
<Main>
{state.map((li)=>{
    return(
      <Link to={`/detailpage/${li.strCategory}`}> <Sub>
<img src={li.strCategoryThumb} alt="" />
<Title>{li.strCategory}</Title>
        </Sub>
        </Link> 
        )
})}
</Main>
    )
}

export default Effect