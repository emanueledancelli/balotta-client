import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "components/Loader";
import Loadable from "react-loadable";
import Header from "./components/Header";
import Navigation from "components/Navigation";

const Search = Loadable({
  loader: () => import("views/Search"),
  loading: Loader
});

const List = Loadable({
  loader: () => import("views/List"),
  loading: Loader
});

const Single = Loadable({
  loader: () => import("views/Single"),
  loading: Loader
});

const Home = Loadable({
  loader: () => import("views/Home"),
  loading: Loader
});

const Favourites = Loadable({
  loader: () => import("views/Favourites"),
  loading: Loader
});

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/search" component={Search} />
      <Route
        exact
        path="/eventi/:listname/:id?/:index?"
        render={routeProps => <List {...routeProps} />}
      />
      <Route
        exact
        path="/single/:id"
        render={routeProps => <Single {...routeProps} />}
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
            {location.pathname.startsWith("/single") ||
            location.pathname.startsWith("/eventi") ? null : (
              <Navigation location={location} />
            )}
          </div>
        )}
      />
    );
  }
}

export default App;
