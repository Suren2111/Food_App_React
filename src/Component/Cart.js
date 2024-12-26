import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemCategoryList";
import { clearCart, removeItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CART_IMAGE } from "../utils/constants";

const Cart=()=>{
    const items=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clearCartItems=()=>{
        dispatch(clearCart());
    }

    const clearItem=(index)=>{
        dispatch(removeItems(index));;
    }
    return(
        <div className="text-center m-4 p-4 font-bold dark:bg-gray-800 text-black dark:text-white">
            <div className="w-6/12 m-auto">
            {
                            items.length===0 ? (
                            <>
                            <img src={CART_IMAGE} className="m-auto"></img>
                            <h1 className="font-semibold">Your cart is empty</h1> 
                            <h2 className="font-normal my-4">You can go to home page to view more restaurants</h2>
                            <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Check For Restaurants</button></Link>
                            
                             </>
                            ): (
                                items.map((item,index)=>{
                                return(
                                    <>
                                    <button className="bg-black text-white m-3 p-3" onClick={clearCartItems}>clear cart</button>
                                    <button className="bg-black text-white m-3 p-3" onClick={()=>clearItem(index)}>clear item</button>
                                    <ItemCategoryList items={item} />
 
                                    </>
                                )
                             }))
            }
               
            </div>
        </div>
    )
}

export default Cart;