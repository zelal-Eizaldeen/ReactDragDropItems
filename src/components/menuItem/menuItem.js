import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      />
      <img 
      // style={{ width: "100%",
      // height: "100%",
      // backgroundSize: "cover",
      // backgroundPosition: "center"}} 
      src={`${imageUrl}`}/>
      {/* style={{
        backgroundImage: `url(${imageUrl})`

      }} */}
   
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'> مشاهدة</span>
    </div>
  </div>
);

export default withRouter(MenuItem);