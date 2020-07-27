import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
 
export default (
    <Switch>
    <Route exact path='/'  />
    <Route  exact path='/projects' />
     <Route exact   path='/projects/:collectionId'  />
     <Route exact path="/signin"  />
     <Route exact path="/design/new" />
     <Route exact  path='/design/:id'     />
     <Route exact path='/designs'  /> 
     <Route exact  path='/design/:designId/:floorId'  />
       </Switch>
        );  
                      
                    

