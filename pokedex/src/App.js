import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import List from './components/List';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <List />
          </Route>
          <Route path="/pokemon">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
