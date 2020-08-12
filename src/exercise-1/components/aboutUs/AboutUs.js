import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AboutUs.scss'

class AboutUs extends Component {
  render() { 
    return (<div className="aboutUs">
      <div className="section">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
      </div>
      <div className="section">
        <p>For more information, please</p>
        <p>view our <Link to="/">website</Link></p>
      </div>
    </div>);
  }
}
 
export default AboutUs;