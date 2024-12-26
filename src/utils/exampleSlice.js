import { createSlice } from "@reduxjs/toolkit";

const exampleSlice=createSlice({
    name:"example",
    initialState:{
        userName1: "Default User-redux"
    },
    reducers:{
        updateName:(state,action)=>{
           state.userName1=action.payload
        }
    }

})

export default exampleSlice.reducer;

export const{updateName} =exampleSlice.actions;

