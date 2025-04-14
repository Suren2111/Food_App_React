import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    // const handleClick=()=>{
    //     Navigate("")
    // }
    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            
            <h1>OOPS!!</h1>
            <h2>The Page you are Looking is Not Found</h2>
            <h2>{err.status} : {err.statusText}</h2>
           <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Go To Home</button></Link>

            
        </div>
    )
}
export default Error;