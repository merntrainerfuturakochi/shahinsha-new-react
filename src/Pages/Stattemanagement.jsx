import { createContext, useReducer } from "react"

export const UserContext=createContext()

export const Storepage=({children})=>{

    const initialValue={
        userInfo:null
    }

    function display(state,action){
        console.log("action values...............",action);
        switch(action.type){
            case "success":
                return {userInfo:action.finalData}
        }

    }

    const[state,dispatch]=useReducer(display,initialValue)

    console.log("final answer ?",state.userInfo);
    

    return(
<>
<UserContext.Provider value={{dispatch,finalAnswer:state.userInfo}}>

{children}
</UserContext.Provider>

</>

    )
}