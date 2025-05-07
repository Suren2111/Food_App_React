
import ReactDOM from 'react-dom/client';
import { lazy,Suspense, useEffect, useState,useContext} from 'react';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter,Outlet} from "react-router-dom";
import Search from "./Component/Search"
import { RouterProvider } from "react-router-dom";
import Error from "./Component/Error";
import RestuarantMenu from "./Component/RestuarantMenu";
import Offers from './Component/Offers';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Help from './Component/Help';
import SignIn from './Component/SignIn';
import Shimmer from './Component/Shimmer';
import OfflineNotice from './Component/OfflineNotice';
import useOnlineStatus from './utils/useOnlineStatus';
const Cart = lazy(() => import('./Component/Cart'));
const Applayout = () => {
   const isOnline = useOnlineStatus();
   const [wasInitiallyOffline, setWasInitiallyOffline] = useState(!navigator.onLine);

  // If user was offline but comes back online, update initial state
  useEffect(() => {
    if (isOnline && wasInitiallyOffline) {
      setWasInitiallyOffline(false);
    }
  }, [isOnline]);

  // Case 1: User visits in offline mode → Show only offline message
  if (wasInitiallyOffline && !isOnline) {
    return <OfflineNotice />
    
  }
      return (
         <div>
             <Provider store={appStore}>
               {/* Always show header/footer */}
               <Header />
               
               {/* Only body content changes based on connection */}
               {!isOnline ? (
                 <div className="pt-48 pb-32">
                 <h1>You're offline,Please check the Internet Connection!!!!</h1>
             </div>
               ) : (
                 <Outlet /> // Your normal content
               )}
               
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
         { path: '/offers', element: <Offers /> },
         { path: '/cart', element: 
         <Suspense  fallback={<Shimmer />}>
          <Cart />
         </Suspense> 
        },
         { path: '/restuarantcards/:resId', element: <RestuarantMenu /> },
         {path:'/help',element:<Help />},
         {path: '/signin',element:<SignIn />}
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



