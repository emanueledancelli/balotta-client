import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader } from "components/Loader";
import Loadable from "react-loadable";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NavBar from "components/NavBar";
import withErrorBoundary from "./hoc/withErrorBoundary";
/* 
const Home = Loadable({
  loader: () => import("views/Home"),
  loading: Loader
});
 */

const Home = Loadable({
  loader: () => import("components/LookingForEvents"),
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

const Best = Loadable({
  loader: () => import("views/Best"),
  loading: Loader
});

const Saved = Loadable({
  loader: () => import("views/Saved"),
  loading: Loader
});

const Routes = location => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Best} />
      <Route exact path="/favorite" component={Saved} />
      <Route exact path="/home" component={Home} />
      <Route
        exact
        path="/eventi/:listname/:id?/:index?"
        render={routeProps => <List {...routeProps} />}
      />
      <Route
        exact
        path="/:origin?/single/:id/"
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
            {/* <NavBar /> */}
            {Routes(location)}
            {location.pathname.startsWith("/") ||
            location.pathname.startsWith("/eventi") ? null : (
              <Navigation location={location} />
            )}
          </div>
        )}
      />
    );
  }
}

export default withErrorBoundary(App);
