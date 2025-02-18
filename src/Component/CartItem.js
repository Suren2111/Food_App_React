import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/cartSlice";
import { addPrice,removePrice } from "../utils/cartSlice";
const CartItem=({items})=>{
    const{imageId,name}=items?.card?.info;
    const price=(items.card.info.price || items.card.info.defaultPrice)/100;
    const itemCount=items.count;
    const dispatch=useDispatch();
    const removeItemFromcart=(price,name,itemCount)=>{
       const totalPrice=itemCount*price;
       dispatch(removeItems({name,totalPrice}))
    

    }
    
    const reduceItemCount=(price,name)=>{
        if(itemCount-1>0){
            dispatch(removePrice({price,name}))
        }
    
    }

    const increaseItemCount=(price,name)=>{
        dispatch(addPrice({price,name}))
    }
    return(
        <div className="pt-4">
            
            <div className="flex">
               <img src={CDN_URL+imageId} className="h-28 w-28 my-6"></img>
               <div className="my-6 px-4"  data-testid="cartitems">
                   <h1 className="px-4">{name}</h1>
                   <h2>₹{price*itemCount}</h2>
                   <div className="flex my-6 px-8">
                   <button className="border border-solid p-2 mx-4" onClick={()=>reduceItemCount(price,name)}>-</button>
                   <p className="p-2">{itemCount}</p>
                   <button className="border border-solid p-2 mx-4" onClick={()=>increaseItemCount(price,name)}>+</button>
                   </div>
                   
               </div>
               <button className="my-20 px-1 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-all" onClick={()=>removeItemFromcart(price,name,itemCount)}>Remove</button>
            </div>
            
        </div>
       
    )
}

export default CartItem;