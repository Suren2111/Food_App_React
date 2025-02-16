import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems,addPrice } from "../utils/cartSlice";
const ItemCategoryList=(props)=>{
    const dispatch=useDispatch();
    const{items}=props;
    const handleItemCart= (items)=>{
        const price=(items.card.info.price || items.card.info.defaultPrice)/100;
        const updatedItems = { ...items, count: 1};
        dispatch(addItems({updatedItems,price}))

    }
    return(
       <div className="border-b-4"  data-testid="foodItems">
        
        <div>
        <div className="flex justify-between my-4 font-bold">
       <span>{items?.card?.info?.name}</span>
        <img src={CDN_URL+items?.card?.info?.imageId} className="w-28"></img>
        </div>
        </div>

        <div className="font-bold">
        <div className="flex justify-between">
        <h1>₹ {items?.card?.info?.price/100}</h1>
        <button className="bg-white text-green-500 h-10 w-14 border border-slate-500 mx-6 rounded-lg" onClick={()=>handleItemCart(items)}>ADD</button>
          
        </div>
        
        <h1 className="my-4">⭐</h1>
        </div>
        <p className="my-4 text-sm">{items?.card?.info?.description}</p>
       </div>
    )
}

export default ItemCategoryList;