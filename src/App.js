import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/guac' component={Home} />
        <Route path='/app' component={() => { 
            window.location.href = 'https://apps.apple.com/us/app/avocado-social-investing/id1561473335'; 
            return null;
        }}/>
        <Route path='/signup' component={() => { 
            window.location.href = 'http://eepurl.com/hHIAf9'; 
            return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
