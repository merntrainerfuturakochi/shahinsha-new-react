import {createSlice} from '@reduxjs/toolkit'

const userData=createSlice({
    name:"shahinsha",
    initialState:{
        shahishaData:null
    },
    reducers:{
        addTostore:(state,action)=>{
            console.log("action values",action);
            
state.shahishaData=action.payload
        },
        deleteData:(state,action)=>{

        }
    }
})

export const {addTostore,deleteData}=userData.actions
export default userData.reducer