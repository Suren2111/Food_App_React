import { createSlice } from "@reduxjs/toolkit"

const resMenuSlice=createSlice({
    name:"resMenufilter",
    initialState:{
    resMenu:[],
    resCategory:["VEG","NONVEG"],
    resBestSeller:false
    },
    reducers:{
       filterMenuonres:(state,action)=>{
           state.resMenu=action.payload;
       },
       filterResCategory:(state,action)=>{
           state.resCategory=action.payload
       },
       filterResBestSeller:(state,action)=>{
           state.resBestSeller=!state.resBestSeller
       }
    }
})



export default resMenuSlice.reducer;

export const{filterMenuonres,filterResCategory,filterResBestSeller}=resMenuSlice.actions;
