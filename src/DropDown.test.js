import { render, screen, act } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

// using getAllByRole
// test("getAllByRole", () => {
//     render(<App />);
//     const btns = screen.getAllByRole("button");
//     expect(btns[1]).toBeInTheDocument();
// });

// if we want both test as same time we can use the for loop
test("getAllByRole", () => {
    render(<App />);
    const btns = screen.getAllByRole("button");
    for (let i = 0; i < btns.length; i++) {
        expect(btns[i]).toBeInTheDocument();
    }
});



//for select element

test("select element", () => {
    render(<App />);
    const options = screen.getAllByRole("option");
    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument();
    }
});



// tesxt match in test

test("test match with function", () => {
    render(<App />);
    const dv = screen.getByText((content, element) => content.startsWith("Hello"));
    // const dv = screen.getByText((content,element) =>content.includes("ll"));
    expect(dv).toBeInTheDocument();
})


//async function test

// test("Act function", async () => {
//     const user = userEvent.setup(); // Use the setup method to initialize userEvent
//     render(<App />);
//     const input = screen.getByRole("textbox");
//     await act(async () => {
//         await user.type(input, "hello");
//     });
//     expect(screen.getByText("hello")).toBeInTheDocument();
// })