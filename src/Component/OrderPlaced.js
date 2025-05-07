import { Link } from "react-router-dom";
const OrderPlaced=()=>{
    return (
    
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h1>✅</h1>
                        <h1 className="text-2xl font-medium">Order Placed</h1>
                        <h2 className="pt-2 pb-2">Thank You for the order</h2>
                        <h2 className="text-lg font-medium">Your Order ID-{Math.floor(Math.random() * 1000000)}</h2>
                        <Link to={'/'}><button className="p-4 bg-orange-400 rounded-lg">Go to home</button></Link>
    
                    </div>
                </div>
    
    
            )
}

export default OrderPlaced;