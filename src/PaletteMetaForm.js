import React, { Component } from 'react';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

 class  PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newDesignName: "",
      floor: "Basement"
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveDesign = this.saveDesign.bind(this);

  }
 

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.designs.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  saveDesign() {
    const newDesign = {
      paletteName: this.state.newDesignName
    };
     this.props.handleSubmitDesign(newDesign);
    this.setState({ stage: "" });

  }

  


  handleChange(evt) {
   
    this.setState({
       [evt.target.name]: evt.target.value
    });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
 
   render(){
    const {  stage , newDesignName} = this.state;
    const { hideForm } = this.props;
     return(
    
    
    
   <Dialog  open={stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
        
    <DialogTitle id="form-dialog-title">اختر الدور</DialogTitle>
   <ValidatorForm onSubmit={this.saveDesign}>
   <DialogContent>
     <DialogContentText>
        سرداب أم أرضي أم أول أم ثاني
     </DialogContentText>
     
             <TextValidator 
             label="مثال: سرداب" 
             value={newDesignName}
             name="newDesignName"
             fullWidth
             margin="normal"
             onChange={this.handleChange}
             validators={['required', 'isPaletteNameUnique']}
             errorMessages={['Enter Palette Name', 'Name already used']}
             />
 
   </DialogContent>
   <DialogActions>
           <Button onClick={hideForm} color='primary'>
             Cancel
           </Button>
          
           <Button  variant='contained' color='primary' type='submit'>
             send 
           </Button>
         </DialogActions>
   </ValidatorForm>  

  </Dialog> 
    
     )
     }
  }
 
  export default PaletteMetaForm;