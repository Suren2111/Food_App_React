import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        userName: "Default User"
    },
    reducers:{
        updateUserName:(state,action)=>{
           state.userName=action.payload
        }
    }

})

export default userSlice.reducer;

export const{updateUserName} =userSlice.actions;

