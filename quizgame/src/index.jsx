import React from "react";
import ReactDOM from "react-dom";
import Match from "./match";

// FUNCTIONAL COMPONENT VERSION
const App = () => {
    return (
        <div>
            <Match/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
