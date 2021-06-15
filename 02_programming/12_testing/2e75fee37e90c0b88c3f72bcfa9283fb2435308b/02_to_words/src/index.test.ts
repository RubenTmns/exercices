import { toWords } from "./index";


test ("allWords", () => {
  

  expect(toWords("Y:ello")).toBe("['Y', 'ello']");
  //expect(toWords("Y:ello")).not.toBe('["Y", "ello"]');
})