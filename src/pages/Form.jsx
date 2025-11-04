import React, { useState } from 'react'

function Form() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    function display(e){
        e.preventDefault()
        console.log(name,email,password);
        
    }

  return (
    <div>
        <form action="" onSubmit={display}>
      <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='enter passwprd' onChange={(e)=>setPassword(e.target.value)}/>
      <input type="submit" value={'click'}/>
      </form>
    </div>
  )
}

export default Form
