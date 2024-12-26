import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserName } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login=()=>{
    const[userName,setUserName]=useState(null);
    const[password,setPassword]=useState(null);
    const[loggedInfo,setLoggedInfo]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLoginInfo=(userName,password)=>{
          userName==="suren" && password==="virat" ? navigate("/") : setLoggedInfo(false)
          dispatch(updateUserName(userName));
     
    }
    return(
        <div className="text-center p-4 m-4 dark:bg-gray-800 text-black dark:text-white">
            <span className="font-bold my-3">Login</span>
            <div>
            <lable>UserName : </lable>
            <input className="border border-black m-4 rounded-lg px-2" onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
            
            <div>
            <lable>Password : </lable>
            <input className="border border-black m-4 rounded-lg px-2" type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}></input>
            </div>

            <div>
                <button className="bg-green-900 text-white p-2 m-auto my-2" onClick={()=>handleLoginInfo(userName,password)}>Login</button>
                
            </div>

            <div>
                {
                    loggedInfo===false ?  <h1 className="font-bold my-4">Please Enter the correct username and password</h1> : <></> 
                }
              
            </div>
            
        </div>
    )
}
export default Login;