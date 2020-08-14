import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Auth0Provider} from "@auth0/auth0-react";
import allReducer from "./redux/reducer/index";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let domain = process.env.REACT_APP_DOMAIN;
let clientId = process.env.REACT_APP_CLIENTID;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
