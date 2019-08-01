import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const Routes = () => (
  <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Dashboard} />
  </Router>
)


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
