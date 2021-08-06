import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

import Header from "./utils/Header";
import Home from "./Components/Home";
//import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
