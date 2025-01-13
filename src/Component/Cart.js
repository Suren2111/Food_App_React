import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemCategoryList";
import { clearCart, removeItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CART_IMAGE } from "../utils/constants";
import CartItem from "./CartItem";

const Cart=()=>{
    const items=useSelector((store)=>store.cart.items);
    console.log(items);
    const dispatch=useDispatch();
    const clearCartItems=()=>{
        dispatch(clearCart());
    }



    return(
        <div className="text-center m-4 p-4 font-bold dark:bg-gray-800 text-black dark:text-white pt-32">
            <div className="w-full">
            {
                            items.length===0 ? (
                            <div className="mx-auto">
                            <img src={CART_IMAGE} className="m-auto"></img>
                            <h1 className="font-semibold">Your cart is empty</h1> 
                            <h2 className="font-normal my-4">You can go to home page to view more restaurants</h2>
                            <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Check For Restaurants</button></Link>
                            
                             </div>
                            ): 
                                <>
                                <div className="w-2/6">
                                    <div className="flex justify-between pb-6">
                                            <h1 className="text-xl px-3">Cart</h1>
                                            <button className="border bg-red-800 p-2 rounded-lg text-white" onClick={clearCartItems}>Clear Cart</button>
                                    </div>

                                    <div>

                                    {
                                                items.map((item)=>{
                                                    return(
                                                        <CartItem items={item}/>
                                                    )
                                                })
                                    }

                                    </div>
                                           
                                </div>
                                <div className="w-2/6">

                                </div>
                                </>
                                


                                
                            
                            
            }
            

            </div>
               
            </div>
        </div>
    )
}

export default Cart;