import { render,screen } from "@testing-library/react"
import RestuarantCards from "../Component/RestuarantCards"
import rescard from "../mocks/Restuarantcard.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should render the RestuarantCard component",()=>{
    render(
        <BrowserRouter>
        <RestuarantCards rescard={rescard}/>
        </BrowserRouter>
    )

    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

})