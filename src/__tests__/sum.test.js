import { Sum } from "../Component/Sum";

test("Should test the summation of two numbers",()=>{
    const result=Sum(3,4);
    expect(result).toBe(7);
})