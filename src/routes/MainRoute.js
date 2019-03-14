// LIST IMPORT MODULE
import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from '../store';

// LIST IMPORT COMPONENT
import Home from "../pages/Home";
import Signin from '../components/Signin';
import Profile from '../components/Profile';
import CategoryPage from '../components/CategoryPage';
import Action from '../pages/Action';
import Romance from '../pages/Romance';
import Fiction from '../pages/Fiction';
import Comedy from '../pages/Comedy';
import Notfound from '../components/Notfound';

// MAIN CLASS
class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/category" component={CategoryPage} />
        <Route exact path="/action" component={Action} />
        <Route exact path="/romance" component={Romance} />
        <Route exact path="/fiction" component={Fiction} />
        <Route exact path="/comedy" component={Comedy} />
        <Route path="/:query" component={Notfound} />
      </Switch>
    );
  }
}

// EXPORT THE MAIN CLASS
export default connect(
  "x", actions)
(withRouter(MainRoute));
