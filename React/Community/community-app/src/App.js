import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
          Hello, React!
        </header>
      </div> */}
      <div>
        <nav>
          <ul>
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
      </div>
    </Router>
  );
}

