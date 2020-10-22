import React, {useEffect} from "react";
import Index from "./src/index";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Chat from "./src/pages/chatRoom";

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
