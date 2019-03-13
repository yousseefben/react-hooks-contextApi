import React, { Component } from 'react';
import './App.css';
import MyLayout from './components/Layout/MyLayout';
import LayoutRoute from './components/Layout/LayoutRoute';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Overview from './components/Overview';
import EmptyLayout from './components/Layout/EmptyLayout';
import LoginPage from './components/login/LoginPage';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={MyLayout}
              component={Overview}
            />
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={LoginPage}
            />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default (App);

