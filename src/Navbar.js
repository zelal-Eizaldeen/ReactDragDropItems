import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import metraLogo from './assests/images/metraLogo.gif';


import './Navbar.css';

const styles ={ 
    

}
 class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {floor: this.props.floorUrl, open: false};
        
        
        this.handleFloorChange = this.handleFloorChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);

    }
   
    handleFloorChange(e) {
        this.setState({ floor: e.target.value, open: true});
        this.props.handleChange(e.target.value);
       
    }
    closeSnackbar(){
        this.setState({ open: false})
    }
    render() {
        const {handleChange, floorUrl} = this.props;
        const {floor} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to='/'>
                    <img src={metraLogo} className='logo' 
                    alt="Metra Constructions"/>
               </Link>
                </div>
                
                <div className='select-container'>
                    <Select value={floor} onChange={this.handleFloorChange}>
                        <MenuItem value="basement"> Basement </MenuItem>
                        <MenuItem value="groundFloor">Ground Floor</MenuItem>
                        <MenuItem value="firstFloor">First Floor</MenuItem>
                        <MenuItem value="secondFloor">Second Floor</MenuItem>
                    </Select>

                </div>

                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                open={this.state.open}
                autoHideDuration={3000}
                message={<span id="message-id">Floor changed!</span>}
                ContentProps={{"aria-describedby": "message-id"}}
                onClose={this.closeSnackbar}
                action={[
                <IconButton onClick={this.closeSnackbar} color='inherit' key='close'
                aria-label='close'
                >
                    <CloseIcon />
                    </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);
