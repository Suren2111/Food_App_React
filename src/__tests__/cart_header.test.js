import { fireEvent, render,screen } from "@testing-library/react"
import RestuarantMenu from "../Component/RestuarantMenu"
import { act } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Mock_data from "../mocks/MockData_ResMenu.json"
import "@testing-library/jest-dom"
import Header from "../Component/Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Component/Cart"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_data)
        }
    })
})


it("Should test the ResMenu Component is loaded in UI",async ()=>{
        await act(async ()=>{
            render(
                <Provider store={appStore}>
            <RestuarantMenu />
            </Provider>
        )
        })

        expect(screen.getByText("Desserts. (7)")).toBeInTheDocument();
})

it("Should expand the Desserts accordian in ResMenu Component",async ()=>{

    await(act(async ()=>{

        render(
            <Provider store={appStore}>
                <BrowserRouter>
                 <Header />
                 <RestuarantMenu />
                 </BrowserRouter>
        </Provider>
    )
     
    }))

    fireEvent.click(screen.getByText("Desserts. (7)"));
    expect(screen.getAllByTestId("foodItems").length).toBe(7);

})

it("Should add items from the Desserts and updates should be happened in cart and Header component",async ()=>{

    await(act(async ()=>{

        render(
            <Provider store={appStore}>
              
              <BrowserRouter>
                 <Cart />
                 <Header />
                 <RestuarantMenu />
               </BrowserRouter>
        </Provider>
    )
     
    }))

    fireEvent.click(screen.getByText("Desserts. (7)"));

    const itemsbtn=screen.getAllByRole("button",{name:"ADD"});

    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();

    fireEvent.click(itemsbtn[0]);

    fireEvent.click(itemsbtn[1]);

    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

    expect(screen.getByText("Order Summary")).toBeInTheDocument();

    expect(screen.getAllByTestId("cartitems").length).toBe(2);

    const cartItemBtns=screen.getAllByRole("button",{name:"Remove"});

    fireEvent.click(cartItemBtns[0]);

    expect(screen.getAllByTestId("cartitems").length).toBe(1);











})