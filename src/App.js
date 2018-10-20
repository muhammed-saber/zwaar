import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


import './App.css';

class App extends Component {
  
  render() {
    let token = sessionStorage.getItem('jwtToken');
    console.log(token)
        return (
      <div className="App">
        <h1>Hello</h1>
        <Router>
        <div>
       <Route  path="/" exact component={Registration} />
       <Route  path="/login" exact component={Login} />
       <Route  path="/profile" exact render={() => (
         !!token ? (<Profile />) : (<Redirect to="/" />)
       )} />


       
       
</div>
</Router>
      </div>
    );
  }
}

export default App;
