
import ReactDOM from 'react-dom/client';
import { lazy,Suspense, useEffect, useState } from 'react';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter,Outlet} from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import Search from "./Component/Search"
import { RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import Cart from "./Component/Cart";
import RestuarantMenu from "./Component/RestuarantMenu";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import Errorboundry from './Component/Errorboundry';
import { useContext } from 'react';
import Offers from './Component/Offers';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import themeContext from './utils/themeContext';
import loginContext from './utils/loginContext';
import UserClass from './Component/UserClass';



const Grocery = lazy(() => import('./Component/Grocery'));

// Layout Component
const Applayout = () => {
   // Get the default theme from context
   const { defaultTheme } = useContext(themeContext);
   const [theme, setTheme] = useState(defaultTheme); // State for theme
   const {userInfo}=useContext(loginContext);
   const [name,setName]=useState(userInfo)
   return (

         <div>

               <Provider store={appStore}>
                  <Header />
                  <loginContext.Provider value={{userInfo:name, setName}}>
                  <Outlet />
                  </loginContext.Provider>
                  <Footer />
               </Provider>
          
            

         </div>

   );
};

// Defining routes
const approuter = createBrowserRouter([
   {
      path: '/',
      element: <Applayout />,
      children: [
         { path: '/', element: <Body /> },
         { path: '/search', element: <Search /> },
         { path: '/about', element: <About /> },
         { path: '/offers', element: <Offers /> },
         { path: '/cart', element: <Cart /> },
         { path: '/restuarantcards/:resId', element: <RestuarantMenu /> },
         { path: '/login', element: <Login /> },
         { path: '/logout', element: <Logout /> },
         { path: '/user', element: <UserClass /> },
         {
            path: '/grocery',
            element: (
               // <Suspense  fallback={<h1>Loading...</h1>}>
                 <Grocery />
               // /* </Suspense> */
            ),
         },
      ],
      errorElement: <Error />,
   },
]);

// React Root Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />);



//Second Approach Of Defining Routes



// import ReactDOM from 'react-dom/client';
// import { lazy, Suspense, useState, useContext } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes for v6
// import Header from './Component/Header';
// import Body from './Component/Body';
// import Footer from './Component/Footer';
// import Search from './Component/Search';
// import About from './Component/About';
// import Offers from './Component/Offers';
// import Cart from './Component/Cart';
// import Sample from './Component/Sample';
// import RestuarantMenu from './Component/RestuarantMenu';
// import Login from './Component/Login';
// import Logout from './Component/Logout';
// import ShowList from './Component/ShowList';
// import Example from './Component/Example';
// import appStore from './utils/appStore';
// import { Provider } from 'react-redux';
// import themeContext from './utils/themeContext';
// import loginContext from './utils/loginContext';

// // Lazy loaded component
// const Grocery = lazy(() => import('./Component/Grocery'));

// const Applayout = () => {
//    const { defaultTheme } = useContext(themeContext);
//    const [theme, setTheme] = useState(defaultTheme); // State for theme
//    const { userInfo } = useContext(loginContext);
//    const [name, setName] = useState(userInfo);

//    return (
//       <div>
//          <loginContext.Provider value={{ userInfo: name, setName }}>
//          <themeContext.Provider value={{ defaultTheme: theme, setTheme }}>
//             <Provider store={appStore}>
//                <Header />
//                <Routes>
//                   {/* Define routes using `element` prop in React Router v6 */}
//                   <Route path="/" element={<Body />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/offers" element={<Offers />} />
//                   <Route path="/search" element={<Search />} />
//                   <Route path="/cart" element={<Cart />} />
//                   <Route path="/sample" element={<Sample />} />
//                   <Route path="/restuarantcards/:resId" element={<RestuarantMenu />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/logout" element={<Logout />} />
//                   <Route path="/ShowList" element={<ShowList />} />
//                   <Route path="/example" element={<Example />} />

//                   {/* Lazy-loaded route with Suspense */}
//                   <Route
//                      path="/grocery"
//                      element={
//                         <Suspense fallback={<h1>Loading...</h1>}>
//                            <Grocery />
//                         </Suspense>
//                      }
//                   />
//                </Routes>
//                <Footer />
//             </Provider>
//          </themeContext.Provider>
//          </loginContext.Provider>
//       </div>
//    );
// };

// // React Root Render using BrowserRouter and Routes (for React Router v6)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <BrowserRouter>
//       <Applayout />
//    </BrowserRouter>
// );



