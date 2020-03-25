import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "assets/sass/styles.scss";
import BasicLayout from "layouts/BasicLayout";
import { Provider } from "react-redux";
import store from "store/index";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            name="Dashboard"
            path="/"
            render={props => <BasicLayout {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
