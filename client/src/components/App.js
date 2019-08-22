// Render layer
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchUser } from '../actions';

import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
