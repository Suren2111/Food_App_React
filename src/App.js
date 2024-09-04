import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter,Outlet } from "react-router-dom";
import Contact from "./Component/Contact";
import { RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import Cart from "./Component/Cart";


const Applayout=() =>{
   return (
    <>
       <div>
        <Header />
        <Outlet />
        <Footer />
       </div>
       </>
   )
}


const approuter=createBrowserRouter([
   {
   path:"/",
   element:<Applayout/>,
   children:[
      {
         path:"/",
         element:<Body />
      },
      {
         path:"/contact",
         element:<Contact />
      },
      {
         path:"/about",
         element:<About />
      },
      {
         path:"/cart",
         element:<Cart />
      }

   ],
   errorElement:<Error />
   }
  
   
]);
   

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>)