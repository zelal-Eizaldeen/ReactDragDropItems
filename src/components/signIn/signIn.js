import React from 'react';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import Spinner from '../UI/Spinner';

import './signIn.scss';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      idToken: '',
      localId: '',
      loading: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({loading: true})

    const {email, password} = this.state;
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSHPlWqTSey5dMjdXUw2PmJFvL6ewkG2E', authData)
    .then(res=> {
      console.log(res)
      const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
      localStorage.setItem('token', res.data.idToken);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('userId', res.data.localId);
      localStorage.setItem('email', res.data.email);


      this.setState({ 
        email: '', 
        password:'',
       idToken: res.data.idToken, 
       localId: res.data.localId,
       loading: false
      })
      this.props.setToken(res.data.idToken, res.data.email, res.data.localId, res.data.expiresIn)
      this.props.checkAuthTime(res.data.expiresIn)
    })
    .catch (error => {
      alert(error)
      this.setState({loading: false})

       })
    // try{
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
      

    // } catch (error){
    //  alert(error)
    // }
  };

  signInWithGoogleApi = async event => {
    event.preventDefault();
    this.setState({loading: true})

    const {email, password} = this.state;
    const authData = {
     

      returnSecureToken: true,
      returnIdpCredential: true
    };
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyBSHPlWqTSey5dMjdXUw2PmJFvL6ewkG2E', authData)
    .then(res=> {
      console.log(res)
     
    })
    .catch (error => {
      alert(error)
      this.setState({loading: false})

       })
    // try{
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
      

    // } catch (error){
    //  alert(error)
    // }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    let form = (
      <div>
         <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
      </div>
     
    )
    if(this.state.loading){
      form = <Spinner />
    }
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
         {form}
          <div className="buttons">
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}
          isGoogleSignIn
          >Sign With Google</CustomButton>
      </div>
        </form>
      </div>
    );
  }
}

export default SignIn;