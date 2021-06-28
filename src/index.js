import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AllReducers from "./reducers/AllReducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./style.css";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
