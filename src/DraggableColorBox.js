import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import sizes from './styles/sizes';
const styles = {
    root: {
    width: "10%",
    height: "30%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    backgroundSize: "cover",
    marginBottom: "-3.5px", 
    opacity: "0.8",
    "&:hover svg": {
        color: "white",
        transform: "scale(1.5)"
    },
  [sizes.down("xs")]: {
     width: "100%"
  },
  [sizes.down("md")]: {
    width: "50%"
 },
  [sizes.down("lg")]: {
    width: "25%"
 },
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "rgba(0, 0, 0, 0.8)",
        letterSpacing: "1px",
        textTransform: "uppercase",
       padding: "8px",
     
        fontSize: "12px",
       
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    },

    
}
const  DraggableColorBox = SortableElement((props) =>{
    const {classes, handleClick, name, color, icon} = props;
        return (
            <div className={classes.root} style={{backgroundColor: color}}>
            
            <i className={`${icon}`}
   style={{ color: "white", marginLeft: "25%",marginTop: "6%", fontSize: "3rem"}}></i> 
               <div className={classes.boxContent}>
                {/* <i style={{color: "blue"}} className={`${icon}`}></i> */}
                   <span> {name}</span>
                   {/* <span style={{color: "black"}}>{icon}</span> */}
                  <DeleteIcon className={classes.deleteIcon}
                  onClick={handleClick}
                  />
            
               </div>
             
            </div>
        )
  
})

export default withStyles(styles)(DraggableColorBox);
