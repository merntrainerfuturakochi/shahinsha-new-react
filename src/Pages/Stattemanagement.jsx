import {createContext, useEffect, useReducer} from 'react'

export const Userreducer=createContext()

export const FilestorePage=({children})=>{

    const initialValue=JSON.parse(localStorage.getItem('Farseen store page')) || null

    function display(state,action){

        console.log("action values in store page",action);
        return state=action
        

    }

const [state,dispatch]=useReducer(display,initialValue)
    console.log("final answer",state);

    useEffect(()=>{
localStorage.setItem('Farseen store page',JSON.stringify(state))
    },[state])
    
    return(
        <>
<Userreducer.Provider value={{dispatch,state}}>
{children}
</Userreducer.Provider>
        </>
    )
}

