import React from "react";
import { Route, Switch } from "react-router-dom";
import Landingpage from "./components/views/Landingpage";
// import Login from "./components/views/Login";
import Signup from "./components/views/Signup";
import ProductScreen from "./components/views/ProductScreen";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={ProductScreen} />
        <Route path="/" component={Landingpage} />
      </Switch>
    </div>
  );
};

export default App;
