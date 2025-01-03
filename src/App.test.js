const { render, screen, fireEvent } = require("@testing-library/react");
import App from "./App";

test("Testing First Case", () => {
  render(<App />);
  const text = screen.getByText(/Testing First Case/i);
  expect(text).toBeInTheDocument();
});

// UI Testing in group format
describe("UI Testing", () => {
  test("Testing Case 1", () => {
    render(<App />);
    const text = screen.getByText(/Testing First Case/i);
    const title = screen.getByTitle("ai generated");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});


//onClick event testing

test("testing onClick button", () => {
  render(<App />);
  const checkButton = screen.getByRole("button", { name: "Updated Data" });
  fireEvent.click(checkButton);
  expect(screen.getByText("update Data")).toBeInTheDocument();
});
