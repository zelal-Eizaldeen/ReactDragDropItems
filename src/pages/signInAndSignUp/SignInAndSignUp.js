import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

import './signInAndSignUp.scss'

 const SignInAndSignUp = (props) =>   (
  <div className='sign-in-and-sign-up'>
      <SignIn token={props.token} userId={props.userId} setToken={props.setToken} checkAuthTime={props.checkAuthTime}/>
      <SignUp token={props.token} userId={props.userId} setToken={props.setToken} checkAuthTime={props.checkAuthTime}/>
  </div>
      

 )

export default SignInAndSignUp;
