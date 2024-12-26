import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Component/Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import "@testing-library/jest-dom";


it("Should render the Header Component with login button",()=>{
     render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
   
)

        const loginButton=screen.getByRole("button");
        expect(loginButton).toBeInTheDocument();

})

it("Should render the Header Component with Cart-(0 items)",()=>{
    render(
       <BrowserRouter>
          <Provider store={appStore}>
             <Header />
          </Provider>
       </BrowserRouter>
  
)

     const cartItems=screen.getByText("Cart-(0 items)");
     expect(cartItems).toBeInTheDocument();

})

it("Should render the Header Component with Cart",()=>{
    render(
       <BrowserRouter>
          <Provider store={appStore}>
             <Header />
          </Provider>
       </BrowserRouter>
  
)

     const cartItems=screen.getByText(/Cart/);
     expect(cartItems).toBeInTheDocument();

})

it("Should change the button from login to logout on Clicking in Header Component",()=>{
    render(
       <BrowserRouter>
          <Provider store={appStore}>
             <Header />
          </Provider>
       </BrowserRouter>
  
)

    const loginButton=screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();

})