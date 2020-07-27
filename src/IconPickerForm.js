import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import homeItemIcons from './homeItemIcons';
import sizes from './styles/sizes';

const styles = {
    
    picker: {
        width: "100% !important",
       justifyContent: "center",
       fontSize: "2rem",  
    },
   
 
}
const IconPickerForm = (props)=> {

      const  handleSubmit = (newIcon)=> {
           props.addNewIcon(newIcon); 
           
        }

 
        const icons =  homeItemIcons[0].homeItems

        const { classes} = props;

      
        const iconItems = icons.map(icon => (
               <div key={icon.id}>
                <i 
                onClick={()=>handleSubmit(icon)} 
                className={`${icon.icon} ${classes.picker}`}>

                </i>
                <span>{icon.name}</span>
               
            </div>
          ))
    
        return (
            <div>
            {iconItems}
   
            </div>
        )
    }

export default withStyles(styles)(IconPickerForm);
