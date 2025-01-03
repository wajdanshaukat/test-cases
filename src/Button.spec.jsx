const { render, screen, fireEvent } = require("@testing-library/react");
import App from "./App";


//beforeEach||beforeAll||afterAll||afterEach hooks

beforeAll(()=>{
  console.log("***** beforeAll *****");
});

test("testing onClick 1", () => {
  render(<App />);
  const checkButton = screen.getByRole("button", { name: "Updated Data" });
  fireEvent.click(checkButton);
  expect(screen.getByText("update Data")).toBeInTheDocument();
});



// testing multiple elements
//when use the multiple elements then use the getByRole also defined their names.

test("getByRole Testing", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "Click 1" });
  expect(btn1).toBeInTheDocument();
});


// for multiple inputs we can use label names.
test("getByRole Testing", () => {
  render(<App />);
  const inputField2 = screen.getByRole("textbox", { name: "User Name:" });
  expect(inputField2).toBeInTheDocument();
})


// for non sementic elements we can manually create the role
test("getByRole Testing", () => {
  render(<App />);
  const div = screen.getByRole("trail");
  expect(div).toBeInTheDocument();
})