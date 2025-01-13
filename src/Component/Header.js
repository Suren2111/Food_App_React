// src/Component/Header.js
import { useState, useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../utils/themeSlice";
import { useContext } from 'react';
import exampleContext from '../utils/exampleContext';
import { updateName } from "../utils/exampleSlice";



const Header = () => {
  const [btnname, setBtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userName = useSelector((store) => store.user.userName);
  const cartItems = useSelector((store) => store.cart.items);
  const theme = useSelector((store) => store.theme.theme); // Get theme from Redux
  const dispatch = useDispatch();





  const toggleChanges = () => {
    dispatch(updateTheme(theme === "dark" ? "light" : "dark"));
  };



  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);


  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md flex justify-between dark:bg-gray-800 text-black dark:text-white border border-b-gray-400">
      <div className="m-7 flex">
         <Link to="/">
         <h1 className="p-3 my-3 mx-8 text-xl text-red-600 font-bold">DishFly</h1>
         </Link>
          
      </div>
      <div className="nav-container">
        <ul className="flex justify-between m-7">
          <li className="p-3 m-3">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-3 m-3">
            <Link to="/search" className="hover:text-red-500">Search</Link>
          </li>
          <li className="p-3 m-3">
            <Link to="/offers" className="hover:text-red-500">Offers</Link>
          </li>
          <li className="p-3 m-3">
          <Link to="/offers" className="hover:text-red-500">Help</Link>
        </li>
        <li className="p-3 m-3">
        <Link to="/offers" className="hover:text-red-500">Sign In</Link>
      </li>
          <li className="p-3 m-3">
            <Link to="/cart" className="hover:text-red-500">Cart-({cartItems.length} items)</Link>
          </li>
          
        

          {/* Dark Mode Toggle */}
          <li className="p-3 m-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"} // Checkbox reflects the current theme
                onChange={toggleChanges} // Trigger theme toggle
              />
              <span className="slider round">{theme} Mode</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
