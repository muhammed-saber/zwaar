import React, { Component } from 'react';
import axios from 'axios';
import { Image, Well} from 'react-bootstrap';



class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
      }

      componentWillMount() {
        axios.get('https://reqres.in/api/users/2')
        .then(data => {
            this.setState({ data: data.data.data })
            console.log(data.data.data)  
        }            
        );
    }
  render() {
   /* const { data } = this.props.data;*/
   if(!this.state.data) {
     return <div>loading</div>
   }
    
    return (
    <div>
    <Image src="{this.state.data.avatar}" rounded />
    <Well bsSize="large">{this.state.data.first_name}</Well>
    <h1>{this.state.data.first_name} {this.state.data.last_name}</h1>    
  </div>
       
    );
  }
}

export default Profile;
