import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import metraLogo from '../../../assests/images/metraLogo.gif';

import "./SideDrawer.css"


const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open) {
       attachedClasses = ["SideDrawer", "Open"];
    }
        return (
            <Aux> 
           <Backdrop show={props.open} clicked={props.closed}/>
            <div className={`${attachedClasses.join(' ')}`} onClick={props.closed}>
                <div className="Logo">
                <img src={metraLogo} className='logo' alt="Metra Constructions-مقاولات-الكويت"/>

                </div>
             
              
            </div>
            </Aux>
        );
    };
    export default sideDrawer;