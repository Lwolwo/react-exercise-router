import React, { Component } from 'react';
import './MyProfile.scss'

class MyProfile extends Component {
  render() { 
    return (<div className="myProfile">
      <p>Username: XXX</p>
      <p>Gender: Female</p>
      <p>Work: IT Industry</p>
      <p>Website: '/my-profile'</p>
    </div>);
  }
}
 
export default MyProfile;