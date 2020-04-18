
  
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';

import metraLogo from '../../assests/images/metraLogo.gif';

import './header.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
     <img src={metraLogo} className='logo' alt="Metra Constructions"/>
   
    </Link>
    <div className='options'>
      <Link className='option' to='/projects'>
       PROJECTS
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>
           SIGN OUT
          </div>
          :
          <Link className='option' to= './signin'> SIGN IN</Link>

      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);