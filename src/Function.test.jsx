import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestFunction from "./Function";


test("functional props testing",()=> {
    const TestFunction= jest.fn();
    userEvent.setup;
    render(<TestFunction click={TestFunction}/>);
    expect(TestFunction).toHaveBeenCalled();
})