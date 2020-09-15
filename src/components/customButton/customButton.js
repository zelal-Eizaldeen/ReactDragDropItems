import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, btnType, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in'
          : ''} custom-button`} 
          {...otherProps}>
    {children}
  </button>
);

export default CustomButton;