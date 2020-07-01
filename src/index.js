// External imports

import React from "react";
import { render } from "react-dom";
// createStore, to create the store that will maintain the Redux state
// applyMiddleware, to be able to use middleware, in this case thunk
import { createStore, applyMiddleware } from "redux";
// Provider, to wrap the entire application in Redux
import { Provider } from "react-redux";
// thunk, a middleware that allows us to make asynchronous actions in Redux
import thunk from "redux-thunk";
// composeWithDevTools, code that connects your app to Redux DevTools
import { composeWithDevTools } from "redux-devtools-extension";

// Local imports
import App from "./App";
import rootReducer from "./reducers";

// Assets
import "./index.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
