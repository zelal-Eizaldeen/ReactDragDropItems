import React, { Component } from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import axios from './axios-designs';
import unsplash from './api/unsplash';

import {connect} from 'react-redux';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';

import Header from './components/header/header';
import Directory from './components/directory/directory';
import ProjectPage from './pages/project/project';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCollectionsForPreview} from './redux/project/project.selectors';
import './App.css';
import SingleDesign from './SingleDesign';
import SearchBar from './components/Search/SearchBar';
import ContactUs from './components/ContactUs/ContactUs';
import Projects from './containers/projects/Projects';
import Constructions from './containers/projects/Constructions';
import Interior from './containers/projects/Interior';
import Prices from './components/Prices/Prices';




class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentUser: null,
      fetchDesigns: [],
      fetchDesignsById: [],
      deletedDesignByFloor: [],
      selectedFloor: null,
      loading: false,
      token: null,
      googleToken: null,
      email: '',
      userId: null,
      expirationTime: null,
      error: null,
      searchResults: [] 
    };
  }
  unSubscribeFromAuth = null;
  googleAccessToken = null;

  onFloorSelect = design => {
    this.setState({ selectedFloor: design})
  }

  componentDidMount(){
    this.checkAuthTimeExp();
    this.unSubscribeFromAuth  = auth.onAuthStateChanged( async userAuth => {
       if(userAuth) {
              userAuth.getIdToken().then(
              idToken=> {
               
                this.setState({ 
                  token: idToken, 
                  email: userAuth.email, 
                  userId: userAuth.uid, 
                  expirationTime: userAuth.refreshToken })

              })
               const userRef = await createUserProfileDocument(userAuth);
               userRef.onSnapshot(snapShot => {
                 this.setState({
                   currentUser: {
                    id:snapShot.id,
                    ...snapShot.data()
                   }, 
                 });
                
               })

             } else {
              this.setState({ currentUser: userAuth})
            }
          });
          this.fetchDesigns();
       
        }
  
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
 
  fetchDesigns = async () => {
  this.setState({loading: true})
    const response = await axios.get(`/designs.json`)
        {
         
        const fetchDesigns = [];
        for (let key in response.data) {
           for (let key2 in response.data[key]){
                fetchDesigns.push({ 
                  id: key,
                  config: response.data[key][key2],    
              })
            }
        }
        this.setState({ fetchDesigns: fetchDesigns, loading: false})

    }
}
   findDesign = async (id) => { 
    if (id) {

       const designID =  this.state.fetchDesignsById.find(design=> design.design.id ===id)
    if(!designID || (designID && designID.design.id !== id) ){
        const response = await axios.get(`/designs/${id}.json`)
           {
                const fetchDesignsById = [];
                for (let key in response.data) {
                    fetchDesignsById.push({ 
                       
                      id: key,
                      design: response.data[key]
                    })
                }        
               this.setState({ fetchDesignsById: fetchDesignsById})
        }

     }

    }

   }

  
 
  deleteDesignById = async (userId)=>{
       await axios.delete(`/designs/${userId}.json?auth=${this.state.token}`)
    window.location.reload();
  }
 
