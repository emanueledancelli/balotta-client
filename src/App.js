import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <Header />
            {Routes(location)}
            {/* <Navigation /> */}
          </div>
        )}
      />
    );
  }
}

export default App;
