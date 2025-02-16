import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Sample } from "../Component/Sample";


test("Should test if the cart component is loaded",()=>{
    render(<Sample />);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})