import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/app' component={() => { 
            window.location.href = 'https://apps.apple.com/us/app/avocado-social-investing/id1561473335'; 
            return null;
        }}/>
        <Route exact path='/signup' component={() => { 
            window.location.href = 'https://eepurl.com/hHIAf9'; 
            return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
