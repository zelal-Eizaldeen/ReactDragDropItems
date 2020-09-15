import React from 'react';
import {Helmet} from 'react-helmet';
import './collectionItem.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
       <Helmet>
     <title>   مترا استشارات هندسية</title>
        <meta name="description" content="مقاولات الكويت إبداع في التصميم الهندسي والبناء بأفضل جودة" />
   </Helmet>
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