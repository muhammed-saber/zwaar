import React, { Component } from 'react';

import {Form, FormGroup, ControlLabel, FormControl,Button} from 'react-bootstrap';
import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom'
/*import Profile from '../Profile/Profile'   */

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            email: '',
            password: ''
          };
      }
    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit(e) {
        e.preventDefault();
 
        const user = {
            email: this.state.email,
            password: this.state.password
                };
      axios.post('https://reqres.in/api/login', {email: this.state.email,
      password: this.state.password} )
         .then(res => {
             console.log(res);
             sessionStorage.setItem('jwtToken', res.data.token);
             
           /*  axios.get('https://reqres.in/api/users/2')
             .then(res => {
               console.log(res); */
              
             } )
       /*      <Profile data={this.state.data.data.data} />*/
             this.props.history.push('/profile')
            
        }


  render() {
    return (
      <div className="Login">
      <form onSubmit={this.onSubmit}>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <FormControl.Feedback />

        <ControlLabel>Password</ControlLabel>
        <FormControl
        type="password"
        name="password"
        value={this.state.password}
        placeholder="Enter text"
        onChange={this.handleChange}
      />
        <FormControl.Feedback />
      </FormGroup>
      <Button type="submit">Submit</Button>

    </form>       
      </div>
    );
  }
}

export default withRouter(Login);
