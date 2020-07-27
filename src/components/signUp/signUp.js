import React, { Component } from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './signUp.scss'
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import axios from 'axios'
import Spinner from '../UI/Spinner';
export default class signUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            idToken: '',
            localId: '',
            loading: false
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        this.setState({loading: true})
          if(password !== confirmPassword){
              alert("password don't match");
              return;
          } 

          const authData = {
            displayName: displayName,
            email: email,
            password: password,
            returnSecureToken: true
          };
          axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSHPlWqTSey5dMjdXUw2PmJFvL6ewkG2E', authData)
          .then(res=> {
                this.setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
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
        //   try {
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password);
        //   await createUserProfileDocument(user, {displayName});
        //   this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        //   })
        //   } catch (error) {
        //      alert(error)
        //   }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        let form =  (<div>

       <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={this.handleChange}
        label='Display Name'
        required
        />

    

        <FormInput
        type='email'
        name='email'
        value={email}
        onChange={this.handleChange}
        label='Email'
        required
        />

       

        <FormInput
        type='password'
        name='password'
        value={password}
        onChange={this.handleChange}
        label='Password'
        required
        />

      
        <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={this.handleChange}
        label='Confirm Password'
        required
        />
          </div>
        )
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                 {form}
                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
                
            </div>
        )
    }
}
