import React, {useState} from 'react';
import {storage} from './firebase/firebase.utils';

import {Helmet} from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from "classnames";
import PaletteFormNav from './PaletteFormNav';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {DRAWER_WIDTH} from './constants';
import DraggableIconList from './DraggableIconList';

import IconPickerForm from './IconPickerForm';
 import axios from './axios-designs';
import sizes from './styles/sizes';
import FileUpload from './components/FileUpload/FileUpload';
import { useHttpClient } from './shared/hooks/http-hook';


const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [sizes.down("xs")]: {
      width: "0px",
     
   },
  },
  drawerPaper: {
  //Here the items
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
    overflowY: "auto",
    [sizes.down("xs")]: {
      width: "30%",  
   }, 
  },
  drawerHeader: {
   display: 'flex',
    alignItems: 'center',
    width: "100%",
     padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
     justifyContent: 'flex-end',
    fontSize: "20rem",
   
  },
  content: {
   //Where I am Drawing..
    flexGrow: 1,
    // overflow: 'hidden',
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [sizes.down("xs")]: {
      marginLeft: 0,
     
   },

   
  },
  contentShift: {
    // overflow: 'hidden',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
   width: "90%",
   height: "20%",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   marginTop: "260px",
  
  
  },
  buttons: {
width: "100%",
  },
  button: {
width: "100%",
marginTop: "4%",

marginBottom: "10%"

  },
  textNo: { 
    width: "30%", 
    margin: "40% 30%",
    alignItems: "center",
    fontSize: "16px",
    textAlign: "center"    
  }

}));


export default function NewPaletteForm(props) {
  NewPaletteForm.defaultProps  = {
    maxIcons: 100
  };
    const classes = useStyles();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [open, setOpen] = React.useState(true);
    const [icons, setIcons] = useState([])
    const [iconsMoved, setIconsMoved] = useState([]);
    const [floor, setFloor] = useState("Basement");
    const [file, setFile] = useState();

    // const handleCurrentUser = () => {
    //     switch (props.currentUser) {
    //       case null:  return;
    //        default: return props.currentUser.displayName;
            
    //     }
    //   }
  
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const addNewIcon = (newIcon) => { 
        setIcons(
          [...icons, newIcon])
    }
    const removeIcon = (iconName) => {
        setIcons(icons.filter(icon => icon.icon !== iconName))
    }
    const clearIcons = () => {
      setIcons([])
  }   
  const addNewPosition = (newPosition) => {
       setIconsMoved(
       [...iconsMoved, newPosition])
     
  }

const saveDesignWithFloor = (newDesign) => {
 setFloor(newDesign.floor)
}

const onInput = (id,pickedFile, isValid) => {
  setFile(pickedFile)

}
    const handleSubmitDesign = async () => {
      const metadata = {
        contentType: 'image/jpeg',
      };
      
      const storageRef = storage.ref();
      const imagesRef = storageRef.child(`images/${file.name}`); 
      imagesRef.put(file, metadata).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
     
      const newDesign = {
        id:   props.userId,
        userId: props.userId,
        paletteName:   props.email,
        email: props.email,
        floor: floor,
        fileName: file.name,
        homeItems: icons,
       }
    
       axios.post(`/designs/${props.userId}.json?auth=${props.token}`, newDesign)

      .then(response => {
      })
      alert(' تم الإرسال بنجاح')
     }
     
      return (
        <div className={classes.root}>
        
        <Helmet>
     <title>مقاولات عامة واستشارات هندسية - constructions - مقاولات عامة الكويت - مقاول بناء</title>
        <meta name="description" content="مقاول بناء 
        شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
         ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
         تشطيب على المفتاح من التصميم للتسليم
         المخطط والرخصة
" />
   </Helmet>
          <PaletteFormNav
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleSubmitDesign={handleSubmitDesign}
            floor={floor}
            saveDesignWithFloor={saveDesignWithFloor}
          />
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
            
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={clearIcons}
                className={classes.button}
              >
                Clear 
              </Button>
           
            </div>                     
            <IconPickerForm
              addNewIcon={addNewIcon}
              handleDrawerOpen={handleDrawerOpen}
              
            /> 
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
       
      {icons.length > 0 ? (
        <DraggableIconList 
          icons={icons}
         removeIcon={removeIcon}
         addNewPosition={addNewPosition}
         open={open}
         floor={floor}
      />
       )
        : <p className={classes.textNo}>Choose Your Home Room by Clicking on it</p>
        }
          <FileUpload id="image" center onInput={onInput}/>
        </main>
       
      </div> );
}
