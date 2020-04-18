import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {DRAWER_WIDTH} from './constants';


const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex'
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
    height: '64px'
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns:{
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
   
  },
  button: {
    margin: "0 0.5rem",
   
   
  }
})
 class PaletteFormNav extends Component {
  constructor(props){
      super(props);
      this.state = {
          newPaletteName: "",
          formShowing: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);


  }
  componentDidMount(){
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
        return this.props.palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        );
      });
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
    render() {
      
        const {classes, open, palettes,handleSubmit} = this.props;
        const {newPaletteName} = this.state;
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
            <Typography variant="h6" noWrap>
              Create Your Design
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
          

<Link to='/'>
<Button className={classes.button} variant="contained" color='secondary'>Go Back</Button>
</Link>
<Button className={classes.button} variant="contained" color="primary" onClick={this.showForm}>
          Save
        </Button>
</div>

        </AppBar>
       {this.state.formShowing && (
       <PaletteMetaForm  
          palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/>
        )}
            </div>
        )
    }
}
export default withStyles(styles, {withTheme: true})(PaletteFormNav);
