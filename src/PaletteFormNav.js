import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from "@material-ui/core/MenuItem";
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import {DRAWER_WIDTH} from './constants';
import sizes from './styles/sizes';

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
    
  },
  hide: {
    display: "none"
  },
  appBar: {
   
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    height: '100px',
    [sizes.down("xs")]: {
      width: '100%',
     
    }
   
  },

  appBarShift: {
  
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
     easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [sizes.down("xs")]: {
      width: '100%',
     
    }
   
  },
  menuButton: {
    
    marginRight: theme.spacing(2),
   
  },
  navBtns:{
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      display: "flex",
      alignItems: "space-between"
     }
   
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
     margin: '0.1rem',
    
    }
   },
   selectContainer: {
    display: "inline-block",
    marginLeft: "9rem",
    marginRight: "1rem",
    [sizes.down("xs")]: {
   
      marginLeft: "6rem",
      marginRight: "0rem",
     }
  }
})
 class PaletteFormNav extends Component {
  constructor(props){
      super(props);
      this.state = {
          formShowing: false,
          floor: "Basement",
          icons: this.props.icons
       
         
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleFloorChange = this.handleFloorChange.bind(this);
      this.saveDesign = this.saveDesign.bind(this);
      this.sendDesign = this.sendDesign.bind(this);



      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);


  }
  
  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value})
    }

    showForm () {
      this.setState({formShowing: true})
    }

    hideForm(){
      this.setState({ formShowing: false})
    }

    handleFloorChange(e) {
      this.setState({ floor: e.target.value });
      const newDesign = {
        floor: e.target.value,
      }
    
      this.props.saveDesignWithFloor(newDesign);

    }
    saveDesign() { 
      this.props.saveDesign();
    }

    sendDesign() {
       this.props.handleSubmitDesign();
  
    }
    render() {
      
        const {classes, open,handleSubmitDesign, designs} = this.props;
       
        return (
          <div className={classes.root}>
         <CssBaseline />
        <AppBar
         color='inherit'
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap>
              Floor
            </Typography> */}
          </Toolbar>
        
          <div className={classes.selectContainer}>
          <InputLabel>Select Floor</InputLabel>

      <Select 
      
      value={this.state.floor} onChange={this.handleFloorChange}>
        <MenuItem value='basement'>Basement</MenuItem>
        <MenuItem value='groundFloor'>Ground Floor</MenuItem>
        <MenuItem value='firstFloor'>First Floor</MenuItem>
        <MenuItem value='secondFloor'>Second Floor</MenuItem>

      </Select>


    </div>

          <div className={classes.navBtns}>
          
     <Link to='/'>
     <Button className={classes.button} variant="contained" color='secondary'>Back</Button>
  </Link>

 
     
 
  <Button type='submit' className={classes.button} variant="contained" color="primary" 
  onClick={this.sendDesign}>
    Send 
  </Button>
       
     
         </div>

        </AppBar>
       {this.state.formShowing && (
       <PaletteMetaForm  
         designs={designs}
          handleSubmitDesign={handleSubmitDesign}
           hideForm={this.hideForm}
          
          />
        )}
            </div>
        )
    }
}
export default withStyles(styles, {withTheme: true})(PaletteFormNav);
