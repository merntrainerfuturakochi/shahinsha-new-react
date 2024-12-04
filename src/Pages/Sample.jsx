import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Userreducer } from './Stattemanagement';


const Sample = () => {

  const {dispatch}=useContext(Userreducer)

  const [state,setState]=useState([])

  console.log("first state value",state);
  
 async function display(){
    try{
      const responseData=await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(responseData.data);
      dispatch(responseData.data)
      setState(responseData.data)
       }catch(err){
      console.log(err);
      
        }
  }

useEffect(()=>{
display()
 
},[])




console.log("second state value",state);


return (
    <>
    {state.map((li)=>(
      <h1>Name : {li.name}</h1>
    ))}
<br></br>  
<br></br>
<Link to={'/hello'}>Connect to hello page</Link>
<br></br>
<br></br>
<Link to={'/hai'}>Connect to hai page</Link>
</>

  )
}

export default Sample