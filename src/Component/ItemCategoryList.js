import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems} from "../utils/cartSlice";
import { useState } from "react";

const ItemCategoryList=(props)=>{
    const dispatch=useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const{items}=props;
    const handleItemCart= (items)=>{
        const price=(items.card.info.price || items.card.info.defaultPrice)/100;
        const updatedItems = { ...items, count: 1};
        dispatch(addItems({updatedItems,price}))
          // Show popup
          setShowPopup(true);
          // Hide after 3 seconds
          setTimeout(() => {
              setShowPopup(false);
          }, 1500);


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
        <h1>₹ {items?.card?.info?.price/100 || items?.card?.info?.defaultPrice/100}</h1>
        <button className="bg-white text-green-500 h-10 w-14 border border-slate-500 mx-6 rounded-lg" onClick={()=>handleItemCart(items)}>ADD</button>
          
        </div>
        
        <h1 className="my-4">⭐</h1>
        </div>
        <p className="my-4 text-sm">{items?.card?.info?.description}</p>
         {/* Popup Notification */}
         {showPopup && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 z-50">
                    Item added to cart!
                </div>
            )}
       </div>
    )
}

export default ItemCategoryList;