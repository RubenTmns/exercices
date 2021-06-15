
import { greet } from "./index"
  
test("greet return Francis", () => {
  
  expect(greet()).toBe("Hello WORLD!");
  expect(greet("Francis")).toBe("Hello FRANCIS!");
  
});
   

  
  




