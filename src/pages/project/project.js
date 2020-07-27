  
import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview'
const ProjectPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
  </div>
);


export default ProjectPage;