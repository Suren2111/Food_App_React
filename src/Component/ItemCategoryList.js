import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemCategoryList=(props)=>{
    const dispatch=useDispatch();
    const{items}=props;
    const handleItemCart= (items)=>{
        dispatch(addItems(items))
    }
    return(
       <div className="border-b-4">
        
        <div>
        <div className="flex justify-between my-4 font-bold">
        <button className="bg-black text-white h-8 w-14" onClick={()=>handleItemCart(items)}>Add +</button>
        <span>{items?.card?.info?.name}</span>
        <img src={CDN_URL+items?.card?.info?.imageId} className="w-28"></img>
        </div>
        </div>

        <div className="font-bold">
        <h1>₹ {items?.card?.info?.price/100}</h1>
        <h1 className="my-4">⭐</h1>
        </div>
        <p className="my-4 text-sm">{items?.card?.info?.description}</p>
       </div>
    )
}

export default ItemCategoryList;