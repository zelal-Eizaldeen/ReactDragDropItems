import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import homeItemsIcons from '../src/homeItemIcons';

import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "1rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px",

    }

}
class IconPickerForm extends Component {
    constructor(props){
        super(props);
        this.state={
            currentColor: "teal",
            newColorName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
componentDidMount(){
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
        return this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        );
      });
      ValidatorForm.addValidationRule("isColorUnique", value => 
          this.props.colors.every(
            ({ color }) => color !== this.state.currentColor)
          
      );
}
        updateCurrentColor(newColor) {
            this.setState({ currentColor: newColor.hex})
    }

    handleChange(e){
   this.setState({
       [e.target.name]: e.target.value
       })
        }

        handleSubmit(){
            const newColor = {
                color: this.state.currentColor,
                name: this.state.newColorName
            }
           
            this.props.addNewColor(newColor);
            this.setState({ newColorName: ""})
        }
    render() {
        const {paletteIsFull, classes} = this.props;
        const {currentColor, newColorName} = this.state;

        return (
            <div>
         
        <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator 
            className={classes.colorNameInput}
            value={newColorName}
            name="newColorName"
            margin="normal"
            variant="filled"
            placeholder="Color Name"
            onChange={this.handleChange}
            validators={['required','isColorNameUnique', 'isColorUnique']}
            errorMessages={['Enter Color Name','Color name must be unique', 'Color already used ']}
            />
             <Button
             className={classes.addColor}
              type='submit' 
             variant="contained" 
             color="primary" 
              style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
              disabled={paletteIsFull}
              >
             {paletteIsFull ? "Palette Full" : "Add"}

       </Button>
        </ValidatorForm>
       
      
            </div>
        )
    }
}
export default withStyles(styles)(IconPickerForm);
