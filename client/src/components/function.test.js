import { getAnswer, add } from "./function";

 test("Checking Add",  () => {
    const result =  add(1,2);
    expect(result).toBe(3);
 });