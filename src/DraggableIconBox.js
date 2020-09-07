import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Draggable from 'react-draggable';

import {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import sizes from './styles/sizes';
import {DRAWER_WIDTH} from './constants';

const styles = {
    root: {
      overflow: "hidden",
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
        color: "grey",
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
         fontSize: "3rem",
       
    }
   
}
class   DraggableIconBox extends Component {
    constructor(props) {
        super(props)
        this.state= {
            defaultPosition: {x: 200, y: 200},
            icon: "",
            name: "",
            icons: this.props.icons,
          

        }
      
    }

	handleStop = (e, keyId) => {
        const updatedIcons = [...this.state.icons]
        const findIcon = updatedIcons.find(icon=> icon.id === keyId)
         if (e.type ==="mouseup" ) {
            findIcon.x = e.pageX - DRAWER_WIDTH;
           findIcon.y = e.pageY;
           findIcon.floor = this.props.floor
         }
      
        if(e.type === "touchend") {
            let i;
            for (i=0; i < e.changedTouches.length; i++) {

              findIcon.x = e.changedTouches[i].pageX;
              findIcon.y = e.changedTouches[i].pageY;
              findIcon.floor = this.props.floor

            }
           
        }
        this.setState({ icons: updatedIcons})

        this.props.addNewPosition(this.state.icons);
    }

    
    render() {

        const {keyId, icon,name,handleClick, classes} = this.props;
      
        return (
     <div> 
<Helmet>
     <title>   استشارات هندسية - تصميم أونلاين</title>
        <meta name="description" content="مقاول بناء 
        شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
         ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
         تشطيب على المفتاح من التصميم للتسليم
         المخطط والرخصة
" />
   </Helmet>
   <Draggable
       axis="both"
       handle=".handle"
     defaultPosition={this.state.defaultPosition}
    position={null}
    grid={[25, 25]}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={(e)=>this.handleStop(e, keyId)} 
   
    >
        <div className={classes.root}>
          <span className={classes.iconName}> {name}</span>
    <i className={`${icon} handle ${classes.icons}`}></i> 
             
      <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
    </div>
   </Draggable>
  
         
    
       </div>
         
        )
  
   } 
}

export default withStyles(styles)(DraggableIconBox);
