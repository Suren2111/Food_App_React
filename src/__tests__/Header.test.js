 import { fireEvent, render,screen } from "@testing-library/react"
 import Header from "../Component/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render the header component in UI",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header />
        </Provider>
        </BrowserRouter>
)

const cart=screen.getByText(/Cart/);

expect(cart).toBeInTheDocument();
})

it("Should change the button from Login to Logout on Clicking",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header />
        </Provider>
        </BrowserRouter>
)

const login=screen.getByText("Login");
fireEvent.click(login);
const logout=screen.getByText("Logout");
expect(logout).toBeInTheDocument();


})