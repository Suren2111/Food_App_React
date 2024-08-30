import { LOGO_URL } from "../utils/constants";
const Header=() =>{
    return(
        <div className="header-container">
            <div className="logo-container">
                  <img className="logo" src={LOGO_URL} alt="React Image" />
            </div>
            <div className="nav-container">
                <ul className="nav">
                   <li>Home</li>
                   <li>Cart</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                </ul>
           </div>
        </div>
           
    )
}

export default Header;