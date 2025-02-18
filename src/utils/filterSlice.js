import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"restuarantfilter",
    initialState:{
        restuarant:[],
        carousellist:[],
        location:"Chennai"    
    },
    reducers:{
        filterrating:(state,action)=>{ 
            state.restuarant=action.payload.filter((restuarant)=>{
               return restuarant.info.avgRating> 4.5

            })  
        },
        updateResDetails:(state,action)=>{
           state.restuarant=action.payload.res
           state.carousellist=action.payload.carousel
        },
        updateLocationDetails:(state,action)=>{
         state.location=action.payload
        },
        filterFasterDelivery:(state,action)=>{
            state.restuarant=action.payload.filter((restuarant)=>{
                return restuarant.info.sla.deliveryTime<=23
 
             }) 
        },
        filterPromoted:(state,action)=>{
            state.restuarant=action.payload.filter((restuarant)=>{
                return restuarant.info.avgRating> 4.2
 
             }) 
        },
        filterUI:(state,action)=>{
            state.restuarant=action.payload.resdetails.filter((restuarant)=>{
                // console.log(restuarant.info.name);
                return restuarant.info.name.toLowerCase().includes(action.payload.search.toLowerCase());
            })
        }
    }
    
})





export default filterSlice.reducer;

export const{filterrating,updateResDetails,filterFasterDelivery,filterPromoted,filterUI,updateLocationDetails} =filterSlice.actions;
