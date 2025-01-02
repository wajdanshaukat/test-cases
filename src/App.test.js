const { render , screen} = require("@testing-library/react");
import App from "./App";

render(<App />);

test("Testing First Case", () => {
  const text = screen.getByText("Testing First Case");
  expect(text).toBeInTheDocument();
});