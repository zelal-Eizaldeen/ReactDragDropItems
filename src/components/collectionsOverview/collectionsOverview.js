import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collectionPreview/collectionPreview';
import {selectCollectionsForPreview} from '../../redux/project/project.selectors';

import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div  className='collection-overview'>
      {collections.map(({id, ...otherCollectionProps})=> (
          <CollectionPreview key={id} {...otherCollectionProps} />
      ))}

    </div>
    
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

  export default connect (mapStateToProps)(CollectionsOverview);