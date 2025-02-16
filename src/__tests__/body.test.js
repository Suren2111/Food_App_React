import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Component/Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import data from "../mocks/cards.json"
import { act } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    })
})


it("Should test the Search Input with value K", async()=>{

    await act(async ()=>render(
        <Provider store={appStore}>
            <BrowserRouter>
            <Body />
            </BrowserRouter>
   
    </Provider>
))

const RestuarantsBeforeSearch=screen.getAllByTestId("Restuarants");


expect(RestuarantsBeforeSearch.length).toBe(20);

const SearchBox=screen.getByTestId("SearchInput");

fireEvent.change(SearchBox, {target:{value:"K"}});

const RestuarantsAfterSearch=screen.getAllByTestId("Restuarants");

expect(RestuarantsAfterSearch.length).toBe(10);

  
})

it("Should test the Top Rated Button Flow", async()=>{

    await act(async ()=>render(
        <Provider store={appStore}>
            <BrowserRouter>
            <Body />
            </BrowserRouter>
   
    </Provider>
))

const RestuarantsBeforeClick=screen.getAllByTestId("Restuarants");

expect(RestuarantsBeforeClick.length).toBe(20);

const promotedBtn=screen.getByRole("button", {name:"Promoted"})

fireEvent.click(promotedBtn);

const RestuarantsAfterClick=screen.getAllByTestId("Restuarants");

expect(RestuarantsAfterClick.length).toBe(19);



  
})