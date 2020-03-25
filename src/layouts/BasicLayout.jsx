/*
 *  Basic layout of the app. Visible to logged in users only.
 *
 */

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import routes from "../route";

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRoutes() {
    return routes.map((prop, index) => {
      return (
        <Route
          exact
          path={prop.path}
          render={props => <prop.component {...props}></prop.component>}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Navbar></Navbar>
          <div className="router-container">
            <Switch>
              {this.getRoutes()}
              <Redirect from="/" to="/"/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
