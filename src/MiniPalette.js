import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import { render } from '@testing-library/react';
const styles ={
    root: {
       backgroundColor: "white",
       border: "1px solid black",
       borderRadius: "5px",
       padding: "0.5rem",
       position: "relative",
       overflow: "hidden",
       cursor: "pointer",
       "&:hover svg": {
         opacity: 1
       }


    },
    colors: {
   backgroundColor: "#dae1e4",
   height: "150px",
   width: "100%",
   borderRadius: "5px",
   overflow: "hidden"

    },
    title: {
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   margin: "0",
   color: "black",
   paddingTop: "0.5rem",
   fontSize: "1rem",
   position: "relative"
    },
    emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem"

    },
    miniHomeItem: {
        width: "25%",
    height: "50%",
    margin:" 0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    backgroundSize: "cover"
  
    },
    delete: {

    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0
        

    }
}
class  MiniPalette extends Component {
    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e){
        e.stopPropagation();
        this.props.handleDeletePalette(this.props.id)
    }
    
    render(){
        const {classes, paletteName, homeItems, id, handleClick} = this.props;
    const miniHomeItems = homeItems.map(homeItem => (
        <div key={homeItem.id} className={classes.miniHomeItem} 
         style={{ backgroundImage:`url(${homeItem.url})`}}>

        </div>
       
    ))
    return (
        <div className={classes.root} onClick={handleClick}>
             
                <DeleteIcon className={classes.deleteIcon} 
                style={{transition: "all 0.3s ease-in-out"}}
                onClick={this.deletePalette}
                />
           
            <div className={classes.colors}>
                {miniHomeItems}
            </div>
                <div className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{id}</span>
                </div>
            </div>
       
     
    )
    }
    
}
export default withStyles(styles)(MiniPalette);