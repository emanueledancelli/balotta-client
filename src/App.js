import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Favourites from "./pages/Favourites/Favourites.page";
import Search from "./pages/Search/Search.page";
import Single from "./pages/Single/Single.page";
import List from "./pages/List/List.page";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/search" component={Search} />
      <Route
        exact
        path="/eventi/:id/:title"
        render={routeProps => <Single {...routeProps} />}
      />
      <Route
        exact
        path="/list/:listname/:id/:index"
        render={routeProps => <List {...routeProps} />}
      />
    </Switch>
  );
};

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <Header location={location} />
            {Routes(location)}
            <Navigation location={location} />
          </div>
        )}
      />
    );
  }
}

export default App;
