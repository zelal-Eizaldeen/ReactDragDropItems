import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css';

const backdrop = (props) => {
   return ReactDOM.createPortal(
       <div className="backdrop" onClick={props.onClick}></div>,
       document.getElementById('backdrop-hook')
    //    props.show ? <div className="Backdrop" 
    // onClick={props.clicked}></div>: null
   );
};
export default backdrop;