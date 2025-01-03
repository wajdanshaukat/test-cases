import React from "react";

const TestFunction = (props) => {
    return (
        <div>
            <h1>hello</h1>
            <button onClick={props.click}>Click</button>
        </div>
    );
};

export default TestFunction;