deleteDesignByFloor = async (userId,floorId) => {
     await axios.delete(`/designs/${userId}/${floorId}.json?auth=${this.state.token}`)
    window.location.reload();
  }
  setToken = (token, email, userId, expirationTime) => {
   this.setState({ token: token, email: email, userId: userId, expirationTime: expirationTime})
 }
 logOut = () => {
  
  auth.signOut();

   localStorage.removeItem('token');
   localStorage.removeItem('expirationDate');
   localStorage.removeItem('userId');
   localStorage.removeItem('email');
   this.setState({ token: null, userId: null, currentUser: null, email: null})

 }
 checkAuthTime =  (expirationTime) => {
     return  setTimeout(()=> {
       this.logOut()
   }, expirationTime * 1000)
}
checkAuthTimeExp =  () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const email = localStorage.getItem('email');
 const expirationDate = new Date(localStorage.getItem('expirationDate'));
  if(!token) {
    //  return this.logOut()
    return;
   
  } else {
    if(expirationDate <= new Date()){
      this.logOut();
    }else {
      this.setToken(token, email, userId, expirationDate)
      this.checkAuthTime((expirationDate.getTime() - new Date().getTime()) /1000)
    }
  }
}
  onSearchSubmit = async (term) => { 
   const response = await unsplash.get('/search/photos', {
     params: {query: term},
    
   })
   this.setState({ searchResults: response.data.results})
 }
  render() {
  return (
    <div>
 <Helmet>
     <title>استشارات هندسية الكويت</title>
        <meta name="description" content="مقاول بناء 
        شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
         ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
         تشطيب على المفتاح من التصميم للتسليم
         المخطط والرخصة
" />
   </Helmet>
      <Header 
      userId={this.state.userId}
      logOut={this.logOut}
      checkAuthTime={this.checkAuthTime}
      />
      <Switch>
      <Route exact path='/' 
          render={routeProps=> (
      <Directory
        {...routeProps}
        isLoading={this.state.loading}
      /> 
      )}
      />
             <Route   exact 
              path='/projects' 
              component={ProjectPage}
            />
                  <Route  
                    exact 
                    path='/projects/:collectionId' 
                    component={Projects}
                  />
      
                   <Route  
                    exact 
                    path='/interior' 
                    component={Interior}
                  />
                   <Route  
                    exact 
                    path='/constructions' 
                    component={Constructions}
                  />
                  <Route exact path="/signin"
                  render={(routeProps)=>     
 
                  this.state.userId ?
                (
                <Redirect to="/"/>) 
                : 
                (<SignInAndSignUp 
                  setToken={this.setToken}
                  checkAuthTime={this.checkAuthTime}
                  token={this.state.token}
                  userId={this.state.userId}
                  loading={this.state.loading}
                    
                />)}
                
                />


              <Route exact path="/design/new"
              render={(routeProps)=> 
                this.state.userId  ?
                (
                  <NewPaletteForm 
                    token={this.state.token}
                    email={this.state.email}
                    userId={this.state.userId}

                      {...routeProps}
                    />)
                    : (<Redirect to='/signin'/>)
                  }
                  />
                  <Route   
                  exact 
                    path='/design/:id' 
                    render={routeProps => 
                    (  
                  <Palette
                  design={this.findDesign(routeProps.match.params.id)}
                  fetchDesignsById={this.state.fetchDesignsById}
                  onFloorSelect={this.onFloorSelect}
                  deleteDesignByFloor={this.deleteDesignByFloor} 
                
                 
                  />
                  )} />
             
                <Route
                exact
                path='/designs'
                render=
                    {(routeProps) => 
                     this.state.email === "engaymanz@narcokw.com" ? 
                        (
                    <PaletteList
                    deleteDesignById={this.deleteDesignById}
                      {...routeProps}
                      fetchDesigns={this.state.fetchDesigns}
                      loading={this.state.loading}
                        />  )
                        : <p style={{backgroundColor: "red", color: "white", fontSize: "40px", fontWeight: "bold", padding: "300px", textAlign: "center"}}> غير مصرح بالدخول</p>

                       }               
              />              
             <Route  
                    exact 
                    path='/design/:designId/:floorId'
                    render={routeProps => (
                      <SingleDesign
                        fetchDesignsById={this.state.fetchDesignsById}
                        floorId={routeProps.match.params.floorId}
                        design={this.state.selectedFloor}
                      />
                    )}
                  />
                  <Route exact  path='/search' render={routeProps => 
                  (
                      <SearchBar
                       onSubmit={this.onSearchSubmit}
                       results={this.state.searchResults}
                      />
                    )}
                  />
                   <Route exact  path='/contact-us' render={routeProps => 
                  (
                      <ContactUs   {...routeProps} />
                    )}
                  />

<Route exact  path='/prices' render={routeProps => 
                  (
                      <Prices   {...routeProps} />
                    )}
                  />
                
               
                    <Redirect to='/' />

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
