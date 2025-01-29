import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CART_IMAGE } from "../utils/constants";
import CartItem from "./CartItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Cart=()=>{
    const items=useSelector((store)=>store.cart.items);
    const totalPrice=useSelector((store)=>store.cart.price);
    const dispatch=useDispatch();
    const[order,setOrder]=useState(false);
    const handleClick=()=>{
       setOrder(true);
       dispatch(clearCart());
    }
   
    const clearCartItems=()=>{
        dispatch(clearCart());
    }

    if(order===true){
        return(
            
                    <div className="pt-32">
                    <h1>Order Placed</h1>
                    <h2>Thank You for the order</h2>
                    <h2>Your Order ID-{Math.floor(Math.random() * 1000000)}</h2>
                    </div>
                
            
        )
       }
 
    return(
        <div className="text-center m-4 p-4 font-bold dark:bg-gray-800 text-black dark:text-white pt-32">
            <div className="w-full flex">
               
            {
                            items.length===0 ? (
                            <div className="mx-auto">
                            <img src={CART_IMAGE} className="m-auto"></img>
                            <h1 className="font-semibold">Your cart is empty</h1> 
                            <h2 className="font-normal my-4">You can go to home page to view more restaurants</h2>
                            <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Check For Restaurants</button></Link>
                            
                             </div>
                            ):

                            (
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
                                                        <CartItem 
                                                        items={item}
                                                        

                                                        />
                                                    )
                                                })
                                    }

                                    </div>
                                           
                                </div>
                                <div className="w-2/6 border border-solid ml-8">

                                <h1 className="mt-4">Order Summary</h1>
                                <p>Price({items.length} items)-{totalPrice}</p>
                                <p>Discount(10%)-{Math.round((totalPrice*10)/100)}</p>
                                <p>Delivery Charges-49</p> 
                                <p>You will Save {Math.round((totalPrice*10)/100)} in this Order🎉</p>
                                <h1>Total Amount-{totalPrice-Math.round((totalPrice*10)/100)+49}</h1>
                                <button className="bg-orange-600 rounded-lg p-4" onClick={handleClick}>Place Order</button>
                                </div>
                                </>
                            )
                                


                                
                            
                            
            }
            

            </div>
               
            </div>
        
    )
}

export default Cart;