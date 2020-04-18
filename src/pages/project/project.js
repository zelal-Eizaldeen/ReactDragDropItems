  
import React from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview'
const ProjectPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
  </div>
);


export default ProjectPage;