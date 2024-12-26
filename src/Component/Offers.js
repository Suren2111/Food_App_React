import exampleContext from "../utils/exampleContext";
import { useContext } from "react";
const Offers=()=>{ 
  const {name}=useContext(exampleContext)
  console.log(name+"Offers component re-rendered")
   return(
      <div>
         <h1 className="font-bold p-4 m-4">Contact US Page</h1>
         <form>
            <input className="border border-black p-2 m-2" placeholder="name"></input>
            <input className="border border-black p-2 m-2" placeholder="message"></input>
            <button className="bg-gray-400 rounded-lg p-2 m-2">Submit</button>
         </form>
      </div>
   )
}

export default Offers;