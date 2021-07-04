import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./store/reducers/movies";
import sidebarReducer from "./store/reducers/sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[logger] action", action);
      const result = next(action);
      console.log("[logger] nextState", store.getState());
      return result;
    };
  };
};

const rootReducers = combineReducers({
  movies: moviesReducer,
  sidebar: sidebarReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
