import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CART_IMAGE } from "../utils/constants";
import CartItem from "./CartItem";
import { useState } from "react";
import { memo } from "react";
import OrderPlaced from "./OrderPlaced";

const MemoizedCartItem = memo(CartItem);
const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const totalPrice = useSelector((store) => store.cart.price);
    const dispatch = useDispatch();
    const [order, setOrder] = useState(false);
    const handleClick = () => {
        setOrder(true);
        dispatch(clearCart());
    }

    const clearCartItems = () => {
        dispatch(clearCart());
    }

    const discount = Math.round((totalPrice * 10) / 100);
    const deliveryCharge = 49;
    const totalAmount = Math.round(totalPrice - discount + deliveryCharge);


    if (order === true) {
        return (

            <OrderPlaced />


        )
    }

    return (
        <div className="text-center p-4 font-bold dark:bg-gray-800 text-black dark:text-white pt-32">
            <div className="w-full flex pt-16 pl-16">

                {
                    items.length === 0 ? (
                        <div className="mx-auto">
                            <img src={CART_IMAGE} className="m-auto"></img>
                            <h1 className="font-semibold">Your cart is empty</h1>
                            <h2 className="font-normal my-4">You can go to home page to view more restaurants</h2>
                            <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Check For Restaurants</button></Link>

                        </div>
                    ) :

                        (
                            <>
                                <div className="w-2/6">
                                    <div className="flex justify-between pb-6">
                                        <h1 className="text-xl px-3">Cart</h1>
                                        <button className="border bg-red-800 p-2 rounded-lg text-white" onClick={clearCartItems}>Clear Cart</button>
                                    </div>

                                    <div className="h-[450px] overflow-y-auto pr-2">

                                        {
                                            items.map((item) => {
                                                return (
                                                    <MemoizedCartItem
                                                        items={item}
                                                        key={item?.card?.info?.id}



                                                    />
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                                <div className="w-2/6 border border-solid ml-12 h-96">

                                    <h1 className="mt-4 text-2xl font-medium">Order Summary</h1>

                                    <div className="flex justify-between pt-8">
                                        <h1 className="pl-4 text-lg font-light">Price({items.length} items)</h1>
                                        <h1 className="pr-4 text-lg">{totalPrice}</h1>
                                    </div>

                                    <div className="flex justify-between pt-2">
                                        <h1 className="pl-4 text-lg font-light">Discount(10%)</h1>
                                        <h1 className="pr-4 text-lg">₹{discount}</h1>
                                    </div>

                                    <div className="flex justify-between pt-2">
                                        <p className="pl-4 text-lg font-light">Delivery Charges</p>
                                        <p className="pr-4 text-lg">₹{deliveryCharge}</p>
                                    </div>

                                    <div className="flex justify-between pt-2">
                                        <h1 className="pl-4 text-lg  font-light">You will Save ₹{discount} in this Order🎉</h1>
                                    </div>


                                    <div className="flex justify-between pt-2">
                                        <h1 className="pl-4 text-lg font-light">Total Amount</h1>
                                        <h1 className="pr-4 text-lg">₹{totalAmount}</h1>
                                    </div>


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