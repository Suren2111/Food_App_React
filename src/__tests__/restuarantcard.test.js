import { render,screen } from "@testing-library/react"
import RestuarantCards from "../Component/RestuarantCards"
import MOCK_DATA from "../mocks/Restuarantcard.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"



test("Should test the Restuarantcard component with data props", ()=>{

  render(
        <BrowserRouter>
        <RestuarantCards rescard={MOCK_DATA}/>
        </BrowserRouter>
       )

   ;
    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

})