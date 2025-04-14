import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:JSON.parse(localStorage.getItem("items")) || [],
        price:JSON.parse(localStorage.getItem("price")) || 0,
    },
    
    reducers:{
        addItems:(state,action)=>{
                if(state.items.length==0){
                    state.items.push(action.payload.updatedItems);
                    state.price=state.price+action.payload.price; 

                    const items=JSON.parse(localStorage.getItem("items")) || [];
                    items.push((action.payload.updatedItems));
                    localStorage.setItem("items",JSON.stringify(items)); 

                    const price=JSON.parse(localStorage.getItem("price")) || 0;
                    const updatedPrice=price+action.payload.price
                    localStorage.setItem("price",JSON.stringify(updatedPrice)); 
                }
                else{
                    const item=state.items.find((item)=>{
                         return item.card.info.name===action.payload.updatedItems.card.info.name
                    })

                    if(item==undefined){
                        state.items.push(action.payload.updatedItems);
                        state.price=state.price+action.payload.price; 

                        const items=JSON.parse(localStorage.getItem("items")) || [];
                        items.push((action.payload.updatedItems));
                        localStorage.setItem("items",JSON.stringify(items)); 

                        const price=JSON.parse(localStorage.getItem("price")) || 0;
                        const updatedPrice=price+action.payload.price
                        localStorage.setItem("price",JSON.stringify(updatedPrice)); 
                    }
                }
           
            
         
        },
        removeItems:(state,action)=>{
            state.price=state.price-action.payload.totalPrice

            const price=JSON.parse(localStorage.getItem("price")) || 0;
            const updatedPrice=price-action.payload.totalPrice;
            console.log(price+" "+updatedPrice)
            localStorage.setItem("price",JSON.stringify(updatedPrice)); 

            

            state.items=state.items.filter((item)=>{
                return(
                    item?.card?.info?.name!==action.payload.name
                )
                 
            })

            localStorage.setItem("items",JSON.stringify(state.items));


            
        },
        clearCart:(state)=>{
          const newState={
            ...state,
            items:[],
            price:0
          }
          localStorage.setItem("items",JSON.stringify(newState.items));
          localStorage.setItem("price",JSON.stringify(newState.price));
          
           return newState;
        },
        addPrice:(state,action)=>{
            state.price=state.price+action.payload.price
            const item=state.items.find((item)=>{
                return item.card.info.name===action.payload.name
            })
            if(item){
                item.count=item.count+1;
            }
            localStorage.setItem("items",JSON.stringify(state.items));
            localStorage.setItem("price",JSON.stringify(state.price)); 

        },
        removePrice:(state,action)=>{
            state.price=state.price-action.payload.price
            const item=state.items.find((item)=>{
                return item.card.info.name===action.payload.name
            })
            if(item){
                item.count=item.count-1;
            }
            localStorage.setItem("items",JSON.stringify(state.items));
            localStorage.setItem("price",JSON.stringify(state.price)); 
        }


    }
})

export default cartSlice.reducer;

export const{addItems,removeItems,clearCart,addPrice,removePrice} =cartSlice.actions;