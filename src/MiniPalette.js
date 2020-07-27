import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import sizes from './styles/sizes';
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
        },
        [sizes.down("xs")]: {
          width: '250px',
         
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
    
class  MiniPalette extends Component {
 
    constructor(props){
        super(props);
        this.deleteDesignById = this.deleteDesignById.bind(this);
    }
   
    deleteDesignById(e){
        e.stopPropagation();
        this.props.deleteDesignById(this.props.id)
    }
    
    render(){
        const {classes,  handleClick} = this.props;
    return (
        <div className={classes.root} onClick={handleClick}>
             
             <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deleteDesignById}
        />
                  
         <div>Show Design</div>
      
         <h5 className={classes.title}>
           <span className={classes.floor}> {this.props.email}</span>
          
        </h5> 
      </div>
       
     
    )
    }
    
}
export default withStyles(styles)(MiniPalette);