import React from "react";
import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

const App = () => {
    const [value, setValue] = useState(10);

    const clickHandler = (newValue) => {
        console.log("new value,", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Display value={value} />
            <Button onClick={() => clickHandler(1000)} text="testing" />
            <Button onClick={() => clickHandler(0)} text="reset" />
            <Button onClick={() => clickHandler(value + 1)} text="increment" />
        </div>
    );
};

export default App;
