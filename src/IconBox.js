import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import {storage} from './firebase/firebase.utils';

const styles = {

    root: {
     
    display: "inline-block",
    cursor: "pointer",
    backgroundSize: "cover",
     opacity: "0.8",
    "&:hover svg": {
        color: "grey",
        transform: "scale(1.5)"
    },
 
    },
    iconName: {
        marginRight: "2px" ,
        display: 'block'
    },
    deleteIcon: {
        color: "rgba(0, 0, 0, 0.5)",
        display: 'block',
        margin: '2px',
        transition: "all 0.3s ease-in-out"
    },
    icons: {
        fontSize: "3rem"
        
    }
   
   
}
 class IconBox extends Component {
    render() {
      
         const {key, name, background, positionX, positionY, classes} = this.props;
      
        return(
       
        <div key={key} className={classes.root} 
          style={{ 
         position: "absolute",
        left: `${positionX}px`, top: `${positionY}px`, 
     }}
        >
        <span className={classes.iconName}> {name}</span>
        <i className={`${background} ${classes.icons}`}
        ></i> 
           
     </div>
        
        );
    }
}
 
export default withStyles(styles)(IconBox);
