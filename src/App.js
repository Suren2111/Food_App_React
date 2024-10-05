
import ReactDOM from 'react-dom/client';
import { lazy,Suspense } from 'react';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter,Outlet } from "react-router-dom";
import Contact from "./Component/Contact";
import { RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import Cart from "./Component/Cart";
import RestuarantMenu from "./Component/RestuarantMenu";
import Login from "./Component/Login";
import Logout from "./Component/Logout";

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

const Grocery=lazy(()=> import('./Component/Grocery'))


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
      },
      {
         path:"/restuarantcards/:resId",
         element:<RestuarantMenu />
      },
      {
         path:"/login",
         element:<Login />
      }
      ,
      {
         path:"/logout",
         element:<Logout />
      },
      {
         path:"/grocery",
         element:<Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
         </Suspense>
      }

   ],
   errorElement:<Error />
   }
  
   
]);
   

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>)