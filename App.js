import React from "react";
import Index from "./src/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import themeReducer from "./redux/themeReducer";
import {Authorize} from './redux/authorize'

const store = createStore(
  combineReducers({ themeReducer, Authorize }),
  applyMiddleware(thunk)
);

export default function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Index />
      </Provider>
    </React.Fragment>
  );
}
