import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=() =>{
    const[btnname,setBtnname]=useState("Login");
    const onlineStatus=useOnlineStatus();
    return(
        <div className="header-container">
            <div className="logo-container">
                  <Link to="/"><img className="logo" src={LOGO_URL} alt="React Image" /></Link>
                  
            </div>
            <div className="nav-container">
                <ul className="nav">
                   <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/cart">Cart</Link></li>
                   <li><Link to="/about">About Us</Link></li>
                   <li><Link to="/contact">Contact Us</Link></li>
                   <li><Link to="/grocery">Grocery</Link></li>
                   <li> <Link to={btnname}>
                   <button className="login-btn" onClick={()=>{
                    if(btnname==="Login"){
                        setBtnname("Logout");
                    }
                    else{
                        setBtnname("Login")
                    }
                   }}>{btnname}
                   </button>
                   </Link></li>
                  
                   
                </ul>
           </div>
        </div>
           
    )
}

export default Header;