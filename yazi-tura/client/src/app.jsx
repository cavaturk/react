import React from 'react';
import ReactDom from 'react-dom';

import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import HomePage from './containers/HomePage.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';


ReactDom.render(<Router>
      <div>
            <div className="top-bar">
                  <div className="top-bar-left">
                        <Link to="/">React App</Link>
                  </div>

                  <div className="top-bar-right">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                  </div>

            </div>
            <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/signup' component={SignUpPage} />
                  <Route exact path='/login' component={LoginPage} />
            </Switch>
      </div>
</Router>, document.getElementById('react-app'));


