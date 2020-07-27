import React, {Component, useRef} from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {storage} from './firebase/firebase.utils';


const styles ={
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        marginTop:"100px",
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
      floor: {
        marginLeft: "0.1rem",
        fontSize: "0.5rem"
      },
      miniHomeItems: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
      },
      deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "40px",
        height: "40px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0
      },
      icons: {
          fontSize: '1.5rem',
          backgroundColor: 'pink'
      },
      iconName: {
          fontSize: '0.5rem'
      }
    };
    
class  FloorLists extends Component {
 
    constructor(props){
        super(props);
      
        this.state={
          designs: [],
          imageUrl: ''
        }
       
      
        this.deleteDesignByFloor = this.deleteDesignByFloor.bind(this);
    }
   
    deleteDesignByFloor(e){
        e.stopPropagation();
        this.props.deleteDesignByFloor
        (this.props.design.design.id, this.props.design.id)
    }
    
    render(){
      const {classes,  handleClick, design} = this.props;

        const storageRef = storage.ref();
        const imagesRef = storageRef.child(`images/${design.design.fileName}`);
         imagesRef.getDownloadURL().then(url => {
        this.setState({ imageUrl: url})
        
         }) 
    return (
        <div className={classes.root} onClick={handleClick}>
             
             <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deleteDesignByFloor}
        />
                  
        <div onClick={handleClick}>{design.design.floor}</div>
     
         <h5 className={classes.title}>
           <span className={classes.floor}> {design.design.paletteName}</span>
           <a  style={{color: 'blue', fontSize: '12px' }} href={`${this.state.imageUrl}`}>Download </a>

          
        </h5> 
   
      </div>
       
     
    )
    }
    
}
export default withStyles(styles)(FloorLists);