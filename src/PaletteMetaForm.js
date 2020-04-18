import React, { Component, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';




export default function PaletteMetaForm(props) {
  const {hideForm} = props;
    const [open, setOpen] = useState(true);
     const [newPaletteName, setNewPaletteName] = useState({
        paletteName: ""});

      const handleChange = (e) => {
        setNewPaletteName({ ...newPaletteName, [e.target.name]: e.target.value });

    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
          return props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()   
          );
        });
    });
    return (
        <Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Choose a Design Name</DialogTitle>
          <ValidatorForm onSubmit={() => props.handleSubmit(newPaletteName.paletteName)}>

          <DialogContent>
            <DialogContentText>
              Please enter a name for your design, Make sure it is unique..
            </DialogContentText>

                    <TextValidator 
                    label="Palette Name" 
                    value={newPaletteName.paletteName}
                    name="paletteName"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['Enter Palette Name', 'Name already used']}
                    />
                  


        
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    >
                    Save
                    </Button>
          </DialogActions>
          </ValidatorForm> 

        </Dialog>
     
    );
  }