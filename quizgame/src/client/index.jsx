import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Match } from "./match";
import { Home } from "./home";

const NotFound = () => {
  return (
    <div>
      <p>404 not found</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/match" component={Match} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
