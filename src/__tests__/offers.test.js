import { render, screen } from "@testing-library/react"
import Offers from "../Component/Offers"
import "@testing-library/jest-dom"

describe("should test the offers component",()=>{
    
       test("should test the availability of button",()=>{
             render(<Offers />);
             const buttonText=screen.getByText("Submit");
             expect(buttonText).toBeInTheDocument();
       })
})


