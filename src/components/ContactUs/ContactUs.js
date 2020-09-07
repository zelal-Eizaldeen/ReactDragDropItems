import React from 'react';
import Map from '../../shared/Map';
import {LOCATION} from '../../constants';
import ContactData from './ContactData';
import bg from '../../assests/images/bg.svg';

import './ContactUs.css';

class ContactUs extends React.Component {
  
  state = { location: LOCATION };
  render() {
    return (
      <div>
   
      <div className="background-image" style={{backgroundImage: `url(${bg})`}}></div> 
      <div className="map-container">

     
       <Map center={this.state.location} zoom={16}/>
      
      <ContactData  {...this.props}/>
      
     
      </div>
           
      </div>
    );
  }
}
export default ContactUs;



