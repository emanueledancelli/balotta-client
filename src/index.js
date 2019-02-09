import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import { fetchEvents } from "./actions/eventsActions";
import createBrowserHistory from "history/createBrowserHistory";
export const history = createBrowserHistory();

store.dispatch(fetchEvents());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
