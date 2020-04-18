import React from 'react';
import CustomButton from '../customButton/customButton';

//  import { addItem } from '../../redux/cart/cart.actions';

import './collectionItem.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    
    </div>
  );
};



export default CollectionItem;