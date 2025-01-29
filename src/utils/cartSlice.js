import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        price:0
    },
    reducers:{
        addItems:(state,action)=>{
           state.items.push(action.payload.updatedItems);
           state.price=state.price+action.payload.price;
        },
        removeItems:(state,action)=>{
            state.price=state.price-action.payload.totalPrice
            state.items=state.items.filter((item)=>{
                return(
                    item?.card?.info?.name!==action.payload.name
                )
                 
            })
            
        },
        clearCart:(state)=>{
           state.items.length=0;
           state.price=0;
        },
        addPrice:(state,action)=>{
            state.price=state.price+action.payload.price
            const item=state.items.find((item)=>{
                return item.card.info.name===action.payload.name
            })
            if(item){
                item.count=item.count+1;
            }
        },
        removePrice:(state,action)=>{
            state.price=state.price-action.payload.price
            const item=state.items.find((item)=>{
                return item.card.info.name===action.payload.name
            })
            if(item){
                item.count=item.count-1;
            }
        }


    }
})

export default cartSlice.reducer;

export const{addItems,removeItems,clearCart,addPrice,removePrice} =cartSlice.actions;