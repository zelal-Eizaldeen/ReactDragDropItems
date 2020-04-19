import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleHomeItemPalette from './SingleHomeItemPalette';
import NewPaletteForm from './NewPaletteForm';
import homeItemIcons from './homeItemIcons'
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';

import Header from './components/header/header';
import Directory from './components/directory/directory';
import ProjectPage from './pages/project/project';
import CollectionPage from './pages/collection/collection';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCollectionsForPreview} from './redux/project/project.selectors';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

    this.state = {
      palettes: savedPalettes|| homeItemIcons,

    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);


  }
  unSubscribeFromAuth = null;

  componentDidMount(){
const {setCurrentUser, collectionsArray} = this.props;
    this.unSubscribeFromAuth  = auth.onAuthStateChanged( async userAuth => {
     // this.setState({ currentUser: user})
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         setCurrentUser({
             id:snapShot.id,
             ...snapShot.data()
  
         })
       })
     } else {
       setCurrentUser(userAuth);
       addCollectionAndDocuments('collections', collectionsArray)
     }
    })
  
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  findPalette(id) {
   return  this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }
  deletePalette(id){
this.setState(
  st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),
  this.syncLocalStorage
)
  }
 savePalette(newPalette){
   this.setState({palettes: [...this.state.palettes, newPalette]}, 
    this.syncLocalStorage)
 }
 syncLocalStorage() {
   window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
 }
  render() {
  return (
    <div>

  <Header />

    <Switch>
 
      <Route exact path="/palette/new"
         render={(routeProps)=> this.props.currentUser ? 
          (
         <NewPaletteForm 
            savePalette={this.savePalette}
            {...routeProps}
            palettes={this.state.palettes}
          />) : (<Redirect to='/signin'/>)}
      />
      <Route exact path='/design' 
      render={routeProps=>
         <PaletteList
          palettes={this.state.palettes} deletePalette={this.deletePalette}
          {...routeProps}
      /> } />

    <Route exact path='/' 
      render={routeProps=>
         <Directory
          palettes={this.state.palettes} deletePalette={this.deletePalette}
          {...routeProps}
      /> } />
       <Route exact path="/signin"
         render={(routeProps)=> this.props.currentUser ? 
         (<Redirect to='/'/>) : 
         (<SignInAndSignUp
            
         />)}
      />
       <Route  
          exact 
          path='/projects' 
          component={ProjectPage}
         />
        <Route  
          exact 
          path='/projects/:collectionId' 
          component={CollectionPage}
         />
      <Route  
          exact 
          path='/palette/:id' 
          render={routeProps => (
      <Palette 
      floorUrl={routeProps.match.params.id} 
      palette={this.findPalette(routeProps.match.params.id)} />
      
          )}
          />
          <Route exact path="/palette/:paletteId/:homeItemId"
             render={routeProps => (
              <SingleHomeItemPalette 
              homeItemId={routeProps.match.params.homeItemId}
              palette={this.findPalette(routeProps.match.params.paletteId)} />
              
                  )}
                  />
             </Switch>
             </div>
    
  
  );
 }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
  collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
