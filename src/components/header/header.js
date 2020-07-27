
  
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import metraLogo from '../../assests/images/metraLogo.gif';
import './header.scss';

// const Header = ({currentUser}) => (
  const Header = (props) => (
  <div className='header'>
   
    <Link className='logo-container' to='/'>
     <img src={metraLogo} className='logo' alt="Metra Constructions-مقاولات-الكويت"/>
   
    </Link>
    <div className='options'>

    {
          props.userId ?  
          <div className='option' onClick={() => props.logOut()}>
           تسجيل الخروج
          </div>
         : 
          <Link className='option' to= './signin'> تسجيل الدخول</Link>

       } 
       
      <Link className='option' to='/projects'>
       مشاريعنا
      </Link>
     
      <Link className='option' to='/design/new'>
       صمم بيتك
      </Link>
      <Link className='option' to='/'>
        الرئيسية
      </Link>
      
    
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);