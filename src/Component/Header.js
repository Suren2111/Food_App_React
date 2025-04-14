// src/Component/Header.js
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  //if there is changes in the length of the cart items then the header components will be re-rendered, no need for header to be rendered when the property inside the cart items update
  const cartItems = useSelector((store) => store.cart.items.length);
  const [theme,setTheme]=useState(localStorage.getItem("theme") || "light")

  const toggleChanges = () => {
    //Aways go with functional update for setter function if the value is depends upon the previous value especially.
    //Always return a value from the setter function, if not returned the default value is undefined.
     setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark"
    });
  };



  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme",theme);
  }, [theme]);


  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md flex justify-between dark:bg-gray-800 dark:text-white border border-b-gray-400">
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
          <Link to="/help" className="hover:text-red-500">Help</Link>
        </li>
        <li className="p-3 m-3">
        <Link to="/signin" className="hover:text-red-500">SignIn</Link>
      </li>
          <li className="p-3 m-3">
            <Link to="/cart" className="hover:text-red-500">Cart-({cartItems} items)</Link>
          </li>
          {/* Dark Mode Toggle */}
          <li className="p-3 m-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="themeToggle"
                name="theme"
                checked={theme === "dark"} // Checkbox reflects the current theme
                onChange={()=>{
                  toggleChanges();
                }} // Trigger theme toggle
              />
              <span className="slider round">{theme=="dark" ? "🌙" : "🌞"}</span>
            </label>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
