import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Landing from '../src/Components/Landing';
import SignIn from '../src/Components/SignIn';
import About from '../src/Components/About';
import Contacts from '../src/Components/Contacts';
import Dashboard from '../src/Components/Dashboard';
import NoMatch from '../src/Components/NoMatch';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Community
        </header>
        <nav className="navContainer">
          <ul clssName="navLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/signin">Sign In</Link>
            </li>
            <li>
            <Link to="/contacts">Contacts</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through it's children <Routes> and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

