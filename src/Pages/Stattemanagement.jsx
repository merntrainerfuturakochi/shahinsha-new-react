import {createContext, useReducer} from 'react'

export const Userreducer=createContext()

export const FilestorePage=({children})=>{

    const initialValue=null

    function display(state,action){

        console.log("action values in store page",action);
        return state=action
        

    }

const [state,dispatch]=useReducer(display,initialValue)
    console.log("final answer",state);
    
    return(
        <>
<Userreducer.Provider value={{dispatch,state}}>
{children}
</Userreducer.Provider>
        </>
    )
}

