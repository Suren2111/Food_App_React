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



// const resMenuSlice = createSlice({
//     name: "resMenufilter",
//     initialState: {
//       resMenu: [], // Store only relevant data here
//       resCategory: ["VEG", "NONVEG"],
//       resBestSeller: false,
//     },
//     reducers: {
//       filterMenuonres: (state, action) => {
//         // Store only the relevant data
//         state.resMenu = action.payload.map(item => ({
//           title: item?.card?.card?.title,
//           items: item?.card?.card?.itemCards,
//         }));
//       },
//       filterResCategory: (state, action) => {
//         state.resCategory = action.payload;
//       },
//       filterResBestSeller: (state, action) => {
//         state.resBestSeller = !state.resBestSeller;
//       },
//     },
//   });
  
//   export const {
//     filterMenuonres,
//     filterResCategory,
//     filterResBestSeller,
//   } = resMenuSlice.actions;
  
//   export default resMenuSlice.reducer;
  
