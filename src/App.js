import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Favourites from "./pages/Favourites/Favourites.page";
import Search from "./pages/Search/Search.page";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/search" component={Search} />
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
            <Navigation location={location} />
          </div>
        )}
      />
    );
  }
}

export default App;
