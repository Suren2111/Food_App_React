import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItems } from "../utils/cartSlice";
const CartItem=({items})=>{
    const{imageId,name,finalPrice}=items?.card?.info;
    const dispatch=useDispatch();

    const removeItemFromcart=(name)=>{
       dispatch(removeItems(name))
    }
    return(
        <div className="pt-4">
            
            <div className="flex">
               <img src={CDN_URL+imageId} className="h-28 w-28"></img>
               <div className="my-6 px-4">
                   <h1 className="px-4">{name}</h1>
                   <h2>₹-{finalPrice/100}</h2>
               </div>
               <button className="border rounded-lg text-red-200" onClick={()=>removeItemFromcart(name)}>Remove</button>
            </div>
            
        </div>
       
    )
}

export default CartItem;