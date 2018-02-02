import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Counter from './Counter'
import CounterList from './CounterList'

class App extends Component {
  render() {
    return (
      <div>
         <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      
      </ul>

      <hr/>

      <Route exact path="/" component={CounterList}/>
      <Route path="/counter/:id" component={Counter}/>
      
    </div>
  </Router>
      </div>
    );
  }
}

export default App;
