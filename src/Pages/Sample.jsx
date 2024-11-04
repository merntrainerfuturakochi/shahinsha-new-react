import { useState } from "react"
import Hello from "./Hello"
import {Header,Button1} from './Style.jsx'



function Sample (){

    console.log("componenet re-rendered");
    

  const [number,setNumber]=useState(100)
  const [clr,setClr]=useState('blue')


function display(){
    setNumber(number+1)
    setClr('green')
}
function display1(){
 setNumber(number>0 ? number-1 : 0)
 setClr('red')
  
}
function display2(){
    setNumber(0)
    setClr('yellow')
}

console.log("componenet re-rendered 123");
   
    return (
        <>
<Header style={{color:clr}}>{number}</Header>
<Button1 onClick={display}>Increment</Button1>
<button onClick={display1}>Decrement</button>
<button onClick={display2}>Re-set</button>
<Hello abc={setNumber} value={setClr}/>
</>
    )
}

export default Sample