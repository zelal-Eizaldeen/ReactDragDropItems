import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from "classnames";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableIconList from './DraggableIconList';
import { arrayMove } from 'react-sortable-hoc';
import {DRAWER_WIDTH} from './constants';





const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
   width: "90%",
   height: "100%",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   marginTop: "70px"

   
  },
  buttons: {
width: "100%"
  },
  button: {
width: "50%"
  }
}));


export default function NewPaletteForm(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [newPaletteName, setNewPaletteName] = useState('');
  // const [newColorName, setNewColorName] = useState('');
   const [colors, setColors] = useState([{color: 'blue', name: 'blue'}]);
  // const [colors, setColors] = useState([props.palettes[0].homeItems]);
    const [name, setName] = useState({
        colorName: "",
        paletteName: ""
      });
  
    const icons = [
        {name: 'fas fa-tv'},
        {name: 'fas fa-bath'},
        {name: 'fas fa-bed'}
    ]

   const [iconName, setIconName] = useState([])

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
   
   
    const removeColor = (colorName) => {
        setColors(colors.filter(color=> color.name !== colorName))
    }
    const addNewColor = (newColor) =>  {
        setColors([...colors, newColor], 
           // setNewColorName("")

        )
      
    }

    const addNewIcon = (newIcon) =>{
      setIconName([...iconName, newIcon]
    
   
      )}

    const handleChange = (e) => {
     setName({ ...name, [e.target.name]: e.target.value });
    }
    const handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName, 
            id: newPaletteName.toLowerCase().replace(/ /g, "-"),
            homeItems: colors
        }
        
        props.savePalette(newPalette)
        props.history.push("/")
    }
    const onSortEnd = ({oldIndex, newIndex }) => {
        setIconName (arrayMove(iconName, oldIndex, newIndex)

        )
    }


const clearColors = () => {
    setColors([])
}   

const addRandomColor = () => {
    const allColors = props.palettes.map(p => p.homeItems).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);

}

const iconItems = icons.map(icon => (
  <div>
      <i  className={icon.name}
       onClick={()=> {addNewIcon(icon.name)}} 
      ></i>
    
  </div>
))
    // useEffect(() => {
    
    //     ValidatorForm.addValidationRule("isColorNameUnique", value => {
    //         return colors.every(
    //           ({ name }) => name.toLowerCase() !== value.toLowerCase()
    //         );
    //       });
    //       ValidatorForm.addValidationRule("isColorUnique", value => {
    //           return colors.every(
    //             ({ color }) => color !== currentColor
    //           );
    //         });
       
        
    //   });

      const paletteIsFull = colors.length >= 20;


      return (
        <div className={classes.root}>
          <PaletteFormNav
            open={open}
            palettes={props.palettes}
            handleSubmit={handleSubmit}
            handleDrawerOpen={handleDrawerOpen}
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
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant='contained'
                className={classes.button}
                color='primary'
                onClick={addRandomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>

                                
            {/* <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={addNewColor}
              colors={colors}
             
            /> */}
       {iconItems}
             
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableIconList 
                icons={iconName}
                axis='xy'
                onSortEnd={onSortEnd}
                distance={20}
               
                />
          {/* <DraggableColorList
        
            colors={colors}
            removeColor={removeColor}
            axis='xy'
            onSortEnd={onSortEnd}
            distance={20}
          /> */}
        </main>
      </div> );
}
