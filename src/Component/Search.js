import { Link } from "react-router-dom";
const Search=()=>{
  
        return(
            <>
             <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKS9fSJEGZnEm6tvm68CN6RpUnrJ8NaPvTA&s"} className="m-auto"></img>
             <h1 className="font-semibold">Your cart is empty</h1> 
             <h2 className="font-normal my-4">You can go to home page to view more restaurants</h2>
            <Link to={"/"}><button className="bg-orange-400 text-black rounded-lg h-12 w-48">Check For Restaurants</button></Link>
                                        
            </>
           )
    
}

export default Search;